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
// Meta Tags
// ============================================================================

/**
 * Update OG and Twitter meta tags for social sharing
 * @param {Object} story - Story data object
 */
function updateMetaTags(story) {
  document.title = `${story.title} | Senara`;

  const setMeta = (attr, key, value) => {
    if (!value) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  };

  const desc = story.description || '';
  const url = window.location.href;

  setMeta('property', 'og:title', story.title);
  setMeta('property', 'og:description', desc);
  setMeta('property', 'og:url', url);
  if (story.thumbnail) setMeta('property', 'og:image', story.thumbnail);

  setMeta('name', 'twitter:title', story.title);
  setMeta('name', 'twitter:description', desc);
  setMeta('name', 'description', desc);
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
        <div class="text-6xl mb-6"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#A8A29E" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M16 16s-1.5-2-4-2-4 2-4 2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg></div>
        <h1 class="text-2xl font-bold text-stone-800 mb-4">${t('storyPage.errorTitle', message)}</h1>
        <p class="text-stone-600 mb-8">${t('storyPage.errorDesc', 'The story you\'re looking for was not found or is no longer available.')}</p>
        <a href="collection.html" class="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 text-white rounded-xl font-semibold hover:bg-stone-700 transition">
          ${t('storyPage.backToCollection', '← Back to Collection')}
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
  updateMetaTags(story);
  const pathId = getUrlParam('path');
  const isComingSoon = story.status === 'coming-soon';
  const category = story.category ? getCategoryById(story.category) : null;
  const rating = story.rating || 0;
  const backLink = pathId ? `path-detail.html?id=${pathId}` : 'collection.html';
  const storyInitial = story.title.charAt(0).toUpperCase();
  const pathBannerHTML = pathId ? `<div class="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-sm text-blue-700"><strong><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> Learning Path:</strong> Part of a learning path</div>` : '';

  // Difficulty class
  const difficultyClass = {
    'Beginner': 'difficulty-beginner',
    'Intermediate': 'difficulty-intermediate',
    'Advanced': 'difficulty-advanced'
  }[story.difficulty] || '';

  // Learning outcomes HTML
  const outcomesHTML = story.learningOutcomes ? story.learningOutcomes.map((outcome, i) => `
    <div class="outcome-item">
      <div class="outcome-check"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
      <span class="text-stone-700">${outcome}</span>
    </div>
  `).join('') : '';

  // Features HTML
  const micSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>';
  const shuffleSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>';
  const trophySvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>';

  const featuresHTML = `
    ${story.voiceActed ? `<span class="feature-badge">${micSvg} ${t('storyPage.features.voiceActed', 'Voice Acted')}</span>` : ''}
    ${story.hasChoices ? `<span class="feature-badge">${shuffleSvg} ${t('storyPage.features.multiplePaths', 'Multiple Paths')}</span>` : ''}
    ${story.hasAchievements ? `<span class="feature-badge">${trophySvg} ${t('storyPage.features.achievements', 'Achievements')}</span>` : ''}
  `;

  const html = `
    <!-- Hero Section -->
    <section class="story-hero">
      <!-- Background -->
      <div class="story-hero-bg" style="background: linear-gradient(135deg, #e8dcc8 0%, #d4c4b0 100%);">
        <div class="emoji-bg" style="top: 10%; left: 10%; font-family:'Crimson Pro',serif; font-weight:700; color:#4F46E5; opacity:0.15;">${storyInitial}</div>
        <div class="emoji-bg" style="top: 30%; right: 5%; animation-delay: -2s; font-family:'Crimson Pro',serif; font-weight:700; color:#4F46E5; opacity:0.15;">${storyInitial}</div>
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
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22c0 0 8-4 8-12C20 5.6 16.4 2 12 2 7.6 2 4 5.6 4 10c0 8 8 12 8 12z"/></svg> ${story.difficulty}
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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#BE185D" stroke-width="2"><path d="M11 17a4 4 0 0 1-4-4V7a4 4 0 0 1 8 0v6a4 4 0 0 1-4 4z"/><path d="M17 17a4 4 0 0 0 4-4V7a4 4 0 0 0-8 0v6a4 4 0 0 0 4 4z"/></svg>
              <span class="font-semibold text-pink-700">${story.collaboration}</span>
            </div>
          ` : ''}

          <!-- Quick Stats -->
          <div class="grid grid-cols-4 gap-2 sm:gap-3 mb-4 sm:mb-8">
            <div class="stat-item">
              <div class="stat-value"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ${story.duration}</div>
              <div class="stat-label">${t('storyPage.stats.minutes', 'Minutes')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display:inline;vertical-align:-3px"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${story.chapters}</div>
              <div class="stat-label">${t('storyPage.stats.chapter', 'Chapter')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">${story.age}</div>
              <div class="stat-label">${t('storyPage.stats.age', 'Age')}</div>
            </div>
            <div class="stat-item">
              <div class="stat-value star-filled">${rating.toFixed(1)}</div>
              <div class="stat-label">${t('storyPage.stats.rating', 'Rating')}</div>
            </div>
          </div>

          <!-- Save Progress Tip (for long stories) -->
          ${!isComingSoon && story.duration >= 20 ? `
            <div class="save-tip-banner mb-4 sm:mb-6">
              <div class="flex items-start gap-3 p-4 bg-indigo-50 border border-indigo-200 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4F46E5" stroke-width="2" class="flex-shrink-0"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
                <div>
                  <p class="font-semibold text-indigo-900 text-sm sm:text-base">${t('storyPage.saveTip.title', 'You can save your progress anytime!')}</p>
                  <p class="text-indigo-800 text-xs sm:text-sm mt-1">${t('storyPage.saveTip.desc', 'Click <strong>☰ Menu</strong> at the bottom right → select <strong>"Save"</strong>. To continue, select <strong>"Load"</strong>.')}</p>
                </div>
              </div>
            </div>
          ` : ''}

          <!-- Play Button -->
          ${isComingSoon ? `
            <div class="relative">
              <button disabled class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl opacity-60 cursor-not-allowed">
                ${t('storyPage.comingSoon', 'Coming Soon')}
              </button>
                <p class="mt-3 text-stone-600 text-sm">${t('storyPage.comingSoonDesc', 'This story is currently in development')}</p>
            </div>
          ` : `
            <button id="playBtn" class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl" data-umami-event="Story play button">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                <span class="text-xl sm:text-2xl">▶</span>
                <span>${t('storyPage.playNow', 'Play Now')}</span>
              </span>
            </button>
          `}

          <!-- Scroll indicator -->
          <div class="scroll-indicator text-center mt-4 sm:mt-8 text-stone-400">
            <span class="text-xl sm:text-2xl">↓</span>
            <p class="text-xs sm:text-sm">${t('storyPage.scrollMore', 'Scroll for more info')}</p>
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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg> ${t('storyPage.aboutStory', 'About This Story')}
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
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg> ${t('storyPage.learningOutcomes', 'What You\'ll Learn')}
            </h2>
            <div class="grid gap-3">
              ${outcomesHTML}
            </div>
          </div>
        ` : ''}

        <!-- Credits -->
        <div class="info-card rounded-xl sm:rounded-2xl p-5 sm:p-8 mb-6 sm:mb-8">
          <h2 class="text-2xl font-bold text-stone-800 mb-6 flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg> ${t('storyPage.credits', 'Credits')}
          </h2>
          <div class="grid sm:grid-cols-2 gap-4">
            ${story.author ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Author</p>
                  <p class="font-semibold text-stone-800">${story.author}</p>
                </div>
              </div>
            ` : ''}
            ${story.scriptBy ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Script By</p>
                  <p class="font-semibold text-stone-800">${story.scriptBy}</p>
                </div>
              </div>
            ` : ''}
            ${story.series ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
                <div>
                  <p class="text-xs text-stone-500 uppercase tracking-wide font-semibold">Series</p>
                  <p class="font-semibold text-stone-800">${story.series}</p>
                </div>
              </div>
            ` : ''}
            ${story.releaseDate ? `
              <div class="flex items-center gap-3 p-4 bg-stone-50 rounded-xl">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
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
            ${t('storyPage.shareStory', 'Share This Story')}
          </h2>
          <div class="flex justify-center gap-4">
            <a id="shareTwitter" href="#" target="_blank" rel="noopener noreferrer" class="share-btn twitter" title="Share on Twitter" data-umami-event="Story share Twitter">
              𝕏
            </a>
            <a id="shareFacebook" href="#" target="_blank" rel="noopener noreferrer" class="share-btn facebook" title="Share on Facebook" data-umami-event="Story share Facebook">
              f
            </a>
            <a id="shareWhatsApp" href="#" target="_blank" rel="noopener noreferrer" class="share-btn whatsapp" title="Share on WhatsApp" data-umami-event="Story share WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
            <button id="shareCopy" class="share-btn copy" title="Copy Link" data-umami-event="Story share Copy link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
            </button>
          </div>
          <p id="copyFeedback" class="text-center text-sm text-green-600 mt-3 opacity-0 transition-opacity">${t('storyPage.linkCopied', 'Link copied!')}</p>
        </div>

        <!-- Bottom CTA -->
        ${!isComingSoon ? `
          <div class="text-center py-6 sm:py-8">
            <button id="playBtnBottom" class="play-btn-hero w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-xl mb-4 sm:mb-6" data-umami-event="Story play button bottom">
              <span class="flex items-center justify-center gap-2 sm:gap-3">
                <span class="text-xl sm:text-2xl">▶</span>
                <span>${t('storyPage.playNow', 'Play Now')}</span>
              </span>
            </button>
          </div>
        ` : ''}

        <!-- Back Link -->
        <div class="text-center pt-8 border-t border-stone-200">
          <a href="${backLink}" class="inline-flex items-center gap-2 text-stone-600 hover:text-stone-800 font-semibold transition" data-umami-event="Story back link">
            ${pathId ? t('storyPage.backToPath', '← Back to Learning Path') : t('storyPage.backToCollection', '← Back to Collection')}
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
