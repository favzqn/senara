/**
 * Collection Page JavaScript
 * Handles story filtering, sorting, and rendering for collection.html
 */

// ============================================================================
// Filter State
// ============================================================================

let allStories = [];
let currentCategory = 'all';
let currentSearch = '';
let selectedDifficulties = [];
let selectedDurations = [];
let selectedStatuses = ['published', 'coming-soon'];
let currentSort = 'default';
let isFilterPanelOpen = true;

// ============================================================================
// Loading & Skeleton
// ============================================================================

/**
 * Show loading skeleton while stories load
 */
function showLoadingSkeleton() {
  const container = document.getElementById('storiesContainer');
  if (!container) return;
  
  const skeletonHTML = Array(6).fill(0).map(() => `
    <div class="skeleton-card bg-white border border-[#E2E8F0] rounded-2xl h-96 overflow-hidden">
      <div class="skeleton h-48 w-full"></div>
      <div class="p-6 space-y-4">
        <div class="skeleton h-6 w-3/4 rounded"></div>
        <div class="skeleton h-4 w-full rounded"></div>
        <div class="skeleton h-4 w-2/3 rounded"></div>
        <div class="flex gap-2">
          <div class="skeleton h-6 w-16 rounded-full"></div>
          <div class="skeleton h-6 w-20 rounded-full"></div>
        </div>
        <div class="skeleton h-10 w-full rounded-lg mt-4"></div>
      </div>
    </div>
  `).join('');
  container.innerHTML = skeletonHTML;
}

// ============================================================================
// URL State Management
// ============================================================================

/**
 * Get filter values from URL parameters
 */
function getFiltersFromURL() {
  const params = new URLSearchParams(window.location.search);
  
  if (params.has('q')) currentSearch = params.get('q');
  if (params.has('category')) currentCategory = params.get('category');
  if (params.has('difficulty')) selectedDifficulties = params.get('difficulty').split(',').filter(Boolean);
  if (params.has('duration')) selectedDurations = params.get('duration').split(',').filter(Boolean);
  if (params.has('status')) selectedStatuses = params.get('status').split(',').filter(Boolean);
  if (params.has('sort')) currentSort = params.get('sort');
}

/**
 * Update URL with current filter state
 */
function updateURL() {
  const params = new URLSearchParams();
  
  if (currentSearch) params.set('q', currentSearch);
  if (currentCategory !== 'all') params.set('category', currentCategory);
  if (selectedDifficulties.length > 0) params.set('difficulty', selectedDifficulties.join(','));
  if (selectedDurations.length > 0) params.set('duration', selectedDurations.join(','));
  if (selectedStatuses.length > 0 && selectedStatuses.length < 2) params.set('status', selectedStatuses.join(','));
  if (currentSort !== 'default') params.set('sort', currentSort);
  
  const newURL = params.toString() 
    ? `${window.location.pathname}?${params.toString()}` 
    : window.location.pathname;
  
  window.history.replaceState({}, '', newURL);
}

/**
 * Restore UI elements from current state
 */
function restoreUIFromState() {
  // Restore search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = currentSearch;
  
  // Restore sort
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = currentSort;
  
  // Restore difficulty checkboxes
  document.querySelectorAll('.difficulty-filter').forEach(cb => {
    cb.checked = selectedDifficulties.includes(cb.value);
  });
  
  // Restore duration checkboxes
  document.querySelectorAll('.duration-filter').forEach(cb => {
    cb.checked = selectedDurations.includes(cb.value);
  });
  
  // Restore status checkboxes
  document.querySelectorAll('.status-filter').forEach(cb => {
    cb.checked = selectedStatuses.includes(cb.value);
  });
}

// ============================================================================
// Categories
// ============================================================================

/**
 * Load categories from data and render category buttons
 */
