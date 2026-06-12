/**
 * Shared Utilities
 * Common functions used across multiple pages
 */

/**
 * Get translated text with fallback
 * Use this for user-facing strings that need i18n support
 * @param {string} key - Translation key (e.g., 'tv.ageAll')
 * @param {string} fallback - English fallback text
 * @returns {string} Translated text or fallback
 */
function getText(key, fallback) {
  if (typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady()) {
    const translated = I18n.t(key);
    return translated !== key ? translated : fallback;
  }
  return fallback;
}

/**
 * Translation function — global alias for I18n.t with fallback
 * Used by home-page.js and other page scripts
 * Handles both interpolation (params object) and fallback (string) cases
 * @param {string} key - Translation key
 * @param {string|Object} fallbackOrParams - Fallback text (string) or interpolation params (object)
 * @returns {string} Translated text, fallback, or key
 */
function t(key, fallbackOrParams) {
  if (typeof I18n !== 'undefined' && I18n.t) {
    // If second arg is an object, it's interpolation params
    if (fallbackOrParams && typeof fallbackOrParams === 'object') {
      return I18n.t(key, fallbackOrParams);
    }
    // Otherwise it's a fallback string
    const result = I18n.t(key);
    if (result !== key) return result;
    return (typeof fallbackOrParams === 'string') ? fallbackOrParams : key;
  }
  return (typeof fallbackOrParams === 'string') ? fallbackOrParams : key;
}

/**
 * Get URL parameter value
 * @param {string} param - Parameter name
 * @returns {string|null} Parameter value or null
 */
function getUrlParam(param) {
  const params = new URLSearchParams(window.location.search);
  return params.get(param);
}

/**
 * Get emoji for story
 * @param {string} storyId - Story ID
 * @returns {string} Emoji character
 */
function getStoryEmoji(storyId) {
  return CONSTANTS.EMOJIS[storyId] || CONSTANTS.EMOJIS.default;
}

/**
 * Setup mobile menu toggle
 * @param {string} btnSelector - Mobile menu button selector
 * @param {string} menuSelector - Mobile menu selector
 */
function setupMobileMenu(btnSelector = '#mobileMenuBtn', menuSelector = '#mobileMenu') {
  const mobileMenuBtn = document.querySelector(btnSelector);
  const mobileMenu = document.querySelector(menuSelector);

  if (!mobileMenuBtn || !mobileMenu) {
    console.warn('Mobile menu elements not found');
    return;
  }

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking on a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}

/**
 * Setup social sharing buttons
 * @param {Object} story - Story object with title, description
 * @param {string} pageUrl - Current page URL
 */
function setupSocialSharing(story, pageUrl = window.location.href) {
  const pageTitle = getText('share.readStory', `Read "${story.title}" on Senara`);
  const pageDescription = story.description;

  // Twitter share
  const twitterBtn = document.getElementById('shareTwitter');
  if (twitterBtn) {
    twitterBtn.href = CONFIG.social.twitter(pageUrl, pageTitle);
  }

  // Facebook share
  const facebookBtn = document.getElementById('shareFacebook');
  if (facebookBtn) {
    facebookBtn.href = CONFIG.social.facebook(pageUrl);
  }

  // WhatsApp share
  const whatsappBtn = document.getElementById('shareWhatsApp');
  if (whatsappBtn) {
    whatsappBtn.href = CONFIG.social.whatsapp(pageTitle + ' ' + pageUrl);
  }

  // Copy link button
  const copyBtn = document.getElementById('shareCopy');
  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(pageUrl).then(() => {
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = CONSTANTS.SUCCESS.LINK_COPIED;
        setTimeout(() => {
          copyBtn.innerHTML = originalText;
        }, CONFIG.ui.copyLinkTimeout);
      });
    });
  }
}

/**
 * Filter stories by search term
 * @param {Array} stories - Array of story objects
 * @param {string} searchTerm - Search term
 * @returns {Array} Filtered stories
 */
function filterStoriesBySearch(stories, searchTerm) {
  if (!searchTerm) return stories;

  const term = searchTerm.toLowerCase();
  return stories.filter(story =>
    story.title.toLowerCase().includes(term) ||
    story.tags.some(tag => tag.toLowerCase().includes(term))
  );
}

/**
 * Filter stories by category
 * @param {Array} stories - Array of story objects
 * @param {string} category - Category name
 * @returns {Array} Filtered stories
 */
function filterStoriesByCategory(stories, category) {
  if (category === 'all') return stories;
  return stories.filter(story => story.tags.includes(category));
}

