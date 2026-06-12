/**
 * Home Page JavaScript
 * Handles featured stories, categories, testimonials, and UI interactions
 */

// ============================================================================
// Featured Stories
// ============================================================================

let featuredStoriesData = [];

/**
 * Create featured story card - modern design
 * @param {Object} story - Story data object
 * @param {number} index - Card index (0 = hero card)
 * @returns {HTMLElement} Card element
 */
function createFeaturedCard(story, index = 0) {
  const isComingSoon = story.status === 'coming-soon';
  const isFirst = index === 0;
  
  // Get translated labels
  const minutesLabel = t('story.minutes') || 'menit';
  const playNowLabel = t('story.playNow') || 'Mainkan Sekarang →';
  const comingSoonLabel = t('story.comingSoon') || 'Segera Hadir';
  const editorsPickLabel = t('story.editorsPick') || "Editor's Pick";
  
  // Translate difficulty
  const difficultyKey = (story.difficulty || 'Beginner').toLowerCase();
  const difficultyLabel = t(`story.${difficultyKey}`) || story.difficulty || 'Beginner';
  
  // Get translated story title and description
  const storyTitle = t(`stories.${story.id}.title`) || story.title;
  const storyDesc = t(`stories.${story.id}.description`) || story.description;
  const storyInitial = storyTitle.charAt(0).toUpperCase();
  
  const card = document.createElement('a');
  card.href = isComingSoon ? '#' : `story.html?id=${story.id}`;
  card.className = `featured-card-v2 ${isFirst ? 'featured-card-hero' : ''}`;
  card.dataset.storyId = story.id;
  if (!isComingSoon) {
    card.dataset.umamiEvent = `Featured play ${story.id}`;
  }
  
  const starSvg = '<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="display:inline;vertical-align:-2px"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  card.innerHTML = `
    <div class="featured-card-visual">
      <span class="featured-card-emoji" style="font-family:'Crimson Pro',serif;font-weight:700;color:#4F46E5;opacity:0.5;font-size:3rem;">${storyInitial}</span>
      ${isFirst ? `<span class="featured-card-badge">${starSvg} ${editorsPickLabel}</span>` : ''}
      ${isComingSoon ? `<span class="featured-card-badge featured-card-badge-soon">${comingSoonLabel}</span>` : ''}
    </div>
    <div class="featured-card-body">
      <div class="featured-card-tags">
        <span class="featured-tag">${difficultyLabel}</span>
        <span class="featured-tag-dot">•</span>
        <span class="featured-tag">${story.duration || '30'} ${minutesLabel}</span>
      </div>
      <h3 class="featured-card-name">${storyTitle}</h3>
      ${storyDesc ? `<p class="featured-card-desc">${storyDesc}</p>` : ''}
      <div class="featured-card-footer">
        <span class="featured-card-cta">
          ${isComingSoon ? comingSoonLabel : playNowLabel}
        </span>
      </div>
    </div>
  `;
  
  if (isComingSoon) {
    card.style.pointerEvents = 'none';
    card.style.opacity = '0.7';
  }
  
  return card;
}

/**
 * Load featured stories from data
 */
function loadFeaturedStories() {
  const container = document.getElementById('featuredContainer');
  if (container) {
    container.innerHTML = '<div class="skeleton-card" style="height:300px;"></div>'.repeat(3);
  }

  const featured = allStoriesData.filter(story => story.featured);
  featuredStoriesData = featured;
  
  // Sort by creation date (newest first)
  const sorted = featured.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
  
  renderFeaturedCards(sorted);
}

/**
 * Render featured cards to container
 * @param {Array} stories - Stories to render
 */
function renderFeaturedCards(stories) {
  const container = document.getElementById('featuredContainer');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Limit to 4 stories for clean grid
  const displayStories = stories.slice(0, 4);
  
  displayStories.forEach((story, index) => {
    const card = createFeaturedCard(story, index);
    container.appendChild(card);
  });
}

/**
 * Setup filter pills for featured stories
 */
function setupFeaturedFilters() {
  const filterPills = document.querySelectorAll('.filter-pill');
  
  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      // Update active state
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      
      const filterValue = pill.dataset.filter;
      let filtered = featuredStoriesData;
      
      if (filterValue === 'newest') {
        filtered = [...featuredStoriesData].sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
      } else if (filterValue === 'popular') {
        filtered = [...featuredStoriesData].sort((a, b) => (b.plays || 0) - (a.plays || 0));
      } else if (filterValue === 'kids') {
        filtered = featuredStoriesData.filter(s => s.age && s.age.includes('5-8'));
      } else if (filterValue === 'teen') {
        filtered = featuredStoriesData.filter(s => s.age && s.age.includes('13+'));
      }
      
      renderFeaturedCards(filtered);
    });
  });
}

// ============================================================================
// Categories
// ============================================================================

/**
 * Render category chips to carousel
 */
function renderCategories() {
  const container = document.getElementById('categoryCarousel');
  if (!container) return;
  
  container.innerHTML = '';
  
  // Use translated categories if available
  const categories = typeof getAllCategoriesTranslated === 'function' 
    ? getAllCategoriesTranslated() 
    : allCategoriesData;
  
  categories.forEach((category) => {
    const link = document.createElement('a');
    link.href = `collection.html?category=${category.id}`;
    link.className = 'category-chip hover:no-underline';
    link.dataset.umamiEvent = `Home category ${category.title}`;
    
    link.innerHTML = `
      <div class="chip-icon" style="background: ${category.color}">${category.icon}</div>
      <span class="chip-label">${category.title}</span>
    `;
    
    container.appendChild(link);
  });
}

/**
 * Setup category grid toggle (show more/less)
 */
function setupCategoryToggle() {
  const grid = document.getElementById('learningCategoryGrid');
  const toggleBtn = document.getElementById('categoryToggleBtn');

  if (!grid || !toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    const isCollapsed = grid.classList.toggle('collapsed');
    toggleBtn.dataset.state = isCollapsed ? 'collapsed' : 'expanded';
    toggleBtn.textContent = isCollapsed ? getText('category.showMore', 'Show more') : getText('category.showLess', 'Show less');
  });
}

// ============================================================================
// Why VN Comparison Toggle
// ============================================================================

/**
 * Setup comparison toggle for Why VN section
 */
function setupComparisonToggle() {
  const toggleBtns = document.querySelectorAll('.comparison-toggle button');
  const comparisons = document.querySelectorAll('.benefit-comparison');
  const benefitCards = document.querySelectorAll('.benefit-card');

  if (!toggleBtns.length) return;

  // Mode key mapping for translation keys
  const getModeKey = (mode) => {
    const map = { 'vn': 'VN', 'pdf': 'PDF', 'socmed': 'Socmed', 'youtube': 'Youtube' };
    return map[mode] || 'VN';
  };

  // Icon SVGs
  const svgIcon = (path, size = 20) => `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
  const icons = {
    1: {
      vn: svgIcon('<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>'),
      pdf: svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>'),
      socmed: svgIcon('<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'),
      youtube: svgIcon('<polygon points="5 3 19 12 5 21 5 3"/>')
    },
    2: {
      vn: svgIcon('<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'),
      pdf: svgIcon('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>'),
      socmed: svgIcon('<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'),
      youtube: svgIcon('<rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/>')
    },
    3: {
      vn: svgIcon('<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'),
      pdf: svgIcon('<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'),
      socmed: svgIcon('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
      youtube: svgIcon('<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>')
    }
  };

  // Update card content based on mode using translations
  const updateCards = (mode) => {
    const modeKey = getModeKey(mode);
    
    benefitCards.forEach(card => {
      const cardNum = card.dataset.benefit;
      const iconElement = card.querySelector('.benefit-icon');
      const statElement = card.querySelector('.benefit-stat');
      const titleElement = card.querySelector('h3');
      const descElement = card.querySelector('p');

      if (iconElement && icons[cardNum]) {
        iconElement.innerHTML = icons[cardNum][mode];
      }

      if (statElement) {
        statElement.textContent = t(`whyVN.stat${cardNum}${modeKey}`);
      }

      if (titleElement) {
        titleElement.textContent = t(`whyVN.title${cardNum}${modeKey}`);
      }

      if (descElement) {
        descElement.textContent = t(`whyVN.desc${cardNum}${modeKey}`);
      }
    });
  };

  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const mode = btn.dataset.mode;
      
      // Update active button
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      // Update comparison text visibility
      comparisons.forEach(comp => {
        if (comp.dataset.mode === mode) {
          comp.classList.add('show');
        } else {
          comp.classList.remove('show');
        }
      });

      // Update card content with translations
      updateCards(mode);
    });
  });

  // Show VN comparisons by default and update cards with translations
  comparisons.forEach(comp => {
    if (comp.dataset.mode === 'vn') {
      comp.classList.add('show');
    }
  });
  
  // Initial update with translations
  updateCards('vn');
}

