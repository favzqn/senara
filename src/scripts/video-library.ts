import { getText } from './shared-utils';
import { getCurrentLanguage, type Language } from './i18n';
import { senaraTVChannels, senaraTVHero, type TVChannel, type TVHero } from '../data/tv-channels';

const AGE_ACCENT: Record<string, string> = {
  all:           '#0f172a',
  kids:          '#ec4899',
  teen:          '#6366f1',
  'young-adult': '#f97316',
};

const AGE_LABEL: Record<string, string> = {
  all:           'All',
  kids:          'Kids',
  teen:          'Teens',
  'young-adult': 'Young Adults',
};

interface Video {
  id: string;
  title: string;
  channelId: string;
  published: string;
  thumbnail: string;
  description: string;
  duration: string;
  url: string;
  channelName?: string;
  handle?: string;
  category?: string;
  ageGroup?: string;
  accent?: string;
  focus?: string;
  channelUrl?: string;
  avatar?: string;
  tagline?: string;
}

interface FilterState {
  age: string;
  category: string;
  query: string;
}

interface ChannelLookup {
  [id: string]: TVChannel;
}

function loadState(): FilterState {
  try {
    return {
      age:      sessionStorage.getItem('snrtv_age')  || 'all',
      category: sessionStorage.getItem('snrtv_cat')  || 'all',
      query:    sessionStorage.getItem('snrtv_q')    || '',
    };
  } catch { return { age: 'all', category: 'all', query: '' }; }
}

function saveState({ age, category, query }: FilterState): void {
  try {
    sessionStorage.setItem('snrtv_age',  age);
    sessionStorage.setItem('snrtv_cat',  category);
    sessionStorage.setItem('snrtv_q',    query);
  } catch {}
}

const TV_ICONS: Record<string, string> = {
  play: '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>',
  playCircle: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16" fill="currentColor"/></svg>',
  externalLink: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  search: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  empty: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>',
  arrowLeft: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>',
  arrowRight: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>',
  info: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  clock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  lock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>',
  unlock: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 019.9-1"/></svg>',
};

function hexToRgba(hex: string, alpha: number): string {
  const h = (hex || '#000000').replace('#', '');
  const r = parseInt(h.slice(0, 2), 16) || 0;
  const g = parseInt(h.slice(2, 4), 16) || 0;
  const b = parseInt(h.slice(4, 6), 16) || 0;
  return `rgba(${r},${g},${b},${alpha})`;
}

function formatRelativeDate(dateStr: string): string {
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return '';
  const d = Math.floor((Date.now() - date.getTime()) / 86400000);
  if (d === 0) return getText('tv.today', 'Today');
  if (d === 1) return getText('tv.yesterday', 'Yesterday');
  if (d < 7)   return `${d} ${getText('tv.daysAgo', 'days ago')}`;
  if (d < 30)  return `${Math.floor(d / 7)} ${getText('tv.weeksAgo', 'weeks ago')}`;
  if (d < 365) return `${Math.floor(d / 30)} ${getText('tv.monthsAgo', 'months ago')}`;
  return `${Math.floor(d / 365)} ${getText('tv.yearsAgo', 'years ago')}`;
}

function createAvatar(channel: Partial<TVChannel> = {}, size: 'sm' | 'lg' = 'sm'): string {
  const cls = size === 'lg' ? 'avatar-lg' : 'avatar-sm';
  if (channel.avatar) {
    return `<span class="${cls}"><img src="${channel.avatar}" alt="${channel.name || ''}" loading="lazy"></span>`;
  }
  const initial = (channel.name || '?')[0].toUpperCase();
  return `<span class="${cls}" style="background:${channel.accent || '#6366f1'};color:white;font-weight:700;font-size:${size === 'lg' ? '1rem' : '0.7rem'}">${initial}</span>`;
}

interface WatchHistoryEntry {
  videoId: string;
  channelId: string;
  timestamp: number;
  progress: number;
}