function loadCategories() {
  const container = document.getElementById('categoryFilters');
  if (!container) return;
  
  const categories = getAllCategories();
  
  // Build category buttons HTML
  let html = `
    <button 
      class="category-btn w-full text-left px-3.5 py-2.5 rounded-xl bg-white/80 text-[#0F172A] font-medium text-sm border border-[#E2E8F0] flex items-center gap-2.5 active" 
      data-category="all" 
      data-umami-event="Collection filter All"
    >
      <span class="flex-1">${getText('collection.allStories', 'All Stories')}</span>
      <span class="category-count text-[#6366F1]" id="count-all"></span>
    </button>
  `;
  
  categories.forEach(cat => {
    html += `
      <button 
        class="category-btn w-full text-left px-3.5 py-2.5 rounded-xl bg-white/60 text-[#0F172A] font-medium text-sm border border-[#E2E8F0]/80 flex items-center gap-2.5" 
        data-category="${cat.id}" 
        data-umami-event="Collection filter ${cat.title}"
      >
        <span class="flex-1 truncate" title="${cat.title}">${cat.title}</span>
        <span class="category-count text-[#94A3B8]" id="count-${cat.id}"></span>
      </button>
    `;
  });
  
  container.innerHTML = html;
  
  // Add click handlers
  container.querySelectorAll('.category-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      container.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update filter
      currentCategory = btn.dataset.category;
      filterAndRender();
    });
  });
  
  // Update counts
  updateCategoryCounts();
}

/**
 * Update story counts for each category
 */
function updateCategoryCounts() {
  const categories = getAllCategories();
  
  // Count all stories
  const allCount = allStories.length;
  const allCountEl = document.getElementById('count-all');
  if (allCountEl) allCountEl.textContent = `(${allCount})`;
  
  // Count per category
  categories.forEach(cat => {
    const count = allStories.filter(story => 
      story.category === cat.id || 
      (story.tags && story.tags.some(tag => 
        tag.toLowerCase().includes(cat.title.toLowerCase().split(' ')[0]) ||
        cat.title.toLowerCase().includes(tag.toLowerCase())
      ))
    ).length;
    
    const countEl = document.getElementById(`count-${cat.id}`);
    if (countEl) countEl.textContent = count > 0 ? `(${count})` : '';
  });
}

// ============================================================================
// Story Loading & Sorting
// ============================================================================

/**
 * Load stories from data source
 */
function loadStories() {
  // Show skeleton while loading
  showLoadingSkeleton();
  
  // Get filters from URL first
  getFiltersFromURL();
  
  // Load all stories
  allStories = [...allStoriesData];
  
  // Small delay to show skeleton (simulates loading)
  setTimeout(() => {
    loadCategories();
    restoreUIFromState();
    filterAndRender();
  }, 300);
}

/**
 * Sort stories by specified criteria
 * @param {Array} stories - Stories to sort
 * @param {string} sortBy - Sort criteria
 * @returns {Array} Sorted stories
 */
function sortStories(stories, sortBy) {
  const sorted = [...stories];
  
  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.releaseDate) - new Date(b.releaseDate));
    case 'popular':
      return sorted.sort((a, b) => (b.plays || 0) - (a.plays || 0));
    case 'rating':
      return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    case 'duration-asc':
      return sorted.sort((a, b) => a.duration - b.duration);
    case 'duration-desc':
      return sorted.sort((a, b) => b.duration - a.duration);
    case 'title-asc':
      return sorted.sort((a, b) => a.title.localeCompare(b.title, 'id'));
    case 'title-desc':
      return sorted.sort((a, b) => b.title.localeCompare(a.title, 'id'));
    default:
      // Default: published first, then coming-soon
      return sorted.sort((a, b) => {
        if (a.status === 'published' && b.status !== 'published') return -1;
        if (a.status !== 'published' && b.status === 'published') return 1;
        return 0;
      });
  }
}

/**
 * Filter stories by category (supports both category field and tags)
 * @param {Array} stories - Stories to filter
 * @param {string} categoryId - Category ID to filter by
 * @returns {Array} Filtered stories
 */
function filterByCategory(stories, categoryId) {
  if (categoryId === 'all') return stories;
  
  const category = getCategoryById(categoryId);
  if (!category) return stories;
  
  return stories.filter(story => {
    // Check direct category match
    if (story.category === categoryId) return true;
    
    // Check tags for partial match
    if (story.tags && story.tags.length > 0) {
      const categoryWords = category.title.toLowerCase().split(/[\s&,]+/);
      return story.tags.some(tag => {
        const tagLower = tag.toLowerCase();
        return categoryWords.some(word => 
          word.length > 2 && (tagLower.includes(word) || word.includes(tagLower))
        );
      });
    }
    
    return false;
  });
}

// ============================================================================
// Filtering & Rendering
// ============================================================================

/**
 * Apply all filters and render stories
 */