/**
 * Validate story data
 * @param {Object} story - Story object to validate
 * @returns {boolean} True if valid
 */
function isValidStory(story) {
  return (
    story &&
    typeof story === 'object' &&
    story.id &&
    story.title &&
    Array.isArray(story.tags) &&
    story.age &&
    story.description !== undefined
  );
}

/**
 * Log error with context
 * @param {string} context - Where error occurred
 * @param {Error} error - Error object
 */
function logError(context, error) {
  if (CONFIG.features.enableDebug) {
    console.error(`[${context}]`, error);
  }
}

/**
 * Show loading state
 * @param {HTMLElement} element - Element to show loading in
 * @param {string} message - Loading message
 */
function showLoading(element, message = CONSTANTS.LOADING_STATES.LOADING) {
  if (element) {
    element.innerHTML = `<div class="col-span-full text-center py-12"><p class="text-[#64748B]">${message}</p></div>`;
  }
}

/**
 * Show error state
 * @param {HTMLElement} element - Element to show error in
 * @param {string} message - Error message
 */
function showError(element, message = CONSTANTS.ERRORS.STORY_NOT_FOUND) {
  if (element) {
    element.innerHTML = `<div class="col-span-full text-center py-12"><p class="text-red-600">${message}</p></div>`;
  }
}

/**
 * Debounce function
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in ms
 * @returns {Function} Debounced function
 */
function debounce(func, wait = 300) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Format duration in minutes to readable string
 * @param {number} minutes - Duration in minutes
 * @returns {string} Formatted duration (e.g., "45 min")
 */
function formatDuration(minutes) {
  if (minutes < 60) {
    return `${minutes} min`;
  }
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
}

/**
 * Format date to readable string
 * @param {string} dateString - ISO date string (YYYY-MM-DD)
 * @returns {string} Formatted date (e.g., "15 Jan 2024")
 */
function formatDate(dateString) {
  const date = new Date(dateString + 'T00:00:00Z');
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('id-ID', options);
}

/**
 * Format rating to star display
 * @param {number} rating - Rating value (0-5)
 * @returns {string} Star display (e.g., "★★★★☆")
 */
function formatRating(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(emptyStars);
}

/**
 * Format play count to readable number
 * @param {number} plays - Number of plays
 * @returns {string} Formatted number (e.g., "1.2K", "1M")
 */
function formatPlayCount(plays) {
  if (plays >= 1000000) {
    return (plays / 1000000).toFixed(1) + 'M';
  }
  if (plays >= 1000) {
    return (plays / 1000).toFixed(1) + 'K';
  }
  return plays.toString();
}

/**
 * Get difficulty color class
 * @param {string} difficulty - Difficulty level
 * @returns {string} Tailwind color class
 */
function getDifficultyColor(difficulty) {
  const colors = {
    'Beginner': 'bg-green-100 text-green-900',
    'Intermediate': 'bg-yellow-100 text-yellow-900',
    'Advanced': 'bg-red-100 text-red-900',
  };
  return colors[difficulty] || 'bg-gray-100 text-gray-900';
}

/**
 * Get status badge text
 * @param {string} status - Publication status
 * @returns {string} Badge text
 */
function getStatusBadge(status) {
  const badges = {
    'published': 'Published',
    'draft': 'Draft',
    'coming-soon': 'Coming Soon',
  };
  return badges[status] || status;
}

/**
 * Check if story is available to play
 * @param {Object} story - Story object
 * @returns {boolean} True if story can be played
 */
function isStoryAvailable(story) {
  return story && story.status === CONSTANTS.STATUS.PUBLISHED;
}

/**
 * Get learning outcomes as formatted list
 * @param {Array} outcomes - Array of learning outcomes
 * @returns {string} HTML formatted list
 */
function formatLearningOutcomes(outcomes) {
  if (!Array.isArray(outcomes) || outcomes.length === 0) {
    return '';
  }
  return '<ul class="list-disc list-inside space-y-1">' +
    outcomes.map(outcome => `<li>${outcome}</li>`).join('') +
    '</ul>';
}

/**
 * Create a story card element
 * @param {Object} story - Story object
 * @param {Object} options - Rendering options
 * @param {boolean} options.showDescription - Show full description (default: false)
 * @returns {HTMLElement} Story card div element
 */
