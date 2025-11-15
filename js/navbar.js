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
    { href: 'index.html', label: 'Beranda', id: 'home' },
    { href: 'koleksi.html', label: 'Koleksi', id: 'collection' },
    { href: 'learning-paths.html', label: 'Learning Paths', id: 'paths' },
    { href: 'index.html#tentang', label: 'Tentang', id: 'about' }
  ];

  const desktopMenu = navItems
    .map(item => {
      const isActive = currentPage === item.id ? 'text-amber-700' : 'text-amber-900 hover:text-amber-700';
      return `<a href="${item.href}" class="${isActive} transition font-medium">${item.label}</a>`;
    })
    .join('');

  const mobileMenu = navItems
    .map(item => `
      <a href="${item.href}" class="block text-amber-900 hover:text-amber-700 transition font-medium py-2">
        ${item.label}
      </a>
    `)
    .join('');

  return `
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-amber-100">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div class="text-2xl font-bold text-amber-900">
          <a href="index.html" class="hover:text-amber-700 transition">Senara</a>
        </div>
        <div class="hidden md:flex gap-8">
          ${desktopMenu}
        </div>
        <button id="mobileMenuBtn" class="md:hidden text-amber-900 hover:text-amber-700 transition">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      
      <!-- Mobile Menu -->
      <div id="mobileMenu" class="hidden md:hidden bg-white border-t border-amber-100">
        <div class="px-4 py-4 space-y-3">
          ${mobileMenu}
        </div>
      </div>
    </nav>
  `;
}

/**
 * Initialize navbar on page load
 * @param {string} currentPage - Current page identifier
 */
function initNavbar(currentPage = '') {
  // Find navbar container or create one
  let navContainer = document.querySelector('nav');
  
  if (!navContainer) {
    // If no nav exists, create one at the top of body
    navContainer = document.createElement('div');
    navContainer.id = 'navbar-container';
    document.body.insertBefore(navContainer, document.body.firstChild);
  }
  
  // Insert navbar HTML
  navContainer.outerHTML = getNavbarHTML(currentPage);
  
  // Setup mobile menu toggle
  setupMobileMenu();
}

/**
 * Setup mobile menu toggle functionality
 */
function setupMobileMenuToggle() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (!mobileMenuBtn || !mobileMenu) return;

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

// Auto-initialize on DOM ready if navbar element exists
document.addEventListener('DOMContentLoaded', () => {
  // Only auto-init if there's a nav element (for backward compatibility)
  if (document.querySelector('nav')) {
    setupMobileMenuToggle();
  }
});