function getWatchHistory(): WatchHistoryEntry[] {
  try {
    const raw = localStorage.getItem('snrtv_history');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function addToWatchHistory(videoId: string, channelId: string): void {
  try {
    const history = getWatchHistory().filter(h => h.videoId !== videoId);
    history.unshift({ videoId, channelId, timestamp: Date.now(), progress: 0 });
    if (history.length > 20) history.length = 20;
    localStorage.setItem('snrtv_history', JSON.stringify(history));
  } catch {}
}

function scrollToChannel(channelId: string): void {
  const row = document.querySelector(`.nf-row[data-channel-id="${channelId}"]`);
  if (!row) return;
  row.scrollIntoView({ behavior: 'smooth', block: 'center' });
  row.classList.add('nf-row-highlight');
  setTimeout(() => row.classList.remove('nf-row-highlight'), 2000);
}

function createNetflixVideoCard(video: Video, channelLookup: ChannelLookup): string {
  const channel = channelLookup[video.channelId];
  const accent  = channel?.accent || '#6366f1';

  return `
    <article
      class="nf-card"
      data-video-id="${video.id}"
      data-channel-id="${video.channelId}"
      role="button"
      tabindex="0"
      aria-label="${getText('tv.watch', 'Watch')}: ${video.title}"
    >
      <div class="nf-card-thumb">
        <img src="${video.thumbnail}" alt="" loading="lazy">
        <span class="nf-card-duration">${video.duration || '—'}</span>
        <div class="nf-card-overlay">
          <div class="nf-card-play">${TV_ICONS.playCircle}</div>
        </div>
      </div>
      <div class="nf-card-info">
        <span class="nf-card-category nf-card-channel-link" style="color:${accent}" data-scroll-channel="${video.channelId}">${channel?.focus || ''}</span>
        <h3 class="nf-card-title">${video.title}</h3>
        <span class="nf-card-date">${formatRelativeDate(video.published)}</span>
      </div>
    </article>
  `;
}

function attachVideoHandlers(scope: Element, library: SenaraVideoLibrary): void {
  scope.querySelectorAll<HTMLElement>('[data-video-id][data-channel-id]').forEach(el => {
    const open = (): void => library.openModal(el.dataset.videoId!, el.dataset.channelId!);
    el.addEventListener('click', open);
    el.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
    });
  });

  scope.querySelectorAll<HTMLElement>('[data-scroll-channel]').forEach(el => {
    el.addEventListener('click', (e: Event) => {
      e.stopPropagation();
      scrollToChannel(el.dataset.scrollChannel!);
    });
  });
}

