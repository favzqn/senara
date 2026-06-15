import { t } from './i18n';
import { getText, createStoryCard } from './shared-utils';
import { allStoriesData } from '../data/stories';
import type { Story } from '../data/stories';
import { allCategoriesData, getCategoryById, type Category } from '../data/categories';

let allStories: Story[] = [];
let currentCategory = 'all';
let currentSearch = '';
let selectedDifficulties: string[] = [];
let selectedDurations: string[] = [];
let selectedStatuses: string[] = ['published', 'coming-soon'];
let currentSort = 'default';
let isFilterPanelOpen = true;

function showLoadingSkeleton(): void {
  const container = document.getElementById('storiesContainer');
  if (!container) return;

  const skeletonHTML = Array(6)
    .fill(0)
    .map(
      () => `
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
  `
    )
    .join('');
  container.innerHTML = skeletonHTML;
}

function getFiltersFromURL(): void {
  const params = new URLSearchParams(window.location.search);

  if (params.has('q')) currentSearch = params.get('q')!;
  if (params.has('category')) currentCategory = params.get('category')!;
  if (params.has('difficulty')) selectedDifficulties = params.get('difficulty')!.split(',').filter(Boolean);
  if (params.has('duration')) selectedDurations = params.get('duration')!.split(',').filter(Boolean);
  if (params.has('status')) selectedStatuses = params.get('status')!.split(',').filter(Boolean);
  if (params.has('sort')) currentSort = params.get('sort')!;
}

function updateURL(): void {
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

function restoreUIFromState(): void {
  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
  if (searchInput) searchInput.value = currentSearch;

  const sortSelect = document.getElementById('sortSelect') as HTMLSelectElement | null;
  if (sortSelect) sortSelect.value = currentSort;

  document.querySelectorAll<HTMLInputElement>('.difficulty-filter').forEach((cb) => {
    cb.checked = selectedDifficulties.includes(cb.value);
  });

  document.querySelectorAll<HTMLInputElement>('.duration-filter').forEach((cb) => {
    cb.checked = selectedDurations.includes(cb.value);
  });

  document.querySelectorAll<HTMLInputElement>('.status-filter').forEach((cb) => {
    cb.checked = selectedStatuses.includes(cb.value);
  });
}

function loadCategories(): void {
  const container = document.getElementById('categoryFilters');
  if (!container) return;

  const categories = allCategoriesData;

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

  categories.forEach((cat: Category) => {
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

  container.querySelectorAll<HTMLButtonElement>('.category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      container.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.dataset.category!;
      filterAndRender();
    });
  });

  updateCategoryCounts();
}

function updateCategoryCounts(): void {
  const categories = allCategoriesData;

  const allCount = allStories.length;
  const allCountEl = document.getElementById('count-all');
  if (allCountEl) allCountEl.textContent = `(${allCount})`;

  categories.forEach((cat: Category) => {
    const count = allStories.filter(
      (story: Story) =>
        story.category === cat.id ||
        (story.tags &&
          story.tags.some(
            (tag: string) =>
              tag.toLowerCase().includes(cat.title.toLowerCase().split(' ')[0]) ||
              cat.title.toLowerCase().includes(tag.toLowerCase())
          ))
    ).length;

    const countEl = document.getElementById(`count-${cat.id}`);
    if (countEl) countEl.textContent = count > 0 ? `(${count})` : '';
  });
}

function loadStories(): void {
  showLoadingSkeleton();

  getFiltersFromURL();

  allStories = [...allStoriesData];

  setTimeout(() => {
    loadCategories();
    restoreUIFromState();
    filterAndRender();
  }, 300);
}

function sortStories(stories: Story[], sortBy: string): Story[] {
  const sorted = [...stories];

  switch (sortBy) {
    case 'newest':
      return sorted.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
    case 'oldest':
      return sorted.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
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
      return sorted.sort((a, b) => {
        if (a.status === 'published' && b.status !== 'published') return -1;
        if (a.status !== 'published' && b.status === 'published') return 1;
        return 0;
      });
  }
}