function filterAndRender() {
  let filtered = [...allStories];
  
  // Apply search filter
  if (currentSearch) {
    const term = currentSearch.toLowerCase();
    filtered = filtered.filter(story =>
      story.title.toLowerCase().includes(term) ||
      story.description.toLowerCase().includes(term) ||
      (story.tags && story.tags.some(tag => tag.toLowerCase().includes(term))) ||
      (story.scriptBy && story.scriptBy.toLowerCase().includes(term))
    );
  }
  
  // Apply category filter
  filtered = filterByCategory(filtered, currentCategory);
  
  // Apply difficulty filter
  if (selectedDifficulties.length > 0) {
    filtered = filtered.filter(story => selectedDifficulties.includes(story.difficulty));
  }
  
  // Apply duration filter
  if (selectedDurations.length > 0) {
    filtered = filtered.filter(story => {
      const duration = parseInt(story.duration);
      return selectedDurations.some(dur => {
        if (dur === 'short') return duration < 15;
        if (dur === 'medium') return duration >= 15 && duration <= 30;
        if (dur === 'long') return duration > 30;
        return false;
      });
    });
  }
  
  // Apply status filter
  if (selectedStatuses.length > 0 && selectedStatuses.length < 2) {
    filtered = filtered.filter(story => selectedStatuses.includes(story.status));
  }
  
  // Apply sorting
  filtered = sortStories(filtered, currentSort);
  
  renderStories(filtered);
  updateResultsCount(filtered.length);
  updateActiveFiltersDisplay();
  updateActiveFilterCount();
  updateURL();
}

/**
 * Update results count displays
 * @param {number} count - Number of results
 */
function updateResultsCount(count) {
  const resultsCount = document.getElementById('resultsCount');
  const resultsCountTop = document.getElementById('resultsCountTop');
  if (resultsCount) resultsCount.textContent = count;
  if (resultsCountTop) resultsCountTop.textContent = count;
}

/**
 * Update active filter count badge for mobile
 */
