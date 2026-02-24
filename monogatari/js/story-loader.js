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
      './stories/pahlawan-kesehatan-mental/chapter-1.js',
      './stories/pahlawan-kesehatan-mental/chapter-2.js',
      './stories/pahlawan-kesehatan-mental/chapter-3.js',
      './stories/pahlawan-kesehatan-mental/chapter-4.js',
      './stories/pahlawan-kesehatan-mental/chapter-5.js',
      './stories/pahlawan-kesehatan-mental/index.js',
    ],
    title: 'Pahlawan Kesehatan Mental | Senara'
  },
  'teman-baru-di-kelas-8b': {
    scripts: [
      './stories/teman-baru-di-kelas-8b/chapter-1.js',
      './stories/teman-baru-di-kelas-8b/index.js',
    ],
    title: 'Teman Baru di Kelas 8B | Senara'
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
    // Fall back to default story
    return loadStoryScripts(DEFAULT_STORY);
  }

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

// Store story ID globally for analytics
window.currentStoryId = currentStoryId;

// Load the story and expose promise globally
window.storyLoadPromise = loadStoryScripts(currentStoryId);
