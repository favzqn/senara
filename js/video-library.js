/**
 * Senara TV — Video Library Engine
 *
 * Features:
 * - LocalStorage feed cache (30 min TTL) for instant repeat visits
 * - Per-age-group channel rows (Netflix-style) with scroll arrows
 * - Category + age + search filtering (state persisted in sessionStorage)
 * - Age group themes applied via CSS data-attribute
 * - Hero video always uses channel's live latest video (no stale ID mismatch)
 * - Channel fallback card when RSS unavailable (no broken/fake content)
 * - Keyboard accessible video cards
 */

// ── Constants ─────────────────────────────────────────────────────────────────

const CACHE_KEY_PREFIX = 'snrtv_v1_';
const CACHE_TTL = 12 * 60 * 60 * 1000; // 12 hours

const AGE_ACCENT = {
  all:           '#0f172a',
  kids:          '#ec4899',
  teen:          '#6366f1',
  'young-adult': '#f97316',
};

const AGE_LABEL = {
  all:           'Semua',
  kids:          'Anak-anak',
  teen:          'Remaja',
  'young-adult': 'Dewasa Muda',
};

// ── Cache Helpers ─────────────────────────────────────────────────────────────

function readCache(channelId) {
  try {
    const raw = localStorage.getItem(CACHE_KEY_PREFIX + channelId);
    if (!raw) return null;
    const { videos, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) {
      localStorage.removeItem(CACHE_KEY_PREFIX + channelId);
      return null;
    }
    return videos.map(v => ({ ...v, published: new Date(v.published) }));
  } catch { return null; }
}

function writeCache(channelId, videos) {
  try {
    localStorage.setItem(CACHE_KEY_PREFIX + channelId, JSON.stringify({
      videos: videos.map(v => ({ ...v, published: v.published?.toISOString?.() ?? null })),
      ts: Date.now()
    }));
  } catch { /* quota exceeded — silently skip */ }
}

// ── Session State ─────────────────────────────────────────────────────────────

function loadState() {
  try {
    return {
      age:      sessionStorage.getItem('snrtv_age')  || 'all',
      category: sessionStorage.getItem('snrtv_cat')  || 'all',
      query:    sessionStorage.getItem('snrtv_q')    || '',
    };
  } catch { return { age: 'all', category: 'all', query: '' }; }
}

function saveState({ age, category, query }) {
  try {
    sessionStorage.setItem('snrtv_age',  age);
    sessionStorage.setItem('snrtv_cat',  category);
    sessionStorage.setItem('snrtv_q',    query);
  } catch { /* private mode — ignore */ }
}

// ── SenaraVideoLibrary Class ──────────────────────────────────────────────────

class SenaraVideoLibrary {
  constructor() {
    this.channels = Array.isArray(senaraTVChannels) ? senaraTVChannels : [];
    this.channelLookup = Object.fromEntries(this.channels.map(ch => [ch.id, ch]));
    this.heroConfigs = typeof senaraTVHero !== 'undefined' ? senaraTVHero : {};
    this.allVideos = [];

    const state = loadState();
    this._age      = state.age;
    this._category = state.category;
    this._query    = state.query;
  }

  // ── Feed Fetching ────────────────────────────────────────────────────────────

  async fetchFeedText(channelId) {
    const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`;
    const endpoints = [
      `https://api.allorigins.win/raw?url=${encodeURIComponent(feedUrl)}`,
      `https://r.jina.ai/https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`
    ];