function updateActiveFilterCount() {
  let count = 0;
  if (currentSearch) count++;
  if (currentCategory !== 'all') count++;
  count += selectedDifficulties.length;
  count += selectedDurations.length;
  if (selectedStatuses.length > 0 && selectedStatuses.length < 2) count++;
  if (currentSort !== 'default') count++;
  
  const badge = document.getElementById('activeFilterCount');
  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

/**
 * Update active filters display pills
 */
function updateActiveFiltersDisplay() {
  const container = document.getElementById('activeFiltersDisplay');
  if (!container) return;
  
  const filters = [];
  
  if (currentSearch) {
    filters.push(`"${currentSearch}"`);
  }
  if (currentCategory !== 'all') {
    const cat = getCategoryById(currentCategory);
    if (cat) {
      const catName = typeof I18n !== 'undefined' ? I18n.t(`categories.${cat.id}`) : cat.title;
      filters.push(catName !== `categories.${cat.id}` ? catName : cat.title);
    }
  }
  if (selectedDifficulties.length > 0) {
    const diffLabels = selectedDifficulties.map(diff => {
      const key = `story.${diff.toLowerCase()}`;
      if (typeof I18n !== 'undefined') {
        const translated = I18n.t(key);
        if (translated && translated !== key) return translated;
      }
      return diff;
    });
    filters.push(diffLabels.join(', '));
  }
  if (selectedDurations.length > 0) {
    const durationLabels = {
      'short': typeof I18n !== 'undefined' ? I18n.t('collection.durationShort') : getText('collection.durationShort', 'Short (< 15 min)'),
      'medium': typeof I18n !== 'undefined' ? I18n.t('collection.durationMedium') : getText('collection.durationMedium', 'Medium (15-30 min)'),
      'long': typeof I18n !== 'undefined' ? I18n.t('collection.durationLong') : getText('collection.durationLong', 'Long (> 30 min)')
    };
    filters.push(selectedDurations.map(d => durationLabels[d]).join(', '));
  }
  
  if (filters.length > 0) {
    container.innerHTML = filters.map(f => 
      `<span class="filter-pill">${f}</span>`
    ).join('');
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}

/**
 * Render story cards to container
 * @param {Array} stories - Stories to render
 */
function renderStories(stories) {
  const container = document.getElementById('storiesContainer');
  if (!container) return;
  
  if (stories.length === 0) {
    const emptyTitle = typeof I18n !== 'undefined' ? I18n.t('collection.emptyTitle') : getText('collection.emptyTitle', 'No stories found');
    const emptyDesc = typeof I18n !== 'undefined' ? I18n.t('collection.emptyDescription') : getText('collection.emptyDescription', 'Try changing your filters or search keywords to find what you\'re looking for.');
    const emptyReset = typeof I18n !== 'undefined' ? I18n.t('collection.emptyReset') : getText('collection.emptyReset', 'Reset All Filters');
    container.innerHTML = `
      <div class="col-span-full empty-state py-16 px-8">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-4 text-[#94A3B8]"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <h3 class="text-xl font-bold text-[#0F172A] mb-2 text-center">${emptyTitle}</h3>
        <p class="text-[#64748B] mb-6 text-center max-w-md mx-auto">${emptyDesc}</p>
        <div class="flex justify-center">
          <button onclick="document.getElementById('clearFilters').click()" class="reset-btn px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2">
            ${emptyReset}
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = '';

  stories.forEach(story => {
    const card = createStoryCard(story, { showDescription: true });
    container.appendChild(card);
  });
}

// ============================================================================
// Event Listeners
// ============================================================================

/**
 * Setup all event listeners for filters and interactions
 */
function setupEventListeners() {
  // Search input with debounce
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = e.target.value.trim();
        filterAndRender();
      }, 300);
    });
  }

  // Difficulty filters
  document.querySelectorAll('.difficulty-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedDifficulties.push(e.target.value);
      } else {
        selectedDifficulties = selectedDifficulties.filter(d => d !== e.target.value);
      }
      filterAndRender();
    });
  });

  // Duration filters
  document.querySelectorAll('.duration-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedDurations.push(e.target.value);
      } else {
        selectedDurations = selectedDurations.filter(d => d !== e.target.value);
      }
      filterAndRender();
    });
  });

  // Status filters
  document.querySelectorAll('.status-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        selectedStatuses.push(e.target.value);
      } else {
        selectedStatuses = selectedStatuses.filter(s => s !== e.target.value);
      }
      filterAndRender();
    });
  });

  // Clear filters button
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      resetAllFilters();
    });
  }

  // Sort select
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      filterAndRender();
    });
  }

  // Mobile filter toggle
  const filterToggle = document.getElementById('filterToggle');
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      const panel = document.getElementById('filterPanel');
      const icon = document.getElementById('filterToggleIcon');
      
      isFilterPanelOpen = !isFilterPanelOpen;
      
      if (isFilterPanelOpen) {
        panel.classList.remove('collapsed');
        panel.classList.add('expanded');
        icon.style.transform = 'rotate(0deg)';
      } else {
        panel.classList.remove('expanded');
        panel.classList.add('collapsed');
        icon.style.transform = 'rotate(-90deg)';
      }
    });
  }

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Focus search on '/' key
    if (e.key === '/' && document.activeElement.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput');
      if (searchInput) searchInput.focus();
    }
    
    // Reset filters on Escape
    if (e.key === 'Escape') {
      if (document.activeElement.tagName === 'INPUT') {
        document.activeElement.blur();
      } else {
        resetAllFilters();
      }
    }
  });
}

/**
 * Reset all filters to default state
 */
function resetAllFilters() {
  // Reset state
  currentSearch = '';
  currentCategory = 'all';
  selectedDifficulties = [];
  selectedDurations = [];
  selectedStatuses = ['published', 'coming-soon'];
  currentSort = 'default';
  
  // Reset UI
  const searchInput = document.getElementById('searchInput');
  if (searchInput) searchInput.value = '';
  
  const sortSelect = document.getElementById('sortSelect');
  if (sortSelect) sortSelect.value = 'default';
  
  document.querySelectorAll('.difficulty-filter').forEach(cb => cb.checked = false);
  document.querySelectorAll('.duration-filter').forEach(cb => cb.checked = false);
  document.querySelectorAll('.status-filter').forEach(cb => cb.checked = true);
  
  // Reset category buttons
  document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add('active');
  
  filterAndRender();
}

// ============================================================================
// Page Initialization
// ============================================================================

/**
 * Initialize collection page
 */
function initCollectionPage() {
  initNavbar('collection');
  initFooter();
  loadStories();
  setupEventListeners();
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initCollectionPage);
