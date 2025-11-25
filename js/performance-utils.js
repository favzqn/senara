/**
 * Performance Utilities for Senara Platform
 * Handles lazy loading, loading indicators, and image optimization
 */

/**
 * Create and show a loading indicator
 * @param {string} message - Optional loading message
 * @returns {HTMLElement} Loading indicator element
 */
function createLoadingIndicator(message = 'Memuat...') {
  const loader = document.createElement('div');
  loader.className = 'senara-loading-indicator';
  loader.innerHTML = `
    <div class="loading-spinner"></div>
    <p class="loading-text">${message}</p>
  `;
  return loader;
}

/**
 * Show loading indicator on page
 * @param {string} message - Loading message
 * @returns {HTMLElement} Loader element
 */
function showLoadingIndicator(message = 'Memuat...') {
  const loader = createLoadingIndicator(message);
  document.body.appendChild(loader);
  return loader;
}

/**
 * Hide loading indicator
 * @param {HTMLElement} loader - Loader element to remove
 */
function hideLoadingIndicator(loader) {
  if (loader && loader.parentNode) {
    loader.remove();
  }
}

/**
 * Setup lazy loading for images
 * Uses Intersection Observer API for efficient lazy loading
 */
function setupLazyLoading() {
  if (!('IntersectionObserver' in window)) {
    // Fallback for older browsers - load all images immediately
    document.querySelectorAll('img[data-src]').forEach(img => {
      img.src = img.dataset.src;
      img.removeAttribute('data-src');
    });
    return;
  }

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('lazy-loaded');
        }
        observer.unobserve(img);
      }
    });
  }, {
    rootMargin: '50px'
  });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

/**
 * Preload critical images
 * @param {string[]} imagePaths - Array of image paths to preload
 */
function preloadCriticalImages(imagePaths) {
  imagePaths.forEach(path => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = path;
    document.head.appendChild(link);
  });
}

/**
 * Setup scene loading indicator for visual novels
 * Shows loading indicator when scene is loading
 */
function setupSceneLoadingIndicator() {
  // Listen for scene changes in Monogatari engine
  if (typeof Monogatari !== 'undefined') {
    // Hook into scene transitions
    const originalShowScene = Monogatari.prototype.showScene;
    if (originalShowScene) {
      Monogatari.prototype.showScene = function(sceneName) {
        const loader = showLoadingIndicator('Memuat adegan...');
        
        // Use requestAnimationFrame to ensure smooth transition
        requestAnimationFrame(() => {
          originalShowScene.call(this, sceneName);
          setTimeout(() => hideLoadingIndicator(loader), 300);
        });
      };
    }
  }
}

/**
 * Optimize images for mobile
 * Adds responsive image attributes
 */
function optimizeImagesForMobile() {
  document.querySelectorAll('img').forEach(img => {
    // Add loading="lazy" for native lazy loading
    if (!img.hasAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }

    // Add decoding="async" for non-blocking image decoding
    if (!img.hasAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }

    // Ensure images have alt text for accessibility
    if (!img.hasAttribute('alt')) {
      img.setAttribute('alt', 'Senara visual novel image');
    }
  });
}

/**
 * Initialize all performance optimizations
 */
function initPerformanceOptimizations() {
  // Setup lazy loading
  setupLazyLoading();

  // Optimize images
  optimizeImagesForMobile();

  // Setup scene loading indicators
  setupSceneLoadingIndicator();

  // Preload critical resources
  preloadCriticalImages([
    'assets/hero-bg.jpg',
    'monogatari/assets/characters/main-character.png'
  ]);
}

// Auto-initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initPerformanceOptimizations();
});