function setupRowScroll(trackEl: HTMLElement): void {
  const scroll = trackEl.querySelector('.nf-row-scroll') as HTMLElement | null;
  const prevBtn = trackEl.querySelector('.nf-row-arrow-prev') as HTMLElement | null;
  const nextBtn = trackEl.querySelector('.nf-row-arrow-next') as HTMLElement | null;
  if (!scroll || !prevBtn || !nextBtn) return;

  const scrollAmount = 320;

  const update = (): void => {
    const atStart = scroll.scrollLeft <= 4;
    const atEnd = scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth - 4;
    prevBtn.classList.toggle('is-hidden', atStart);
    nextBtn.classList.toggle('is-hidden', atEnd);
    trackEl.classList.toggle('has-overflow', !atEnd);
  };

  update();
  scroll.addEventListener('scroll', update, { passive: true });

  prevBtn.addEventListener('click', () => scroll.scrollBy({ left: -scrollAmount, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => scroll.scrollBy({ left: scrollAmount, behavior: 'smooth' }));
}

class SenaraVideoLibrary {
  channels: TVChannel[];
  channelLookup: ChannelLookup;
  heroConfigs: Record<string, TVHero>;
  allVideos: Video[];
  _age: string;
  _category: string;
  _query: string;
  private _modal: HTMLElement | null;
  private _currentVideoId: string;
  private _currentChannelId: string;
  private _modalKeydownHandler: ((e: KeyboardEvent) => void) | null;

  constructor(videosData: Record<string, any[]>) {
    const userLang: Language = getCurrentLanguage();
    const allChannels: TVChannel[] = Array.isArray(senaraTVChannels) ? senaraTVChannels : [];
    this.channels = allChannels.filter(ch => {
      if (userLang === 'id') return true;
      return ch.lang !== 'id';
    });
    this.channelLookup = Object.fromEntries(this.channels.map(ch => [ch.id, ch]));
    this.heroConfigs = typeof senaraTVHero !== 'undefined' ? senaraTVHero : {};
    this._modal = null;
    this._currentVideoId = '';
    this._currentChannelId = '';
    this._modalKeydownHandler = null;

    const state = loadState();
    this._age      = state.age;
    this._category = state.category;
    this._query    = state.query;

    this.allVideos = [];
    for (const channel of this.channels) {
      const rawVideos = videosData[channel.id] || [];
      for (const v of rawVideos) {
        this.allVideos.push({
          id: v.id,
          title: v.title,
          channelId: channel.id,
          published: v.published,
          thumbnail: v.thumbnail,
          description: v.description,
          duration: v.duration,
          url: v.url,
          channelName: channel.name,
          handle: channel.handle,
          category: channel.category,
          ageGroup: channel.ageGroup,
          accent: channel.accent,
          focus: channel.focus,
          channelUrl: channel.channelUrl,
          avatar: channel.avatar,
          tagline: channel.tagline,
        });
      }
    }

    this.allVideos.sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime());
  }

  getChannelLatestVideo(channelId: string): Video | null {
    return this.allVideos.find(v => v.channelId === channelId) || null;
  }

  getHeroVideo(age: string = 'all'): { video: Video | null; channel: TVChannel | null; config: Partial<TVHero> } {
    const config = this.heroConfigs[age] || this.heroConfigs.all || {};
    let channelId = config.channelId;
    if (channelId && !this.channelLookup[channelId]) {
      channelId = this.channels[0]?.id;
    }
    const video = channelId ? this.getChannelLatestVideo(channelId) : this.allVideos[0];
    const channel = video ? this.channelLookup[video.channelId] : null;
    return { video, channel, config };
  }

  getFilteredVideos({ age = 'all', category = 'all', query = '' }: Partial<FilterState> = {}): Video[] {
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

  getUpNextVideos(channelId: string, currentVideoId: string): Video[] {
    return this.allVideos
      .filter(v => v.channelId === channelId && v.id !== currentVideoId)
      .slice(0, 3);
  }

  playNext(): void {
    const nextVideos = this.getUpNextVideos(this._currentChannelId, this._currentVideoId);
    if (nextVideos.length > 0) {
      this.openModal(nextVideos[0].id, nextVideos[0].channelId);
    }
  }

  openModal(videoId: string, channelId: string): void {
    const video = this.allVideos.find(v => v.id === videoId && v.channelId === channelId);
    if (!video) return;

    this._currentVideoId = videoId;
    this._currentChannelId = channelId;
    addToWatchHistory(videoId, channelId);

    const modal   = document.getElementById('videoModal')!;
    const iframe  = modal.querySelector('iframe') as HTMLIFrameElement;
    const titleEl = modal.querySelector('.nf-modal-title') as HTMLElement;
    const chanEl  = modal.querySelector('.nf-modal-channel') as HTMLElement;

    const existingUpNext = modal.querySelector('.nf-up-next');
    if (existingUpNext) existingUpNext.remove();

    const isFileProtocol = !window.location.origin || window.location.origin === 'null' || window.location.protocol === 'file:';

    if (isFileProtocol) {
      const previewContainer = (modal.querySelector('.nf-modal-inner') || modal) as HTMLElement;
      const existingPreview = previewContainer.querySelector('.nf-preview-card');
      if (existingPreview) existingPreview.remove();

      const previewCard = document.createElement('div');
      previewCard.className = 'nf-preview-card';
      previewCard.innerHTML = `
        <div class="nf-preview-thumb">
          <img src="${video.thumbnail || `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}" alt="${video.title}">
        </div>
        <div class="nf-preview-info">
          <h3 class="nf-preview-title">${video.title}</h3>
          <p class="nf-preview-channel nf-preview-channel-link" data-scroll-channel="${channelId}">${video.channelName || ''}</p>
          <a
            href="https://www.youtube.com/watch?v=${videoId}"
            target="_blank"
            rel="noopener noreferrer"
            class="nf-preview-yt-btn"
          >${TV_ICONS.playCircle} ${getText('tv.watchOnYouTube', 'Watch on YouTube')}</a>
        </div>
      `;

      const modalVideo = modal.querySelector('.nf-modal-video') as HTMLElement | null;
      if (modalVideo) modalVideo.style.display = 'none';
      previewContainer.insertBefore(previewCard, modal.querySelector('.nf-modal-info'));
      titleEl.textContent = video.title;
      chanEl.textContent = video.channelName || '';

      this.renderUpNextSection(modal);
      this.attachModalChannelLinks(modal);

      modal.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      this._modal = modal;
      this.attachModalKeydown();
      setTimeout(() => (modal.querySelector('.nf-close') as HTMLElement | null)?.focus(), 50);
      return;
    }

    const existingPreview = modal.querySelector('.nf-preview-card');
    if (existingPreview) existingPreview.remove();
    const modalVideo = modal.querySelector('.nf-modal-video') as HTMLElement | null;
    if (modalVideo) modalVideo.style.display = '';

    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&autoplay=1`;
    titleEl.textContent = video.title;
    chanEl.textContent  = video.channelName || '';

    this.renderUpNextSection(modal);
    this.attachModalChannelLinks(modal);

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';
    this._modal = modal;
    this.attachModalKeydown();

    setTimeout(() => (modal.querySelector('.nf-close') as HTMLElement | null)?.focus(), 50);
  }

  private renderUpNextSection(modal: HTMLElement): void {
    const existing = modal.querySelector('.nf-up-next');
    if (existing) existing.remove();

    const nextVideos = this.getUpNextVideos(this._currentChannelId, this._currentVideoId);
    if (nextVideos.length === 0) return;

    const upNextEl = document.createElement('div');
    upNextEl.className = 'nf-up-next';
    upNextEl.innerHTML = `
      <h4 class="nf-up-next-title">${getText('tv.upNext', 'Up Next')}</h4>
      <div class="nf-up-next-list">
        ${nextVideos.map(v => `
          <button class="nf-up-next-item" data-video-id="${v.id}" data-channel-id="${v.channelId}" type="button">
            <img src="${v.thumbnail}" alt="" loading="lazy" class="nf-up-next-thumb">
            <div class="nf-up-next-info">
              <span class="nf-up-next-name">${v.title}</span>
              <span class="nf-up-next-duration">${v.duration || '—'}</span>
            </div>
          </button>
        `).join('')}
      </div>
    `;

    const modalInner = modal.querySelector('.nf-modal-inner') || modal;
    modalInner.appendChild(upNextEl);

    upNextEl.querySelectorAll<HTMLElement>('.nf-up-next-item').forEach(btn => {
      btn.addEventListener('click', () => {
        this.openModal(btn.dataset.videoId!, btn.dataset.channelId!);
      });
    });
  }

  private attachModalChannelLinks(modal: HTMLElement): void {
    modal.querySelectorAll<HTMLElement>('[data-scroll-channel]').forEach(el => {
      const handler = (e: Event): void => {
        e.stopPropagation();
        this.closeModal();
        scrollToChannel(el.dataset.scrollChannel!);
      };
      el.addEventListener('click', handler);
    });
  }

  private attachModalKeydown(): void {
    this.removeModalKeydown();
    this._modalKeydownHandler = (e: KeyboardEvent): void => {
      if (e.key === 'Escape') {
        this.closeModal();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        this.playNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const prevVideos = this.allVideos.filter(v => v.channelId === this._currentChannelId);
        const currentIdx = prevVideos.findIndex(v => v.id === this._currentVideoId);
        if (currentIdx > 0) {
          this.openModal(prevVideos[currentIdx - 1].id, prevVideos[currentIdx - 1].channelId);
        }
      }
    };
    document.addEventListener('keydown', this._modalKeydownHandler);
  }

  private removeModalKeydown(): void {
    if (this._modalKeydownHandler) {
      document.removeEventListener('keydown', this._modalKeydownHandler);
      this._modalKeydownHandler = null;
    }
  }

  closeModal(): void {
    if (this._modal) {
      this._modal.classList.remove('is-open');
      const iframe = this._modal.querySelector('iframe') as HTMLIFrameElement | null;
      if (iframe) { iframe.src = ''; }
      const modalVideo = this._modal.querySelector('.nf-modal-video') as HTMLElement | null;
      if (modalVideo) modalVideo.style.display = '';
      const preview = this._modal.querySelector('.nf-preview-card');
      if (preview) preview.remove();
      const upNext = this._modal.querySelector('.nf-up-next');
      if (upNext) upNext.remove();
      document.body.style.overflow = '';
      this.removeModalKeydown();
      this._modal = null;
      this._currentVideoId = '';
      this._currentChannelId = '';
    }
  }
}

function renderHeroSection(library: SenaraVideoLibrary, age: string = 'all'): void {
  const el = document.getElementById('tvHero');
  if (!el) return;

  const { video, channel, config } = library.getHeroVideo(age);

  if (!video || !channel) {
    el.innerHTML = `<div class="nf-empty">${TV_ICONS.empty}<p>${getText('tv.preparing', 'Videos are being prepared...')}</p></div>`;
    el.classList.remove('is-loading');
    return;
  }

  const accent = channel.accent || '#6366f1';

  el.innerHTML = `
    <div class="nf-hero" style="--hero-accent:${accent}">
      <div class="nf-hero-bg" style="background-image:url('${video.thumbnail}')"></div>
      <div class="nf-hero-gradient"></div>
      <div class="nf-hero-content">
        <span class="nf-hero-badge" style="background:${accent}">${config.badge || getText('tv.editorsPick', "Editor's Pick")}</span>
        <h1 class="nf-hero-title">${config.title || video.title}</h1>
        <p class="nf-hero-desc">${config.description || video.description || ''}</p>
        <div class="nf-hero-channel">
          ${createAvatar(channel, 'lg')}
          <div>
            <p class="nf-hero-channel-name">${channel.name}</p>
            <p class="nf-hero-channel-tagline">${channel.tagline || channel.focus}</p>
          </div>
        </div>
        <div class="nf-hero-actions">
          <button
            class="nf-hero-play"
            type="button"
            data-video-id="${video.id}"
            data-channel-id="${video.channelId}"
            aria-label="${getText('tv.play', 'Play')} ${video.title}"
          >${TV_ICONS.play} ${config.ctaLabel || getText('tv.watchNow', 'Watch Now')}</button>
          <button
            class="nf-hero-info"
            type="button"
            data-video-id="${video.id}"
            data-channel-id="${video.channelId}"
          >${TV_ICONS.info} ${getText('tv.moreInfo', 'More Info')}</button>
        </div>
      </div>
    </div>
  `;

  attachVideoHandlers(el, library);
  el.classList.remove('is-loading');
}

function renderChannelRows(library: SenaraVideoLibrary, age: string = 'all'): void {
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
      ? videos.map(v => createNetflixVideoCard(v, library.channelLookup)).join('')
      : `<a href="${channel.channelUrl}" target="_blank" rel="noopener noreferrer" class="nf-fallback">
           <span class="nf-fallback-icon">${TV_ICONS.playCircle}</span>
           <span>${getText('tv.watchYouTube', 'Watch on YouTube')}</span>
         </a>`;

    const rowId = `scroll-${channel.id.slice(-8)}`;

    return `
      <div class="nf-row" data-channel-id="${channel.id}" style="--row-accent:${channel.accent || '#6366f1'}">
        <div class="nf-row-header">
          ${createAvatar(channel, 'sm')}
          <div class="nf-row-header-text">
            <h2 class="nf-row-name">${channel.name}</h2>
            <span class="nf-row-focus">${channel.focus}</span>
          </div>
        </div>
        <div class="nf-row-track">
          <button class="nf-row-arrow nf-row-arrow-prev" aria-label="${getText('tv.scrollLeft', 'Scroll left')}">${TV_ICONS.arrowLeft}</button>
          <div class="nf-row-scroll" id="${rowId}">${cards}</div>
          <button class="nf-row-arrow nf-row-arrow-next" aria-label="${getText('tv.scrollRight', 'Scroll right')}">${TV_ICONS.arrowRight}</button>
        </div>
      </div>
    `;
  }).join('');

  attachVideoHandlers(container, library);

  container.querySelectorAll<HTMLElement>('.nf-row-track').forEach(track => setupRowScroll(track));
}

