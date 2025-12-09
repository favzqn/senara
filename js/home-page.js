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
  const emoji = getStoryEmoji(story.id);
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
  
  const card = document.createElement('a');
  card.href = isComingSoon ? '#' : `story.html?id=${story.id}`;
  card.className = `featured-card-v2 ${isFirst ? 'featured-card-hero' : ''}`;
  card.dataset.storyId = story.id;
  if (!isComingSoon) {
    card.dataset.umamiEvent = `Featured play ${story.id}`;
  }
  
  card.innerHTML = `
    <div class="featured-card-visual">
      <span class="featured-card-emoji">${emoji}</span>
      ${isFirst ? `<span class="featured-card-badge">⭐ ${editorsPickLabel}</span>` : ''}
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
    link.href = `koleksi.html?category=${category.id}`;
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
    toggleBtn.textContent = isCollapsed ? 'Tampilkan lebih banyak' : 'Tampilkan lebih sedikit';
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

  // Icon mapping (not translated)
  const icons = {
    1: { vn: '📖', pdf: '📄', socmed: '📱', youtube: '▶️' },
    2: { vn: '🎮', pdf: '📋', socmed: '👍', youtube: '⏸️' },
    3: { vn: '❤️', pdf: '💼', socmed: '⏰', youtube: '😮' }
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
        iconElement.textContent = icons[cardNum][mode];
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
      avatar: '👩‍🏫'
    },
    {
      quote: `"${t('testimonials.reader.quote')}"`,
      author: t('testimonials.reader.author'),
      role: t('testimonials.reader.role'),
      avatar: '👦'
    },
    {
      quote: `"${t('testimonials.facilitator.quote')}"`,
      author: t('testimonials.facilitator.author'),
      role: t('testimonials.facilitator.role'),
      avatar: '👩‍💼'
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
      <div class="testimonial-avatar">${testimonial.avatar}</div>
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