// ============================================================================
// Testimonials
// ============================================================================

let testimonials = [];
let currentTestimonialIndex = 0;

/**
 * Get testimonials with translations
 * @returns {Array} Testimonial objects
 */
function getTestimonials() {
  return [
    {
      quote: `"${t('testimonials.teacher.quote')}"`,
      author: t('testimonials.teacher.author'),
      role: t('testimonials.teacher.role'),
      avatar: 'T'
    },
    {
      quote: `"${t('testimonials.reader.quote')}"`,
      author: t('testimonials.reader.author'),
      role: t('testimonials.reader.role'),
      avatar: 'R'
    },
    {
      quote: `"${t('testimonials.facilitator.quote')}"`,
      author: t('testimonials.facilitator.author'),
      role: t('testimonials.facilitator.role'),
      avatar: 'F'
    }
  ];
}

/**
 * Setup testimonial slider with auto-rotation
 */
function setupTestimonialSlider() {
  // Initialize testimonials with translations
  testimonials = getTestimonials();
  
  const dots = document.querySelectorAll('.testimonial-dot');
  const content = document.getElementById('testimonialContent');

  if (!dots.length || !content) return;
  
  // Initial render
  updateTestimonial();

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      currentTestimonialIndex = index;
      updateTestimonial();
    });
  });

  // Auto-rotate every 5 seconds
  setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    updateTestimonial();
  }, 5000);
}