function filterByCategory(stories: Story[], categoryId: string): Story[] {
  if (categoryId === 'all') return stories;

  const category = getCategoryById(categoryId);
  if (!category) return stories;

  return stories.filter((story: Story) => {
    if (story.category === categoryId) return true;

    if (story.tags && story.tags.length > 0) {
      const categoryWords = category.title.toLowerCase().split(/[\s&,]+/);
      return story.tags.some((tag: string) => {
        const tagLower = tag.toLowerCase();
        return categoryWords.some((word: string) => word.length > 2 && (tagLower.includes(word) || word.includes(tagLower)));
      });
    }

    return false;
  });
}

function filterAndRender(): void {
  let filtered = [...allStories];

  if (currentSearch) {
    const term = currentSearch.toLowerCase();
    filtered = filtered.filter(
      (story: Story) =>
        story.title.toLowerCase().includes(term) ||
        story.description.toLowerCase().includes(term) ||
        (story.tags && story.tags.some((tag: string) => tag.toLowerCase().includes(term))) ||
        (story.scriptBy && story.scriptBy.toLowerCase().includes(term))
    );
  }

  filtered = filterByCategory(filtered, currentCategory);

  if (selectedDifficulties.length > 0) {
    filtered = filtered.filter((story: Story) => selectedDifficulties.includes(story.difficulty));
  }

  if (selectedDurations.length > 0) {
    filtered = filtered.filter((story: Story) => {
      const duration = story.duration;
      return selectedDurations.some((dur: string) => {
        if (dur === 'short') return duration < 15;
        if (dur === 'medium') return duration >= 15 && duration <= 30;
        if (dur === 'long') return duration > 30;
        return false;
      });
    });
  }

  if (selectedStatuses.length > 0 && selectedStatuses.length < 2) {
    filtered = filtered.filter((story: Story) => selectedStatuses.includes(story.status));
  }

  filtered = sortStories(filtered, currentSort);

  renderStories(filtered);
  updateResultsCount(filtered.length);
  updateActiveFiltersDisplay();
  updateActiveFilterCount();
  updateURL();
}

function updateResultsCount(count: number): void {
  const resultsCount = document.getElementById('resultsCount');
  const resultsCountTop = document.getElementById('resultsCountTop');
  if (resultsCount) resultsCount.textContent = String(count);
  if (resultsCountTop) resultsCountTop.textContent = String(count);
}

function updateActiveFilterCount(): void {
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
      badge.textContent = String(count);
      badge.classList.remove('hidden');
    } else {
      badge.classList.add('hidden');
    }
  }
}

