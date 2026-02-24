/**
 * Story Page JavaScript
 * Handles story detail page rendering and interactions
 */

// ============================================================================
// Translation Helper
// ============================================================================

/**
 * Translation helper with fallback
 * @param {string} key - Translation key
 * @param {string} fallback - Fallback text
 * @returns {string} Translated text or fallback
 */
function t(key, fallback = '') {
  if (typeof I18n !== 'undefined' && I18n.t) {
    const result = I18n.t(key);
    return result !== key ? result : fallback;
  }
  return fallback;
}

// ============================================================================
// Story Loading
// ============================================================================

/**
 * Load story data from URL parameter
 */
function loadStory() {
  const storyId = getUrlParam('id');
  
  if (!storyId) {
    showError('Story not found');
    return;
  }

  try {
    const story = allStoriesData.find(s => s.id === storyId);
    if (!story) throw new Error('Story not found');
    
    // Update page title
    document.title = `${story.title} | Senara`;
    
    renderStory(story);
  } catch (error) {
    console.error('Error loading story:', error);
    showError('Error loading story');
  }
}

/**
 * Show error state
 * @param {string} message - Error message
 */
function showError(message) {
  const storyPage = document.getElementById('storyPage');
  if (!storyPage) return;
  
  storyPage.innerHTML = `
    <div class="min-h-screen flex items-center justify-center px-4">
      <div class="text-center max-w-md">
        <div class="text-6xl mb-6">😕</div>
        <h1 class="text-2xl font-bold text-stone-800 mb-4">${t('storyPage.errorTitle', message)}</h1>
        <p class="text-stone-600 mb-8">${t('storyPage.errorDesc', 'Cerita yang kamu cari tidak ditemukan atau sudah tidak tersedia.')}</p>
        <a href="koleksi.html" class="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-xl font-semibold hover:bg-stone-700 transition">
          ${t('storyPage.backToCollection', '← Kembali ke Koleksi')}
        </a>
      </div>
    </div>
  `;
}

// ============================================================================
// Story Rendering
// ============================================================================

/**
 * Render story detail page
 * @param {Object} story - Story data object
 */