function renderLatestVideos(library: SenaraVideoLibrary, { age = 'all', category = 'all', query = '' }: Partial<FilterState> = {}): void {
  const container = document.getElementById('latestVideos');
  const titleEl   = document.getElementById('latestTitle');
  const countEl   = document.getElementById('videoCount');
  if (!container) return;

  const videos = library.getFilteredVideos({ age, category, query });

  if (titleEl) {
    if (query.trim()) {
      titleEl.textContent = `${getText('tv.resultsFor', 'Results for')} "${query.trim()}"`;
    } else if (category !== 'all') {
      const labels: Record<string, string> = {
        'mind-emotions':     'Emotions & Mental',
        'science-curiosity': 'Science',
        'self-growth':       'Self Growth',
        'stories':           'Stories',
      };
      titleEl.textContent = labels[category] || category;
    } else {
      titleEl.textContent = age !== 'all'
        ? `${getText('tv.latestVideos', 'Latest Videos')} — ${AGE_LABEL[age]}`
        : `${getText('tv.latestVideos', 'Latest Videos')}`;
    }
  }

  if (countEl) countEl.textContent = videos.length ? `${videos.length} video` : '';

  if (!videos.length) {
    container.innerHTML = `
      <div class="nf-empty">
        ${TV_ICONS.search}
        <p>${getText('tv.noMatch', 'No matching videos. Try changing your filters or keywords.')}</p>
      </div>
    `;
    container.classList.remove('is-loading');
    return;
  }

  container.innerHTML = videos.map(v => createNetflixVideoCard(v, library.channelLookup)).join('');
  attachVideoHandlers(container, library);
  container.classList.remove('is-loading');
}

