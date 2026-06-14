export interface AppConfig {
  paths: {
    root: string;
    stories: string;
    monogatari: string;
    storyScript: (id: string) => string;
    storyPage: (id: string) => string;
  };
  urls: {
    trakteer: string;
    volunteerForm: string;
    contact: string;
  };
  social: {
    twitter: (url: string, text: string) => string;
    facebook: (url: string) => string;
    whatsapp: (text: string) => string;
  };
  ui: {
    mobileMenuDelay: number;
    copyLinkTimeout: number;
    storyLoadTimeout: number;
  };
  features: {
    preloadAssets: boolean;
    enableAnalytics: boolean;
    enableDebug: boolean;
  };
  validation: {
    minNameLength: number;
    maxNameLength: number;
  };
}

export const CONFIG: AppConfig = {
  paths: {
    root: '/',
    stories: '/data/stories.js',
    monogatari: './monogatari/index.html',
    storyScript: (id: string) => `./monogatari/stories/${id}.js`,
    storyPage: (id: string) => `/story?id=${id}`,
  },
  urls: {
    trakteer: 'https://trakteer.id/senara.id',
    volunteerForm: 'https://forms.gle/MBBZmvUkSYS6daQaA',
    contact: 'mailto:fauzan08fauzan@gmail.com?subject=Partnership%20Inquiry',
  },
  social: {
    twitter: (url: string, text: string) =>
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    facebook: (url: string) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: (text: string) =>
      `https://wa.me/?text=${encodeURIComponent(text)}`,
  },
  ui: {
    mobileMenuDelay: 100,
    copyLinkTimeout: 2000,
    storyLoadTimeout: 5000,
  },
  features: {
    preloadAssets: true,
    enableAnalytics: true,
    enableDebug: false,
  },
  validation: {
    minNameLength: 1,
    maxNameLength: 50,
  },
};

Object.freeze(CONFIG);
Object.freeze(CONFIG.paths);
Object.freeze(CONFIG.urls);
Object.freeze(CONFIG.social);
Object.freeze(CONFIG.ui);
Object.freeze(CONFIG.features);
Object.freeze(CONFIG.validation);