    for (const url of endpoints) {
      try {
        const res = await fetch(url, { headers: { Accept: 'application/xml, text/xml' } });
        if (res.ok) return await res.text();
        console.warn(`Proxy ${res.status} for ${channelId} via ${url}`);
      } catch (err) {
        console.warn(`Proxy failed for ${channelId}:`, err.message);
      }
    }
    return null;
  }

  async fetchChannelVideos(channelId, maxVideos = 8) {
    // Check cache first
    const cached = readCache(channelId);
    if (cached && cached.length > 0) return cached;

    try {
      const text = await this.fetchFeedText(channelId);
      if (!text) return this.getMockVideos(channelId, maxVideos);

      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, 'application/xml');
      if (xmlDoc.getElementsByTagName('parsererror').length > 0) return this.getMockVideos(channelId, maxVideos);

      const entries = xmlDoc.getElementsByTagName('entry');
      const videos = [];

      for (let i = 0; i < entries.length && videos.length < maxVideos; i++) {
        const e = entries[i];
        const videoId      = e.getElementsByTagName('yt:videoId')[0]?.textContent;
        const title        = e.getElementsByTagName('title')[0]?.textContent;
        const published    = e.getElementsByTagName('published')[0]?.textContent;
        const thumbnail    = e.getElementsByTagName('media:thumbnail')[0]?.getAttribute('url');
        const links        = Array.from(e.getElementsByTagName('link'));
        const videoUrl     = links.find(n => n.getAttribute('rel') === 'alternate')?.getAttribute('href')
                          || links[0]?.getAttribute('href')
                          || `https://www.youtube.com/watch?v=${videoId}`;
        const desc         = e.getElementsByTagName('media:description')[0]?.textContent || '';
        const durSeconds   = this._extractDurationSeconds(e);

        if (this._isShort({ title, description: desc, durationSeconds: durSeconds, link: videoUrl })) continue;

        if (videoId && title) {
          videos.push({
            id: videoId,
            title,
            channelId,
            published: new Date(published),
            thumbnail,
            description: desc.substring(0, 150),
            duration: this._formatDuration(durSeconds, desc),
            url: videoUrl,
            mock: false
          });
        }
      }

      const result = videos.length > 0 ? videos : this.getMockVideos(channelId, maxVideos);
      if (result.length > 0 && !result[0].mock) writeCache(channelId, result);
      return result;
    } catch (err) {
      console.error(`Error fetching ${channelId}:`, err);
      return this.getMockVideos(channelId, maxVideos);
    }
  }

  /**
   * Only channels with verified real video IDs get mock data.
   * Other channels return [] → rendered as "Visit Channel" fallback.
   */
  getMockVideos(channelId, count = 8) {
    const mocks = {
      'UC_eifcIIjgN8Q_8m34nWo3Q': [  // Satu Persen — verified IDs
        { id: 'p2fRsVer9qg', title: 'Mengapa Banyak Orang Baik yang Bodoh & Gampang Ditipu?', duration: '12:34' },
        { id: 'uHblicbwnGU', title: 'Kesepian di Kota: Mengapa Kita Semakin Sendirian?', duration: '15:22' },
        { id: '7aFGkf_V8qg', title: 'Siapa yang Merasa Aman-aman Saja Simpan Uang di Bank?', duration: '8:45' },
        { id: 'dPnh1pCtJzQ', title: 'Stop Tertipu Harga Murah! #CostPerWear', duration: '6:30' },
      ],
      'UCu0yQD7NFMyLu_-TmKa4Hqg': [  // Kok Bisa — verified IDs
        { id: 'dHhIBBRtjVo', title: 'Mengapa Langit Berwarna Biru?', duration: '5:12' },
        { id: 'Z8ZpxCulM_E', title: 'Bagaimana Pesawat Bisa Terbang?', duration: '7:45' },
        { id: 'VLnWpwlKqFI', title: 'Apa itu Gravitasi Sebenarnya?', duration: '6:20' },
        { id: 'QqsCbPR6cJ8', title: 'Bagaimana Mata Kita Melihat Warna?', duration: '8:10' },
      ],
      // All other channels: return [] → "Visit Channel" card will be shown
    };

    const list = mocks[channelId] || [];
    return list.slice(0, count).map((v, i) => ({
      id: v.id,
      title: v.title,
      channelId,
      published: new Date(Date.now() - i * 86400000 * 4),
      thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
      description: 'Video edukatif pilihan dari Senara TV',
      duration: v.duration,
      url: `https://www.youtube.com/watch?v=${v.id}`,
      mock: false  // real IDs — safe to embed
    }));
  }

  // ── Duration Helpers ──────────────────────────────────────────────────────────

  _extractDurationSeconds(entry) {
    const s = entry.getElementsByTagName('yt:duration')[0]?.getAttribute('seconds');
    if (s) { const n = parseInt(s, 10); if (!isNaN(n)) return n; }
    const mcs = entry.getElementsByTagName('media:content');
    for (let i = 0; i < mcs.length; i++) {
      const a = mcs[i]?.getAttribute('duration');
      if (a) { const n = parseInt(a, 10); if (!isNaN(n)) return n; }
    }
    return null;
  }

  _formatDuration(secs, desc) {
    if (Number.isFinite(secs) && secs > 0) {
      const s = Math.floor(secs % 60);
      const m = Math.floor((secs / 60) % 60);
      const h = Math.floor(secs / 3600);
      const pm = h > 0 ? String(m).padStart(2, '0') : String(m);
      const ps = String(s).padStart(2, '0');
      return h > 0 ? `${h}:${pm}:${ps}` : `${pm}:${ps}`;
    }
    const match = desc.match(/(\d+):(\d+)/);
    return match ? `${match[1]}:${match[2]}` : '—';
  }

  _isShort({ title = '', description = '', durationSeconds = null, link = '' }) {
    if (Number.isFinite(durationSeconds) && durationSeconds > 0 && durationSeconds <= 90) return true;
    return [title, description, link].some(t => {
      const n = t.toLowerCase();
      return n.includes('/shorts/') || /(^|[\s#/])shorts?\b/.test(n) || n.includes('#short');
    });
  }

  // ── Video Loading ─────────────────────────────────────────────────────────────

  async loadAllVideos() {
    const results = await Promise.all(
      this.channels.map(async ch => {
        const videos = await this.fetchChannelVideos(ch.id, ch.maxVideos || 8);
        return videos.map(v => ({
          ...v,
          channelName:   ch.name,
          channelHandle: ch.handle,
          category:      ch.category,
          ageGroup:      ch.ageGroup,
          accent:        ch.accent,
          emoji:         ch.emoji,
          channelUrl:    ch.channelUrl,
          channelAvatar: ch.avatar,
          tagline:       ch.tagline,
        }));
      })
    );

    this.allVideos = results
      .flat()
      .filter(Boolean)
      .sort((a, b) => (b.published || 0) - (a.published || 0));

    return this.allVideos;
  }

  getChannelLatestVideo(channelId) {
    return this.allVideos.find(v => v.channelId === channelId) || null;
  }

  /**
   * Hero always uses the channel's LIVE latest video.
   * Config provides title/description/badge overlay only.
   */
  getHeroVideo(age = 'all') {
    const config = this.heroConfigs[age] || this.heroConfigs.all || {};
    const channelId = config.channelId;
    const video     = channelId ? this.getChannelLatestVideo(channelId) : this.allVideos[0];
    const channel   = video ? this.channelLookup[video.channelId] : null;
    return { video, channel, config };
  }

  getFilteredVideos({ age = 'all', category = 'all', query = '' } = {}) {
    let list = this.allVideos;
    if (age !== 'all')      list = list.filter(v => v.ageGroup === age);
    if (category !== 'all') list = list.filter(v => v.category === category);
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(v =>
        v.title.toLowerCase().includes(q) ||
        (v.channelName  || '').toLowerCase().includes(q) ||
        (v.description  || '').toLowerCase().includes(q)
      );
    }
    return list;
  }

  // ── Modal ─────────────────────────────────────────────────────────────────────

  openModal(videoId, channelId) {
    const video = this.allVideos.find(v => v.id === videoId && v.channelId === channelId);
    if (!video) return;

    // Guard: if video ID looks fake/placeholder, redirect to channel page
    if (video.mock || !/^[A-Za-z0-9_-]{11}$/.test(video.id)) {
      const ch = this.channelLookup[channelId];
      if (ch) window.open(ch.channelUrl, '_blank', 'noopener');
      return;
    }

    const modal   = document.getElementById('videoModal');
    const iframe  = modal.querySelector('iframe');
    const titleEl = modal.querySelector('.tv-modal-title');
    const chanEl  = modal.querySelector('.tv-modal-channel');

    const origin = (window.location.origin?.startsWith('file') || window.location.origin === 'null')
      ? 'https://senara.id'
      : window.location.origin;

    const params = new URLSearchParams({ rel: '0', modestbranding: '1', playsinline: '1', autoplay: '1', origin });
    iframe.src    = `https://www.youtube-nocookie.com/embed/${videoId}?${params}`;
    titleEl.textContent = video.title;
    chanEl.textContent  = video.channelName || '';

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this._modal = modal;

    // Focus the close button for accessibility
    setTimeout(() => modal.querySelector('.tv-close')?.focus(), 50);
  }

  closeModal() {
    if (this._modal) {
      this._modal.classList.remove('is-open');
      this._modal.querySelector('iframe').src = '';
      document.body.style.overflow = '';
      this._modal = null;
    }
  }
}