function renderContinueWatching(library: SenaraVideoLibrary): void {
  const container = document.getElementById('continueWatching');
  const section = document.getElementById('continueSection');
  if (!container || !section) return;

  const history = getWatchHistory().slice(0, 5);
  if (history.length === 0) {
    section.style.display = 'none';
    return;
  }

  const videos: Video[] = [];
  for (const entry of history) {
    const video = library.allVideos.find(v => v.id === entry.videoId);
    if (video) videos.push(video);
  }

  if (videos.length === 0) {
    section.style.display = 'none';
    return;
  }

  section.style.display = '';
  container.innerHTML = videos.map(v => {
    const card = createNetflixVideoCard(v, library.channelLookup);
    return card.replace('</article>', '<span class="nf-continue-badge">Continue</span></article>');
  }).join('');
  attachVideoHandlers(container, library);
}

function restoreTopbarState({ age, category }: { age: string; category: string }): void {
  if (age !== 'all') {
    document.querySelectorAll<HTMLElement>('.tv-age-tab').forEach(t => {
      const isActive = t.dataset.age === age;
      t.classList.toggle('active', isActive);
      t.setAttribute('aria-selected', String(isActive));
    });
  }
  if (category !== 'all') {
    document.querySelectorAll<HTMLElement>('.tv-cat').forEach(c => {
      c.classList.toggle('active', c.dataset.cat === category);
    });
  }
}

