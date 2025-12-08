/**
 * Reusable Navbar Component
 * Renders consistent navigation across all pages
 * Supports i18n language switching
 */

/**
 * Get navigation items with translations
 * @returns {Array} Navigation items
 */
function getNavItems() {
  // Check if i18n is available and ready
  const useI18n = typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady();
  
  // Helper to get translation or fallback
  const getText = (key, fallback) => {
    if (useI18n) {
      const translated = I18n.t(key);
      return translated !== key ? translated : fallback;
    }
    return fallback;
  };
  
  return [
    { 
      href: 'index.html', 
      label: getText('nav.home', 'Beranda'), 
      id: 'home', 
      event: 'Navbar Beranda' 
    },
    { 
      href: 'koleksi.html', 
      label: getText('nav.collection', 'Koleksi'), 
      id: 'collection', 
      event: 'Navbar Koleksi' 
    },
    { 
      href: 'about.html', 
      label: getText('nav.about', 'Tentang'), 
      id: 'about', 
      event: 'Navbar Tentang' 
    },
    { 
      href: 'pendekatan.html', 
      label: getText('nav.approach', 'Pendekatan'), 
      id: 'pendekatan', 
      event: 'Navbar Pendekatan' 
    },
    { 
      href: 'faq.html', 
      label: getText('nav.faq', 'FAQ'), 
      id: 'faq', 
      event: 'Navbar FAQ' 
    },
    { 
      href: 'donasi.html', 
      label: getText('nav.donate', 'Donasi'), 
      id: 'donasi', 
      event: 'Navbar Donasi' 
    },
  ];
}

/**
 * Get language toggle HTML
 * @returns {string} HTML for language toggle
 */
function getLanguageToggleHTML() {
  // Check if i18n is available and ready
  if (typeof I18n === 'undefined' || !I18n.isReady || !I18n.isReady()) {
    return '';
  }
  
  const currentLang = I18n.getCurrentLanguage();
  const isEnglish = currentLang === 'en';
  
  return `
    <div class="lang-switcher" role="group" aria-label="Language selection">
      <div class="lang-switcher-track">
        <span class="lang-switcher-slider" data-active="${isEnglish ? 'en' : 'id'}"></span>
        <button 
          class="lang-btn ${!isEnglish ? 'is-active' : ''}" 
          data-lang="id"
          data-umami-event="Navbar lang ID"
          aria-label="Bahasa Indonesia"
          aria-pressed="${!isEnglish}"
          type="button"
        >
          <span class="lang-flag">🇮🇩</span>
          <span class="lang-code">ID</span>
        </button>
        <button 
          class="lang-btn ${isEnglish ? 'is-active' : ''}" 
          data-lang="en"
          data-umami-event="Navbar lang EN"
          aria-label="English"
          aria-pressed="${isEnglish}"
          type="button"
        >
          <span class="lang-flag">🇬🇧</span>
          <span class="lang-code">EN</span>
        </button>
      </div>
    </div>
  `;
}

/**
 * Render navbar HTML
 * @param {string} currentPage - Current page identifier for active state
 * @returns {string} HTML string for navbar
 */
function getNavbarHTML(currentPage = '') {
  const navItems = getNavItems();
  const useI18n = typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady();
  
  let tagline = 'Belajar lewat cerita';
  if (useI18n) {
    const translated = I18n.t('nav.tagline');
    if (translated !== 'nav.tagline') {
      tagline = translated;
    }
  }

  const desktopMenu = navItems
    .map(item => {
      const isActive = currentPage === item.id ? 'is-active' : '';
      return `<a href="${item.href}" class="nav-link ${isActive}" data-umami-event="${item.event}">${item.label}</a>`;
    })
    .join('');

  const mobileMenu = navItems
    .map(item => `
      <a href="${item.href}" class="nav-mobile-link" data-umami-event="Mobile ${item.event}">
        ${item.label}
      </a>
    `)
    .join('');

  const langToggle = getLanguageToggleHTML();

  return `
    <nav class="senara-nav" id="senaraNav">
      <div class="nav-inner">
        <div class="nav-brand-block">
          <a href="index.html" class="nav-logo" data-umami-event="Navbar Logo Home">Senara</a>
          <p class="nav-tagline">${tagline}</p>
        </div>
        <div class="nav-links">
          ${desktopMenu}
          ${langToggle}
        </div>
        <button id="mobileMenuBtn" class="nav-mobile-toggle" aria-label="Menu" data-umami-event="Navbar mobile toggle">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  `;
}

/**
 * Initialize navbar on page load
 * @param {string} currentPage - Current page identifier
 */
function initNavbar(currentPage = '') {
  // Find navbar placeholder
  let navPlaceholder = document.getElementById('navbar-placeholder');
  
  if (!navPlaceholder) {
    // If no placeholder exists, create one at the top of body
    navPlaceholder = document.createElement('div');
    navPlaceholder.id = 'navbar-placeholder';
    document.body.insertBefore(navPlaceholder, document.body.firstChild);
  }
  
  // Insert navbar HTML
  navPlaceholder.innerHTML = getNavbarHTML(currentPage);
  
  // Create mobile menu overlay as direct child of body
  let mobileMenu = document.getElementById('mobileMenu');
  if (!mobileMenu) {
    mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobileMenu';
    mobileMenu.className = 'nav-mobile-menu';
    
    // Use shared nav items function
    const navItems = getNavItems();
    const langToggle = getLanguageToggleHTML();
    
    const mobileMenuHTML = navItems
      .map(item => `<a href="${item.href}" class="nav-mobile-link" data-umami-event="Mobile ${item.event}">${item.label}</a>`)
      .join('');
    
    mobileMenu.innerHTML = `
      <div class="nav-mobile-content">
        ${mobileMenuHTML}
        <div class="nav-mobile-lang">
          ${langToggle}
        </div>
      </div>
    `;
    
    document.body.appendChild(mobileMenu);
  }
  
  // Setup mobile menu toggle
  setupMobileMenuToggle();
  
  // Setup language toggle
  setupLanguageToggle();
}

/**
 * Setup language toggle functionality
 */
function setupLanguageToggle() {
  const langButtons = document.querySelectorAll('.lang-btn');
  
  langButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.dataset.lang;
      
      // Update slider position immediately for visual feedback
      const sliders = document.querySelectorAll('.lang-switcher-slider');
      sliders.forEach(slider => {
        slider.dataset.active = lang;
      });
      
      // Update button states
      document.querySelectorAll('.lang-btn').forEach(b => {
        const isActive = b.dataset.lang === lang;
        b.classList.toggle('is-active', isActive);
        b.setAttribute('aria-pressed', isActive);
      });
      
      if (typeof I18n !== 'undefined' && I18n.setLanguage) {
        I18n.setLanguage(lang, true);
      }
    });
  });
}

/**
 * Setup mobile menu toggle functionality
 */
function setupMobileMenuToggle() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!mobileMenuBtn || !mobileMenu) return;

  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-open');
    mobileMenuBtn.classList.toggle('is-open');
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('is-open');
      mobileMenuBtn.classList.remove('is-open');
    });
  });
}

// Auto-initialize on DOM ready if navbar element exists
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('nav')) {
    setupMobileMenuToggle();
  }
});
