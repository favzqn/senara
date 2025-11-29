/**
 * Shared Utilities
 * Common functions used across multiple pages
 */

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
  const pageTitle = `Baca "${story.title}" di Senara`;
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
    element.innerHTML = `<div class="col-span-full text-center py-12"><p class="text-amber-700">${message}</p></div>`;
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
    'published': '✓ Published',
    'draft': '📝 Draft',
    'coming-soon': '🔜 Coming Soon',
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
  card.className = `card-hover bg-white rounded-2xl overflow-hidden border border-amber-100 shadow-sm flex flex-col h-full ${isComingSoon ? 'opacity-75' : ''}`;
  
  const emoji = getStoryEmoji(story.id);
  const statusBadge = getStatusBadge(story.status);
  
  card.innerHTML = `
    <div class="thumbnail-placeholder h-48 w-full relative">
      ${emoji}
      ${isComingSoon ? `<div class="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"><span class="text-white font-bold text-lg">${statusBadge}</span></div>` : ''}
      ${story.difficulty === 'Beginner' && !isComingSoon ? `<div class="absolute top-3 left-3 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold">🌱 Mulai dari Sini</div>` : ''}
    </div>
    <div class="p-6 flex flex-col flex-1">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-xl font-bold text-amber-900 flex-1">${story.title}</h3>
        ${isComingSoon ? `<span class="text-xs font-semibold bg-indigo-100 text-indigo-900 px-2 py-1 rounded whitespace-nowrap">Segera</span>` : ''}
      </div>
      ${showDescription ? `<p class="text-amber-700 text-sm mb-3">${story.description}</p>` : ''}
      <div class="flex flex-wrap gap-2 mb-3">
        ${story.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="mt-auto flex flex-col gap-3">
        ${story.collaboration ? `
          <div class="p-2 bg-pink-50 border border-pink-200 rounded-lg">
            <p class="text-xs font-semibold text-pink-700">
              🤝 ${story.collaboration}
            </p>
          </div>
        ` : ''}
        <div class="grid grid-cols-3 gap-2 text-xs">
          <div class="p-2 rounded-xl bg-amber-50 border border-amber-100">
            <p class="text-[0.65rem] uppercase tracking-wide text-amber-500">Level</p>
            <p class="text-sm font-semibold text-amber-900">${story.difficulty}</p>
          </div>
          <div class="p-2 rounded-xl bg-amber-50 border border-amber-100">
            <p class="text-[0.65rem] uppercase tracking-wide text-amber-500">Durasi</p>
            <p class="text-sm font-semibold text-amber-900">⏱ ${story.duration} min</p>
          </div>
          <div class="p-2 rounded-xl bg-amber-50 border border-amber-100">
            <p class="text-[0.65rem] uppercase tracking-wide text-amber-500">Usia</p>
            <p class="text-sm font-semibold text-amber-900">${story.age}</p>
          </div>
        </div>
        ${story.scriptBy ? `
          <div class="flex items-center gap-3 bg-white/70 border border-amber-100 rounded-xl px-3 py-2 text-xs">
            <div class="text-lg">✍️</div>
            <div>
              <p class="text-[0.65rem] uppercase tracking-wide text-amber-500">Script by</p>
              <p class="text-sm font-semibold text-amber-900">${story.scriptBy}</p>
            </div>
          </div>
        ` : ''}
        <div class="pt-1">
          ${isComingSoon ? `
            <button class="play-btn w-full py-3 rounded-lg font-semibold text-center block opacity-50 cursor-not-allowed" disabled>
              🔜 Segera Hadir
            </button>
          ` : `
            <a href="story.html?id=${story.id}" class="play-btn w-full py-3 rounded-lg font-semibold text-center block">
              ▶ Mainkan
            </a>
          `}
        </div>
      </div>
    </div>
  `;
  
  return card;
}