function applyAgeTheme(age: string): void {
  const container = document.getElementById('tvContainer');
  if (container) container.dataset.activeAge = age;

  const accent = AGE_ACCENT[age] || AGE_ACCENT.all;
  document.documentElement.style.setProperty('--age-accent', accent);
}

function clearSearch(state: FilterState, clearBtn: HTMLElement | null, searchInput: HTMLInputElement | null, triggerUpdate: () => void): void {
  state.query = '';
  if (searchInput) searchInput.value = '';
  if (clearBtn) clearBtn.hidden = true;
  triggerUpdate();
}

function setupTopbar(library: SenaraVideoLibrary): void {
  const state: FilterState = { age: library._age, category: library._category, query: library._query };

  restoreTopbarState(state);

  const triggerUpdate = (): void => {
    saveState(state);
    applyAgeTheme(state.age);
    renderHeroSection(library, state.age);
    renderChannelRows(library, state.age);
    renderLatestVideos(library, state);
    renderContinueWatching(library);

    const rowsEl = document.getElementById('channelRows');
    if (rowsEl) {
      rowsEl.style.display = (state.query.trim() || state.category !== 'all') ? 'none' : '';
    }
  };

  document.querySelectorAll<HTMLElement>('.tv-age-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      if (document.getElementById('tvContainer')?.dataset.kidsMode === 'on') return;
      document.querySelectorAll<HTMLElement>('.tv-age-tab').forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');
      state.age = tab.dataset.age || 'all';
      triggerUpdate();
    });
  });

  document.querySelectorAll<HTMLElement>('.tv-cat').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll<HTMLElement>('.tv-cat').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.category = chip.dataset.cat || 'all';
      triggerUpdate();
    });
  });

  const searchInput = document.getElementById('tvSearch') as HTMLInputElement | null;
  const clearBtn    = document.getElementById('tvSearchClear') as HTMLElement | null;

  if (searchInput) {
    if (state.query) {
      searchInput.value = state.query;
      if (clearBtn) clearBtn.hidden = false;
    }

    let debounce: ReturnType<typeof setTimeout>;
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

    searchInput.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Escape') clearSearch(state, clearBtn, searchInput, triggerUpdate);
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => clearSearch(state, clearBtn, searchInput, triggerUpdate));
  }

  setupKidsMode(state, triggerUpdate);

  applyAgeTheme(state.age);
  triggerUpdate();
}