function updateActiveFiltersDisplay(): void {
  const container = document.getElementById('activeFiltersDisplay');
  if (!container) return;

  const filters: string[] = [];

  if (currentSearch) {
    filters.push(`"${currentSearch}"`);
  }
  if (currentCategory !== 'all') {
    const cat = getCategoryById(currentCategory);
    if (cat) {
      const catName = t(`categories.${cat.id}`);
      filters.push(catName !== `categories.${cat.id}` ? catName : cat.title);
    }
  }
  if (selectedDifficulties.length > 0) {
    const diffLabels = selectedDifficulties.map((diff: string) => {
      const key = `story.${diff.toLowerCase()}`;
      const translated = t(key);
      if (translated && translated !== key) return translated;
      return diff;
    });
    filters.push(diffLabels.join(', '));
  }
  if (selectedDurations.length > 0) {
    const durationLabels: Record<string, string> = {
      short: getText('collection.durationShort', 'Short (< 15 min)'),
      medium: getText('collection.durationMedium', 'Medium (15-30 min)'),
      long: getText('collection.durationLong', 'Long (> 30 min)'),
    };
    filters.push(selectedDurations.map((d: string) => durationLabels[d]).join(', '));
  }

  if (filters.length > 0) {
    container.innerHTML = filters.map((f: string) => `<span class="filter-pill">${f}</span>`).join('');
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}

function renderStories(stories: Story[]): void {
  const container = document.getElementById('storiesContainer');
  if (!container) return;

  if (stories.length === 0) {
    const emptyTitle = getText('collection.emptyTitle', 'No stories found');
    const emptyDesc = getText(
      'collection.emptyDescription',
      "Try changing your filters or search keywords to find what you're looking for."
    );
    const emptyReset = getText('collection.emptyReset', 'Reset All Filters');
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

  stories.forEach((story: Story) => {
    const card = createStoryCard(story, { showDescription: true });
    container.appendChild(card);
  });
}

function setupEventListeners(): void {
  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
  if (searchInput) {
    let searchTimeout: ReturnType<typeof setTimeout>;
    searchInput.addEventListener('input', (e: Event) => {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        currentSearch = (e.target as HTMLInputElement).value.trim();
        filterAndRender();
      }, 300);
    });
  }

  document.querySelectorAll<HTMLInputElement>('.difficulty-filter').forEach((checkbox) => {
    checkbox.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        selectedDifficulties.push(target.value);
      } else {
        selectedDifficulties = selectedDifficulties.filter((d: string) => d !== target.value);
      }
      filterAndRender();
    });
  });

  document.querySelectorAll<HTMLInputElement>('.duration-filter').forEach((checkbox) => {
    checkbox.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        selectedDurations.push(target.value);
      } else {
        selectedDurations = selectedDurations.filter((d: string) => d !== target.value);
      }
      filterAndRender();
    });
  });

  document.querySelectorAll<HTMLInputElement>('.status-filter').forEach((checkbox) => {
    checkbox.addEventListener('change', (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.checked) {
        selectedStatuses.push(target.value);
      } else {
        selectedStatuses = selectedStatuses.filter((s: string) => s !== target.value);
      }
      filterAndRender();
    });
  });

  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      resetAllFilters();
    });
  }

  const sortSelect = document.getElementById('sortSelect') as HTMLSelectElement | null;
  if (sortSelect) {
    sortSelect.addEventListener('change', (e: Event) => {
      currentSort = (e.target as HTMLSelectElement).value;
      filterAndRender();
    });
  }

  const filterToggle = document.getElementById('filterToggle');
  if (filterToggle) {
    filterToggle.addEventListener('click', () => {
      const panel = document.getElementById('filterPanel');
      const icon = document.getElementById('filterToggleIcon') as HTMLElement | null;

      isFilterPanelOpen = !isFilterPanelOpen;

      if (isFilterPanelOpen) {
        panel?.classList.remove('collapsed');
        panel?.classList.add('expanded');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        panel?.classList.remove('expanded');
        panel?.classList.add('collapsed');
        if (icon) icon.style.transform = 'rotate(-90deg)';
      }
    });
  }

  window.addEventListener('popstate', () => {
    getFiltersFromURL();
    restoreUIFromState();
    filterAndRender();
  });

  document.addEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === '/' && (document.activeElement as HTMLElement)?.tagName !== 'INPUT') {
      e.preventDefault();
      const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
      if (searchInput) searchInput.focus();
    }

    if (e.key === 'Escape') {
      if ((document.activeElement as HTMLElement)?.tagName === 'INPUT') {
        (document.activeElement as HTMLElement).blur();
      } else {
        resetAllFilters();
      }
    }
  });
}

function resetAllFilters(): void {
  currentSearch = '';
  currentCategory = 'all';
  selectedDifficulties = [];
  selectedDurations = [];
  selectedStatuses = ['published', 'coming-soon'];
  currentSort = 'default';

  const searchInput = document.getElementById('searchInput') as HTMLInputElement | null;
  if (searchInput) searchInput.value = '';

  const sortSelect = document.getElementById('sortSelect') as HTMLSelectElement | null;
  if (sortSelect) sortSelect.value = 'default';

  document.querySelectorAll<HTMLInputElement>('.difficulty-filter').forEach((cb) => (cb.checked = false));
  document.querySelectorAll<HTMLInputElement>('.duration-filter').forEach((cb) => (cb.checked = false));
  document.querySelectorAll<HTMLInputElement>('.status-filter').forEach((cb) => (cb.checked = true));

  document.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'));
  const allBtn = document.querySelector('[data-category="all"]');
  if (allBtn) allBtn.classList.add('active');

  filterAndRender();
}

export function initCollectionPage(): void {
  loadStories();
  setupEventListeners();
}