// ── Render: Hero ───────────────────────────────────────────────────────────────

function renderHeroSection(library, age = 'all') {
  const el = document.getElementById('tvHero');
  if (!el) return;

  const { video, channel, config } = library.getHeroVideo(age);

  if (!video || !channel) {
    el.innerHTML = `<div class="tv-empty"><span class="tv-empty-icon">📺</span><p>Video sedang disiapkan...</p></div>`;
    el.classList.remove('is-loading');
    return;
  }

  el.innerHTML = `
    <div class="tv-hero-card" style="--hero-accent:${channel.accent||'#6366f1'}">
      <div class="tv-hero-bg" style="background-image:url('${video.thumbnail}')"></div>
      <div class="tv-hero-overlay"></div>
      <div class="tv-hero-content">
        <span class="tv-hero-badge">${config.badge || '✨ Pilihan Tim'}</span>
        <h2 class="tv-hero-title">${config.title || video.title}</h2>
        <p class="tv-hero-desc">${config.description || video.description || ''}</p>
        <div class="tv-hero-channel">
          ${createAvatar(channel, 'lg')}
          <div>
            <p class="tv-hero-channel-name">${channel.name}</p>
            <p class="tv-hero-channel-focus">${channel.focus}</p>
          </div>
        </div>
        <div class="tv-hero-actions">
          <button
            class="tv-hero-play-btn"
            type="button"
            data-video-id="${video.id}"
            data-channel-id="${video.channelId}"
            aria-label="Putar ${video.title}"
          >▶ ${config.ctaLabel || 'Tonton Sekarang'}</button>
          <a href="${channel.channelUrl}" target="_blank" rel="noopener noreferrer" class="tv-hero-visit-btn">
            Kunjungi Channel
          </a>
        </div>
      </div>
    </div>
  `;

  attachVideoHandlers(el, library);
  el.classList.remove('is-loading');
}

