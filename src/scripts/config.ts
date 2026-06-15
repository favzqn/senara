export const CONFIG = {
  paths: {
    monogatari: './monogatari/index.html',
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
    copyLinkTimeout: 2000,
  },
};

Object.freeze(CONFIG);
