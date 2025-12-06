/**
 * Reusable Navbar Component
 * Renders consistent navigation across all pages
 */

/**
 * Render navbar HTML
 * @param {string} currentPage - Current page identifier for active state
 * @returns {string} HTML string for navbar
 */
function getNavbarHTML(currentPage = '') {
  const navItems = [
    { href: 'index.html', label: 'Beranda', id: 'home', event: 'Navbar Beranda' },
    { href: 'koleksi.html', label: 'Koleksi', id: 'collection', event: 'Navbar Koleksi' },
    { href: 'about.html', label: 'Tentang', id: 'about', event: 'Navbar Tentang' },
    { href: 'pendekatan.html', label: 'Pendekatan', id: 'pendekatan', event: 'Navbar Pendekatan' },
    { href: 'faq.html', label: 'FAQ', id: 'faq', event: 'Navbar FAQ' },
    // { href: 'learning-paths.html', label: 'Learning Paths', id: 'paths', event: 'Navbar Learning Paths' },
    // { href: 'team.html', label: 'Tim', id: 'team', event: 'Navbar Tim' },
  ];

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

  return `
    <nav class="senara-nav" id="senaraNav">
      <div class="nav-inner">
        <div class="nav-brand-block">
          <a href="index.html" class="nav-logo" data-umami-event="Navbar Logo Home">Senara</a>
          <p class="nav-tagline">Belajar lewat cerita yang menyentuh hati</p>
        </div>
        <div class="nav-links">
          ${desktopMenu}
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
    
    const navItems = [
      { href: 'index.html', label: 'Beranda', id: 'home', event: 'Navbar Beranda' },
      { href: 'koleksi.html', label: 'Koleksi', id: 'collection', event: 'Navbar Koleksi' },
      { href: 'about.html', label: 'Tentang', id: 'about', event: 'Navbar Tentang' },
      { href: 'pendekatan.html', label: 'Pendekatan', id: 'pendekatan', event: 'Navbar Pendekatan' },
      { href: 'faq.html', label: 'FAQ', id: 'faq', event: 'Navbar FAQ' },
      // { href: 'learning-paths.html', label: 'Learning Paths', id: 'paths', event: 'Navbar Learning Paths' },
      // { href: 'team.html', label: 'Tim', id: 'team', event: 'Navbar Tim' },
    ];
    
    const mobileMenuHTML = navItems
      .map(item => `<a href="${item.href}" class="nav-mobile-link" data-umami-event="Mobile ${item.event}">${item.label}</a>`)
      .join('');
    
    mobileMenu.innerHTML = `
      <div class="nav-mobile-content">
        ${mobileMenuHTML}
      </div>
    `;
    
    document.body.appendChild(mobileMenu);
  }
  
  // Setup mobile menu toggle
  setupMobileMenuToggle();
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