function renderStory(story) {
  const emoji = getStoryEmoji(story.id);
  const pathId = getUrlParam('path');
  const isComingSoon = story.status === 'coming-soon';
  const category = story.category ? getCategoryById(story.category) : null;
  const rating = story.rating || 0;
  const backLink = pathId ? `path-detail.html?id=${pathId}` : 'koleksi.html';
  const pathBannerHTML = pathId ? `<div class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700"><strong>📚 Learning Path:</strong> Bagian dari jalur pembelajaran</div>` : '';

  // Difficulty class
  const difficultyClass = {
    'Beginner': 'difficulty-beginner',
    'Intermediate': 'difficulty-intermediate',
    'Advanced': 'difficulty-advanced'
  }[story.difficulty] || '';

  // Learning outcomes HTML
  const outcomesHTML = story.learningOutcomes ? story.learningOutcomes.map((outcome, i) => `
    <div class="outcome-item">
      <div class="outcome-check">✓</div>
      <span class="text-stone-700">${outcome}</span>
    </div>
  `).join('') : '';

  // Features HTML
  const featuresHTML = `
    ${story.voiceActed ? `<span class="feature-badge">${t('storyPage.features.voiceActed', '🎙️ Voice Acted')}</span>` : ''}
    ${story.hasChoices ? `<span class="feature-badge">${t('storyPage.features.multiplePaths', '🔀 Multiple Paths')}</span>` : ''}
    ${story.hasAchievements ? `<span class="feature-badge">${t('storyPage.features.achievements', '🏆 Achievements')}</span>` : ''}
  `;

  const html = `
    <!-- Hero Section -->
    <section class="story-hero">
      <!-- Background -->
      <div class="story-hero-bg" style="background: linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%);">
        <div class="emoji-bg" style="top: 10%; left: 10%;">${emoji}</div>
        <div class="emoji-bg" style="top: 30%; right: 5%; animation-delay: -2s;">${emoji}</div>
      </div>

      <!-- Content -->
      <div class="story-hero-content pb-12 px-4">
        <div class="max-w-4xl mx-auto">
          ${pathBannerHTML}

          <!-- Category & Difficulty -->
          <div class="flex flex-wrap items-center gap-3 mb-4">
            ${category ? `
              <span class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/80 backdrop-blur rounded-full text-sm font-medium text-stone-700">
                ${category.icon} ${category.title}
              </span>
            ` : ''}
            <span class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-semibold border ${difficultyClass}">
              ${story.difficulty === 'Beginner' ? '🌱' : story.difficulty === 'Intermediate' ? '🌿' : '🌳'} ${story.difficulty}
            </span>
          </div>

          <!-- Title -->
          <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-stone-900 mb-3 sm:mb-4 leading-tight">
            ${story.title}
          </h1>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            ${story.tags.map(tag => `
              <span class="px-2 sm:px-3 py-0.5 sm:py-1 bg-white/70 backdrop-blur text-stone-700 rounded-full text-xs sm:text-sm font-medium border border-stone-200">
                ${tag}
              </span>
            `).join('')}
          </div>

          <!-- Collaboration Badge -->
          ${story.collaboration ? `
            <div class="collab-badge inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-6">
              <span class="text-xl">🤝</span>
              <span class="font-semibold text-pink-700">${story.collaboration}</span>
            </div>
          ` : ''}

          <!-- Quick Stats -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-8">
            <div class="stat-item">
              <div class="stat-value">⏱️ ${story.duration}</div>
              <div class="stat-label">${t('storyPage.stats.minutes', 'Menit')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">📖 ${story.chapters}</div>
              <div class="stat-label">${t('storyPage.stats.chapter', 'Chapter')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${story.age}</div>
              <div class="stat-label">${t('storyPage.stats.age', 'Usia')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value star-filled">${rating.toFixed(1)}</div>
              <div class="stat-label">${t('storyPage.stats.rating', 'Rating')}</div>
            </div>
          </div>

          <!-- Save Progress Tip (for long stories) -->
          ${!isComingSoon && story.duration >= 20 ? `
            <div class="save-tip-banner mb-4 sm:mb-6">
              <div class="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                <span class="text-2xl flex-shrink-0">💾</span>
                <div>
                  <p class="font-semibold text-amber-900 text-sm sm:text-base">${t('storyPage.saveTip.title', '💡 Kamu bisa simpan progress kapan saja!')}</p>
                  <p class="text-amber-800 text-xs sm:text-sm mt-1">${t('storyPage.saveTip.desc', 'Klik <strong>☰ Menu</strong> di pojok kanan bawah → pilih <strong>"Save"</strong>. Untuk lanjutkan, pilih <strong>"Load"</strong>.')}</p>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Play Button -->
          ${isComingSoon ? `
            <div class="relative">
              <button disabled class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl opacity-60 cursor-not-allowed">
                ${t('storyPage.comingSoon', '🔜 Segera Hadir')}
              </button>
              <p class="mt-3 text-stone-600 text-sm">${t('storyPage.comingSoonDesc', 'Cerita ini sedang dalam pengembangan')}</p>
            </div>
          ` : `
            <button id="playBtn" class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl" data-umami-event="Story play button">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                <span class="text-xl sm:text-2xl">▶</span>
                <span>${t('storyPage.playNow', 'Mainkan Sekarang')}</span>
              </span>
            </button>
          `}

          <!-- Scroll indicator -->
          <div class="scroll-indicator text-center mt-4 sm:mt-8 text-stone-400">
            <span class="text-xl sm:text-2xl">↓</span>
            <p class="text-xs sm:text-sm">${t('storyPage.scrollMore', 'Scroll untuk info lebih lanjut')}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Details Section -->
    <section class="py-10 sm:py-16 px-4 bg-gradient-to-b from-transparent to-stone-50/50">
      <div class="max-w-4xl mx-auto">
        <!-- Description Card -->
        <div class="info-card rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="text-2xl font-bold text-stone-800 mb-4 flex items-center gap-3">
            <span>📖</span> ${t('storyPage.aboutStory', 'Tentang Cerita Ini')}
          </h2>
          <p class="text-stone-700 text-lg leading-relaxed">
            ${story.longDescription || story.description}
          </p>
          
          <!-- Features -->
          <div class="flex flex-wrap gap-2 mt-6 pt-6 border-t border-stone-100">
            ${featuresHTML}
          </div>
        </div>

        <!-- Learning Outcomes -->
        ${story.learningOutcomes && story.learningOutcomes.length > 0 ? `
          <div class="info-card rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
            <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
              <span>🎯</span> ${t('storyPage.learningOutcomes', 'Yang Akan Kamu Pelajari')}
            </h2>
            <div class="grid gap-3">
              ${outcomesHTML}
            </div>
          </div>
        ` : ''}

        <!-- Credits -->
        <div class="info-card rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
            <span>✨</span> ${t('storyPage.credits', 'Credits')}
          </h2>
          <div class="grid sm:grid-cols-2 gap-4">
            ${story.author ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <span class="text-2xl">👤</span>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Author</p>
                  <p class="font-semibold text-stone-800">${story.author}</p>
                </div>
              </div>
            ` : ''}
            ${story.scriptBy ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <span class="text-2xl">✍️</span>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Script By</p>
                  <p class="font-semibold text-stone-800">${story.scriptBy}</p>
                </div>
              </div>
            ` : ''}
            ${story.series ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <span class="text-2xl">📚</span>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Series</p>
                  <p class="font-semibold text-stone-800">${story.series}</p>
                </div>
              </div>
            ` : ''}
            ${story.releaseDate ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <span class="text-2xl">📅</span>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Release Date</p>
                  <p class="font-semibold text-stone-800">${formatDate(story.releaseDate)}</p>
                </div>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Share Section -->
        <div class="info-card rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="text-xl font-bold text-stone-800 mb-4 text-center">
            ${t('storyPage.shareStory', 'Bagikan Cerita Ini')}
          </h2>
          <div class="flex justify-center gap-4">
            <a id="shareTwitter" href="#" target="_blank" rel="noopener noreferrer" class="share-btn twitter" title="Share on Twitter" data-umami-event="Story share Twitter">
              𝕏
            </a>
            <a id="shareFacebook" href="#" target="_blank" rel="noopener noreferrer" class="share-btn facebook" title="Share on Facebook" data-umami-event="Story share Facebook">
              f
            </a>
            <a id="shareWhatsApp" href="#" target="_blank" rel="noopener noreferrer" class="share-btn whatsapp" title="Share on WhatsApp" data-umami-event="Story share WhatsApp">
              💬
            </a>
            <button id="shareCopy" class="share-btn copy" title="Copy Link" data-umami-event="Story share Copy link">
              🔗
            </button>
          </div>
          <p id="copyFeedback" class="text-center text-sm text-green-600 mt-3 opacity-0 transition-opacity">${t('storyPage.linkCopied', 'Link berhasil disalin!')}</p>
        </div>

        <!-- Bottom CTA -->
        ${!isComingSoon ? `
          <div class="text-center py-6 sm:py-8">
            <button id="playBtnBottom" class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl mb-4 sm:mb-6" data-umami-event="Story play button bottom">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                <span class="text-xl sm:text-2xl">▶</span>
                <span>${t('storyPage.playNow', 'Mainkan Sekarang')}</span>
              </span>
            </button>
          </div>
        ` : ''}

        <!-- Back Link -->
        <div class="text-center pt-8 border-t border-stone-200">
          <a href="${backLink}" class="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 font-semibold transition" data-umami-event="Story back link">
            ${pathId ? t('storyPage.backToPath', '← Kembali ke Learning Path') : t('storyPage.backToCollection', '← Kembali ke Koleksi')}
          </a>
        </div>
      </div>
    </section>
  `;

  document.getElementById('storyPage').innerHTML = html;

  // Setup event listeners
  setupPlayButtons(story, pathId, isComingSoon);
  setupSocialSharing(story);
  setupCopyLink();
}

// ============================================================================
// Event Handlers
// ============================================================================

/**
 * Setup play button click handlers
 * @param {Object} story - Story data
 * @param {string} pathId - Learning path ID (optional)
 * @param {boolean} isComingSoon - Whether story is coming soon
 */
function setupPlayButtons(story, pathId, isComingSoon) {
  if (isComingSoon) return;

  const playHandler = () => {
    if (pathId) {
      sessionStorage.setItem('currentPathId', pathId);
      sessionStorage.setItem('currentStoryId', story.id);
    }
    window.location.href = CONFIG.paths.monogatari + `?story=${story.id}`;
  };

  document.getElementById('playBtn')?.addEventListener('click', playHandler);
  document.getElementById('playBtnBottom')?.addEventListener('click', playHandler);
}

/**
 * Setup copy link button with feedback
 */
function setupCopyLink() {
  document.getElementById('shareCopy')?.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      const feedback = document.getElementById('copyFeedback');
      if (feedback) {
        feedback.style.opacity = '1';
        setTimeout(() => {
          feedback.style.opacity = '0';
        }, 2000);
      }
    });
  });
}

// ============================================================================
// Page Initialization
// ============================================================================

/**
 * Initialize story page
 */
function initStoryPage() {
  initNavbar('collection');
  initFooter();
  loadStory();
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initStoryPage);