// ── Render: Channel Rows ───────────────────────────────────────────────────────

function renderChannelRows(library, age = 'all') {
  const container = document.getElementById('channelRows');
  if (!container) return;

  const channels = age === 'all'
    ? library.channels
    : library.channels.filter(ch => ch.ageGroup === age);

  if (!channels.length) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = channels.map(channel => {
    const videos = library.allVideos
      .filter(v => v.channelId === channel.id)
      .slice(0, channel.maxVideos || 8);

    const cards = videos.length > 0
      ? videos.map(v => createVideoCard(v, library.channelLookup)).join('')
      : `<a
           href="${channel.channelUrl}"
           target="_blank"
           rel="noopener noreferrer"
           class="channel-fallback"
         >
           <span class="channel-fallback-icon">${channel.emoji || '📺'}</span>
           <span>Tonton di YouTube →</span>
         </a>`;

    const rowId = `scroll-${channel.id.slice(-8)}`;

    return `
      <div class="channel-row">
        <div class="channel-row-header">
          <div class="channel-row-identity">
            <span class="channel-row-emoji">${channel.emoji || '▶'}</span>
            <div>
              <h3 class="channel-row-name">${channel.name}</h3>
              <p class="channel-row-handle">${channel.handle}</p>
            </div>
          </div>
          <a href="${channel.channelUrl}" target="_blank" rel="noopener noreferrer" class="channel-row-link">
            Lihat di YouTube →
          </a>
        </div>
        <div class="channel-row-track">
          <button class="row-arrow row-arrow-prev" aria-label="Scroll kiri" data-target="${rowId}">‹</button>
          <div class="channel-row-scroll" id="${rowId}">${cards}</div>
          <button class="row-arrow row-arrow-next" aria-label="Scroll kanan" data-target="${rowId}">›</button>
        </div>
      </div>
    `;
  }).join('');

  attachVideoHandlers(container, library);

  // Set up scroll arrows for each row
  channels.forEach(channel => {
    const rowId = `scroll-${channel.id.slice(-8)}`;
    const scrollEl = document.getElementById(rowId);
    if (scrollEl) addScrollArrows(scrollEl);
  });
}