function setupKidsMode(state: FilterState, triggerUpdate: () => void): void {
  const container = document.getElementById('tvContainer');
  const kidsBtn = document.getElementById('kidsModeToggle');
  const exitBtn = document.getElementById('kidsModeExit');
  if (!container || !kidsBtn) return;

  const isKidsModeOn = (): boolean => {
    try { return localStorage.getItem('snrtv_kids_mode') === 'on'; } catch { return false; }
  };

  const applyKidsMode = (on: boolean): void => {
    container.dataset.kidsMode = on ? 'on' : 'off';
    const ageTabs = document.querySelectorAll<HTMLElement>('.tv-age-tab');
    if (on) {
      state.age = 'kids';
      ageTabs.forEach(t => {
        if (t.dataset.age === 'kids') {
          t.classList.add('active');
          t.setAttribute('aria-selected', 'true');
        } else {
          t.classList.remove('active');
          t.setAttribute('aria-selected', 'false');
          t.style.display = 'none';
        }
      });
      kidsBtn.innerHTML = `${TV_ICONS.unlock} ${getText('tv.exitKidsMode', 'Exit Kids Mode')}`;
      kidsBtn.classList.add('kids-mode-active');
      if (exitBtn) exitBtn.style.display = '';
    } else {
      ageTabs.forEach(t => { t.style.display = ''; });
      kidsBtn.innerHTML = `${TV_ICONS.lock} ${getText('tv.kidsMode', 'Kids Mode')}`;
      kidsBtn.classList.remove('kids-mode-active');
      if (exitBtn) exitBtn.style.display = 'none';
    }
    triggerUpdate();
  };

  if (isKidsModeOn()) {
    applyKidsMode(true);
  }

  kidsBtn.addEventListener('click', () => {
    if (isKidsModeOn()) {
      try { localStorage.removeItem('snrtv_kids_mode'); } catch {}
      applyKidsMode(false);
    } else {
      try { localStorage.setItem('snrtv_kids_mode', 'on'); } catch {}
      applyKidsMode(true);
    }
  });

  if (exitBtn) {
    exitBtn.addEventListener('click', () => {
      if (!isKidsModeOn()) return;
      try { localStorage.removeItem('snrtv_kids_mode'); } catch {}
      applyKidsMode(false);
    });
  }
}

function setupModalControls(library: SenaraVideoLibrary): void {
  const modal = document.getElementById('videoModal');
  if (!modal) return;

  (modal.querySelector('.nf-close') as HTMLElement | null)?.addEventListener('click', () => library.closeModal());
  modal.addEventListener('click', (e: Event) => { if (e.target === modal) library.closeModal(); });
}

export function initVideoLibrary(): void {
  const dataEl = document.getElementById('tvData');
  let videosData: Record<string, any[]> = {};

  if (dataEl) {
    try {
      videosData = JSON.parse(dataEl.textContent || '{}').channels || {};
    } catch {}
  }

  const library = new SenaraVideoLibrary(videosData);

  setupTopbar(library);
  setupModalControls(library);
  renderContinueWatching(library);

  (window as any).senaraVideoLibrary = library;
}
