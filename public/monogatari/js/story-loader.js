/**
 * Story Loader
 * Dynamically loads story scripts based on URL parameter
 * Must be loaded BEFORE main.js
 */

'use strict';

// Story configuration - maps story IDs to their script files
const STORY_CONFIG = {
  'pahlawan-kesehatan-mental': {
    scripts: [
      './js/lang-loader.js',
      './stories/pahlawan-kesehatan-mental/chapter-1.template.js',
      './stories/pahlawan-kesehatan-mental/chapter-2.template.js',
      './stories/pahlawan-kesehatan-mental/chapter-3.template.js',
      './stories/pahlawan-kesehatan-mental/chapter-4.template.js',
      './stories/pahlawan-kesehatan-mental/chapter-5.template.js',
      './stories/pahlawan-kesehatan-mental/index.js',
    ],
    title: 'Pahlawan Kesehatan Mental | Senara',
    languages: ['id', 'en'],
  },
  'teman-baru-di-kelas-8b': {
    scripts: [
      './stories/teman-baru-di-kelas-8b/chapter-1.js',
      './stories/teman-baru-di-kelas-8b/chapter-2.js',
      './stories/teman-baru-di-kelas-8b/chapter-3.js',
      './stories/teman-baru-di-kelas-8b/chapter-4.js',
      './stories/teman-baru-di-kelas-8b/chapter-5.js',
      './stories/teman-baru-di-kelas-8b/chapter-6.js',
      './stories/teman-baru-di-kelas-8b/chapter-7.js',
      './stories/teman-baru-di-kelas-8b/chapter-8.js',
      './stories/teman-baru-di-kelas-8b/index.js',
    ],
    title: 'Teman Baru di Kelas 8B | Senara',
    secret: 'k8b-preview-2026',
  },
  'digital-literacy-navigator': {
    scripts: [
      './stories/digital-literacy-navigator/chapter-1.js',
      './stories/digital-literacy-navigator/chapter-2.js',
      './stories/digital-literacy-navigator/index.js',
    ],
    title: 'Digital Literacy Navigator | Senara'
  },
  'dompet-kosong-mimpi-penuh': {
    scripts: [
      './stories/dompet-kosong-mimpi-penuh/chapter-1.js',
      './stories/dompet-kosong-mimpi-penuh/chapter-2.js',
      './stories/dompet-kosong-mimpi-penuh/index.js',
    ],
    title: 'Empty Wallet, Full Dreams | Senara'
  },
  'komunikasi-resolusi-konflik': {
    scripts: [
      './stories/komunikasi-resolusi-konflik/chapter-1.js',
      './stories/komunikasi-resolusi-konflik/chapter-2.js',
      './stories/komunikasi-resolusi-konflik/index.js',
    ],
    title: 'Communication & Conflict Resolution | Senara'
  },
  'misi-nol-sampah': {
    scripts: [
      './stories/misi-nol-sampah/chapter-1.js',
      './stories/misi-nol-sampah/chapter-2.js',
      './stories/misi-nol-sampah/index.js',
    ],
    title: 'Zero Waste Mission | Senara'
  },
};

// Default story if none specified
const DEFAULT_STORY = 'pahlawan-kesehatan-mental';

/**
 * Get story ID from URL parameter
 */
function getStoryIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('story') || DEFAULT_STORY;
}

/**
 * Load a script and return a promise
 */
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load: ${src}`));
    document.head.appendChild(script);
  });
}

/**
 * Load all scripts for a story in sequence
 */
async function loadStoryScripts(storyId) {
  const config = STORY_CONFIG[storyId];
  
  if (!config) {
    console.error(`Story not found: ${storyId}`);
    document.body.innerHTML = `
      <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Inter,sans-serif;text-align:center;padding:2rem;">
        <div>
          <h1 style="font-size:2rem;margin-bottom:1rem;">Cerita tidak ditemukan</h1>
          <p style="color:#666;margin-bottom:2rem;">Cerita "${storyId}" tidak ada atau belum tersedia.</p>
          <a href="/collection" style="display:inline-block;padding:0.75rem 2rem;background:#b45309;color:white;border-radius:0.5rem;text-decoration:none;font-weight:600;">Kembali ke Koleksi</a>
        </div>
      </div>`;
    return Promise.reject(new Error(`Story not found: ${storyId}`));
  }

  // Secret gate — block stories with a secret unless URL has matching ?secret=
  if (config.secret) {
    const urlSecret = new URLSearchParams(window.location.search).get('secret');
    if (urlSecret !== config.secret) {
      document.body.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Inter,sans-serif;text-align:center;padding:2rem;">
          <div>
            <h1 style="font-size:2rem;margin-bottom:1rem;">Cerita belum tersedia</h1>
            <p style="color:#666;margin-bottom:2rem;">Cerita ini masih dalam pengembangan.</p>
            <a href="/collection" style="display:inline-block;padding:0.75rem 2rem;background:#b45309;color:white;border-radius:0.5rem;text-decoration:none;font-weight:600;">Kembali ke Koleksi</a>
          </div>
        </div>`;
      return Promise.reject(new Error(`Story "${storyId}" requires a secret key`));
    }
  }

  // Expose story config for index.js
  window._storyConfig = config;

  // Update page title
  if (config.title) {
    document.title = config.title;
  }

  // Load scripts in sequence (order matters for dependencies)
  for (const src of config.scripts) {
    try {
      await loadScript(src);
      console.log(`Loaded: ${src}`);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(`Story loaded: ${storyId}`);
}

// Get story ID and load scripts
const currentStoryId = getStoryIdFromURL();

// Load the story and expose promise globally
window.storyLoadPromise = loadStoryScripts(currentStoryId);