// ── Render: Latest / Filtered Grid ────────────────────────────────────────────

function renderLatestVideos(library, { age = 'all', category = 'all', query = '' } = {}) {
  const container = document.getElementById('latestVideos');
  const titleEl   = document.getElementById('latestTitle');
  const countEl   = document.getElementById('videoCount');
  if (!container) return;

  const videos = library.getFilteredVideos({ age, category, query });

  if (titleEl) {
    if (query.trim()) {
      titleEl.textContent = `🔍 Hasil untuk "${query.trim()}"`;
    } else if (category !== 'all') {
      const labels = {
        'mind-emotions':    '🧠 Emosi & Mental',
        'science-curiosity':'🔬 Sains',
        'self-growth':      '💡 Self Growth',
        'stories':          '🎙️ Cerita',
      };
      titleEl.textContent = labels[category] || category;
    } else {
      titleEl.textContent = age !== 'all'
        ? `🆕 Video Terbaru — ${AGE_LABEL[age]}`
        : '🆕 Video Terbaru';
    }
  }

  if (countEl) countEl.textContent = videos.length ? `${videos.length} video` : '';

  if (!videos.length) {
    container.innerHTML = `
      <div class="tv-empty">
        <span class="tv-empty-icon">🔍</span>
        <p>Tidak ada video yang cocok. Coba ubah filter atau kata kunci.</p>
      </div>
    `;
    container.classList.remove('is-loading');
    return;
  }

  container.innerHTML = videos.map(v => createVideoCard(v, library.channelLookup)).join('');
  attachVideoHandlers(container, library);
  container.classList.remove('is-loading');
}

// ── Topbar Interactions ────────────────────────────────────────────────────────