/**
 * Update testimonial display
 */
function updateTestimonial() {
  const content = document.getElementById('testimonialContent');
  const dots = document.querySelectorAll('.testimonial-dot');
  const testimonial = testimonials[currentTestimonialIndex];

  if (content && testimonial) {
    content.innerHTML = `
      <div class="testimonial-avatar" style="font-family:'Crimson Pro',serif;font-weight:700;color:#4F46E5;font-size:1.5rem;width:3rem;height:3rem;display:flex;align-items:center;justify-content:center;background:#EEF2FF;border-radius:9999px;">${testimonial.avatar}</div>
      <p class="testimonial-quote">${testimonial.quote}</p>
      <p class="testimonial-author">${testimonial.author}</p>
      <p class="testimonial-role">${testimonial.role}</p>
    `;
  }

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentTestimonialIndex);
  });
}

// ============================================================================
// Contribution Accordion
// ============================================================================

/**
 * Setup contribution accordion (if present)
 */
function setupContributionAccordion() {
  const items = document.querySelectorAll('.contrib-item');
  if (!items.length) return;

  items.forEach(item => {
    const trigger = item.querySelector('.contrib-trigger');
    const panel = item.querySelector('.contrib-panel');

    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      items.forEach(i => {
        i.classList.remove('active');
        const p = i.querySelector('.contrib-panel');
        if (p) p.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        if (panel) panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  // Expand first item by default
  if (items.length) {
    items[0].classList.add('active');
    const firstPanel = items[0].querySelector('.contrib-panel');
    if (firstPanel) firstPanel.style.maxHeight = firstPanel.scrollHeight + 'px';
  }
}

// ============================================================================
// Page Initialization
// ============================================================================

/**
 * Initialize home page
 */
function initHomePage() {
  initNavbar('home');
  initFooter();
  loadFeaturedStories();
  setupFeaturedFilters();
  renderCategories();
  setupCategoryToggle();
  setupComparisonToggle();
  setupTestimonialSlider();
  setupContributionAccordion();
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', initHomePage);