function createStoryCard(story, options = {}) {
  const { showDescription = false } = options;
  
  const card = document.createElement('div');
  const isComingSoon = story.status === 'coming-soon';
  card.className = `card-hover bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col h-full ${isComingSoon ? 'opacity-75' : ''}`;
  
  const statusBadge = getStatusBadge(story.status);
  
  const playSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21"/></svg>';
  const clockSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const penSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 3a2.828 2.828 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>';
  const categorySvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>';
  const comingSoonSvg = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>';
  const startHereSvg = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"/></svg>';
  
  // Get translated content if i18n is available
  const storyTitle = (typeof t === 'function' && t(`stories.${story.id}.title`) !== `stories.${story.id}.title`) 
    ? t(`stories.${story.id}.title`) 
    : story.title;
  const storyDesc = (typeof t === 'function' && t(`stories.${story.id}.description`) !== `stories.${story.id}.description`) 
    ? t(`stories.${story.id}.description`) 
    : story.description;
  
  const storyInitial = storyTitle.charAt(0).toUpperCase();
  
  const comingSoonLabel = (typeof t === 'function') ? t('story.comingSoon') || getText('story.comingSoon', 'Coming Soon') : getText('story.comingSoon', 'Coming Soon');
  const playLabel = (typeof t === 'function') ? (t('story.playNow') || getText('story.play', 'Play')).replace(' →', '') : getText('story.play', 'Play');
  const startHereLabel = getText('story.startHere', 'Start Here');
  
  const difficultyKey = (story.difficulty || 'Beginner').toLowerCase();
  const difficultyLabel = (typeof t === 'function' && t(`story.${difficultyKey}`) !== `story.${difficultyKey}`) 
    ? t(`story.${difficultyKey}`) 
    : story.difficulty;
  
  const categoryLabel = story.category && typeof t === 'function' && t(`categories.${story.category}`) !== `categories.${story.category}`
    ? t(`categories.${story.category}`)
    : story.category ? story.category.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ') : '';
  
  card.innerHTML = `
    <div class="thumbnail-placeholder h-48 w-full relative">
      <span class="text-4xl font-bold text-[#4F46E5] opacity-30" style="font-family: 'Crimson Pro', serif;">${storyInitial}</span>
      ${isComingSoon ? `<div class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"><span class="text-white font-bold text-lg">${comingSoonLabel}</span></div>` : ''}
      ${story.difficulty === 'Beginner' && !isComingSoon ? `<div class="absolute top-3 left-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1">${startHereSvg} ${startHereLabel}</div>` : ''}
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-xl font-bold text-[#0F172A] flex-1">${storyTitle}</h3>
        ${isComingSoon ? `<span class="text-xs font-semibold bg-indigo-100 text-indigo-900 px-2 py-1 rounded whitespace-nowrap">${comingSoonLabel}</span>` : ''}
      </div>
      ${showDescription ? `<p class="text-[#64748B] text-sm mb-3">${storyDesc}</p>` : ''}
      <div class="flex flex-wrap gap-2 mb-3">
        ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        ${story.category ? `<span class="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full">${categorySvg} ${categoryLabel}</span>` : ''}
      </div>
      <div class="mt-auto flex flex-col gap-3">
        ${story.collaboration ? `
          <div class="p-2 bg-pink-50 border border-pink-200 rounded-lg">
            <p class="text-xs font-semibold text-pink-700">${story.collaboration}</p>
          </div>
        ` : ''}
        <div class="grid grid-cols-3 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">Level</p>
            <p class="text-sm font-semibold text-[#0F172A]">${difficultyLabel}</p>
          </div>
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">${getText('story.duration', 'Duration')}</p>
            <p class="text-sm font-semibold text-[#0F172A] inline-flex items-center gap-1">${clockSvg} ${story.duration} min</p>
          </div>
          <div class="p-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
            <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">${getText('story.age', 'Age')}</p>
            <p class="text-sm font-semibold text-[#0F172A]">${story.age}</p>
          </div>
        </div>
        ${story.scriptBy ? `
          <div class="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-3 py-2 text-xs">
            <div class="text-[#6366F1]">${penSvg}</div>
            <div>
              <p class="text-[0.65rem] uppercase tracking-wide text-[#94A3B8]">Script by</p>
              <p class="text-sm font-semibold text-[#0F172A]">${story.scriptBy}</p>
            </div>
          </div>
        ` : ''}
        <div class="pt-1">
          ${isComingSoon ? `
            <button class="play-btn w-full py-3 rounded-lg font-semibold text-center opacity-50 cursor-not-allowed" disabled>
              ${comingSoonSvg} ${comingSoonLabel}
            </button>
          ` : `
            <a href="story.html?id=${story.id}" class="play-btn w-full py-3 rounded-lg font-semibold text-center">
              ${playSvg} ${playLabel}
            </a>
          `}
        </div>
      </div>
    </div>
  `;
  
  return card;
}