function setupTopbar(library) {
  const state = { age: library._age, category: library._category, query: library._query };

  // Restore persisted state
  restoreTopbarState(state);

  const triggerUpdate = () => {
    saveState(state);
    applyAgeTheme(state.age);
    renderHeroSection(library, state.age);
    renderChannelRows(library, state.age);
    renderLatestVideos(library, state);

    // Show/hide channel rows based on active filters
    const rowsEl = document.getElementById('channelRows');
    if (rowsEl) {
      rowsEl.style.display = (state.query.trim() || state.category !== 'all') ? 'none' : '';
    }
  };

  // Age tabs
  document.querySelectorAll('.tv-age-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.tv-age-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.age = tab.dataset.age || 'all';
      triggerUpdate();
    });
  });

  // Category chips
  document.querySelectorAll('.tv-cat').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.tv-cat').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.category = chip.dataset.cat || 'all';
      triggerUpdate();
    });
  });

  // Search input (debounced)
  const searchInput = document.getElementById('tvSearch');
  const clearBtn    = document.getElementById('tvSearchClear');

  if (searchInput) {
    if (state.query) {
      searchInput.value = state.query;
      if (clearBtn) clearBtn.hidden = false;
    }

    let debounce;
    searchInput.addEventListener('input', () => {
      clearTimeout(debounce);
      state.query = searchInput.value;
      if (clearBtn) clearBtn.hidden = !state.query;
      debounce = setTimeout(() => {
        triggerUpdate();
        if (state.query.trim()) {
          document.getElementById('latestSection')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 280);
    });

    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Escape') clearSearch(state, clearBtn, searchInput, triggerUpdate);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => clearSearch(state, clearBtn, searchInput, triggerUpdate));
  }

  // Apply initial theme
  applyAgeTheme(state.age);
  triggerUpdate();
}

function clearSearch(state, clearBtn, searchInput, triggerUpdate) {
  state.query = '';
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.hidden = true;
  triggerUpdate();
}

function restoreTopbarState({ age, category }) {
  if (age !== 'all') {
    document.querySelectorAll('.tv-age-tab').forEach(t => {
      const isActive = t.dataset.age === age;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });
  }
  if (category !== 'all') {
    document.querySelectorAll('.tv-cat').forEach(c => {
      c.classList.toggle('active', c.dataset.cat === category);
    });
  }
}

function applyAgeTheme(age) {
  const container = document.getElementById('tvContainer');
  if (container) container.dataset.activeAge = age;

  // Update CSS variable on :root for topbar elements (sticky, outside container)
  const accent = AGE_ACCENT[age] || AGE_ACCENT.all;
  const soft   = hexToRgba(accent, 0.1);
  document.documentElement.style.setProperty('--age-accent',      accent);
  document.documentElement.style.setProperty('--age-accent-soft', soft);

  // Update page background
  const bgMap = {
    kids:          '#fff5fb',
    teen:          '#f5f3ff',
    'young-adult': '#fff7ed',
    all:           '#f5f5f5',
  };
  document.body.style.background = bgMap[age] || bgMap.all;
}

// ── Scroll Arrows ──────────────────────────────────────────────────────────────

function addScrollArrows(scrollEl) {
  const track = scrollEl.closest('.channel-row-track');
  if (!track) return;

  const prevBtn = track.querySelector('.row-arrow-prev');
  const nextBtn = track.querySelector('.row-arrow-next');
  if (!prevBtn || !nextBtn) return;

  const update = () => {
    const atStart = scrollEl.scrollLeft <= 4;
    const atEnd   = scrollEl.scrollLeft >= scrollEl.scrollWidth - scrollEl.clientWidth - 4;
    prevBtn.style.opacity = atStart ? '0.3' : '1';
    prevBtn.style.pointerEvents = atStart ? 'none' : '';
    nextBtn.style.opacity = atEnd ? '0.3' : '1';
    nextBtn.style.pointerEvents = atEnd ? 'none' : '';
  };

  update();
  scrollEl.addEventListener('scroll', update, { passive: true });

  prevBtn.addEventListener('click', () => scrollEl.scrollBy({ left: -300, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => scrollEl.scrollBy({ left: 300, behavior: 'smooth' }));
}

// ── Modal Controls ─────────────────────────────────────────────────────────────

function setupModalControls(library) {
  const modal = document.getElementById('videoModal');
  if (!modal) return;

  modal.querySelector('.tv-close')?.addEventListener('click', () => library.closeModal());
  modal.addEventListener('click', e => { if (e.target === modal) library.closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') library.closeModal(); });
}

// ── Shared Helpers ─────────────────────────────────────────────────────────────

function hexToRgba(hex, alpha) {
  const h = (hex || '#000000').replace('#', '');
  const r = parseInt(h.slice(0, 2), 16) || 0;
  const g = parseInt(h.slice(2, 4), 16) || 0;
  const b = parseInt(h.slice(4, 6), 16) || 0;
  return `rgba(${r},${g},${b},${alpha})`;
}

function createVideoCard(video, channelLookup) {
  const channel = channelLookup[video.channelId];
  const accent  = channel?.accent || '#6366f1';
  const tagBg   = hexToRgba(accent, 0.12);

  return `
    <article
      class="yt-card"
      data-video-id="${video.id}"
      data-channel-id="${video.channelId}"
      role="button"
      tabindex="0"
      aria-label="Tonton: ${video.title}"
    >
      <div class="yt-thumb">
        <img src="${video.thumbnail}" alt="" loading="lazy">
        <span class="yt-duration">${video.duration || '—'}</span>
        <div class="yt-thumb-overlay">
          <div class="yt-thumb-play">▶</div>
        </div>
      </div>
      <div class="yt-card-body">
        <span class="yt-cat-tag" style="background:${tagBg};color:${accent}">
          ${channel?.emoji || '▶'} ${channel?.focus || ''}
        </span>
        <h3 class="yt-title">${video.title}</h3>
        <div class="yt-meta">
          ${createAvatar(channel, 'sm')}
          <span class="yt-meta-text">${channel?.name || 'Channel'} · ${formatRelativeDate(video.published)}</span>
        </div>
      </div>
    </article>
  `;
}

function createAvatar(channel = {}, size = 'sm') {
  const cls = size === 'lg' ? 'avatar-lg' : 'avatar-sm';
  if (channel.avatar) {
    return `<span class="${cls}"><img src="${channel.avatar}" alt="${channel.name || ''}" loading="lazy"></span>`;
  }
  return `<span class="${cls}">${channel.emoji || '▶'}</span>`;
}

function formatRelativeDate(date) {
  if (!(date instanceof Date) || isNaN(date)) return '';
  const d = Math.floor((Date.now() - date) / 86400000);
  if (d === 0) return 'Hari ini';
  if (d === 1) return 'Kemarin';
  if (d < 7)   return `${d} hari lalu`;
  if (d < 30)  return `${Math.floor(d / 7)} minggu lalu`;
  if (d < 365) return `${Math.floor(d / 30)} bulan lalu`;
  return `${Math.floor(d / 365)} tahun lalu`;
}

function attachVideoHandlers(scope, library) {
  scope.querySelectorAll('[data-video-id][data-channel-id]').forEach(el => {
    const open = () => library.openModal(el.dataset.videoId, el.dataset.channelId);
    el.addEventListener('click', open);
    el.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });
}

// ── Init ───────────────────────────────────────────────────────────────────────

async function initVideoLibrary() {
  const library = new SenaraVideoLibrary();

  try {
    await library.loadAllVideos();

    // setupTopbar triggers the initial render (with restored session state)
    setupTopbar(library);
    setupModalControls(library);

    window.senaraVideoLibrary = library;
  } catch (err) {
    console.error('Senara TV init error:', err);

    // Show user-visible error when init completely fails
    const containers = ['tvHero', 'channelRows', 'latestVideos'];
    const msg = `
      <div class="tv-empty">
        <span class="tv-empty-icon">📡</span>
        <p>Gagal memuat video. Periksa koneksi internet dan coba muat ulang halaman.</p>
        <button onclick="location.reload()" style="margin-top:1rem;padding:.5rem 1.25rem;border-radius:8px;border:none;background:#6366f1;color:#fff;cursor:pointer;font-size:.9rem">
          Muat Ulang
        </button>
      </div>`;
    containers.forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.innerHTML = msg; el.classList.remove('is-loading'); }
    });
  }
}
