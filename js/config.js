/**
 * Centralized Configuration
 * Single source of truth for paths, URLs, and settings
 */

const CONFIG = {
  // Application paths
  paths: {
    root: '/',
    stories: '/data/stories.js',
    monogatari: './monogatari/index.html',
    storyScript: (id) => `./monogatari/stories/${id}.js`,
    storyPage: (id) => `story.html?id=${id}`,
  },

  // API & External URLs
  urls: {
    trakteer: 'https://trakteer.id/senara.id',
    volunteerForm: 'https://forms.gle/MBBZmvUkSYS6daQaA',
    contact: 'mailto:hello@senara.id?subject=Partnership%20Inquiry',
  },

  // Social sharing
  social: {
    twitter: (url, text) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    facebook: (url) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: (text) => `https://wa.me/?text=${encodeURIComponent(text)}`,
  },

  // UI Settings
  ui: {
    mobileMenuDelay: 100,
    copyLinkTimeout: 2000,
    storyLoadTimeout: 5000,
  },

  // Feature flags
  features: {
    preloadAssets: true,
    enableAnalytics: false,
    enableDebug: false,
  },

  // Validation
  validation: {
    minNameLength: 1,
    maxNameLength: 50,
  },
};

// Freeze config to prevent accidental mutations
Object.freeze(CONFIG);
Object.freeze(CONFIG.paths);
Object.freeze(CONFIG.urls);
Object.freeze(CONFIG.social);
Object.freeze(CONFIG.ui);
Object.freeze(CONFIG.features);
Object.freeze(CONFIG.validation);
