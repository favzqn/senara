/**
 * Language Loader for Senara Multi-Language Stories
 * 
 * Loads per-story language JSON files and provides a t() function
 * for template scripts to resolve translated text.
 * 
 * Usage:
 *   await loadStoryLanguages('pahlawan-kesehatan-mental', ['id', 'en']);
 *   setLangCode('id');
 *   t('scene1.greeting')  // returns Indonesian string
 *   setLangCode('en');
 *   t('scene1.greeting')  // returns English string
 */

'use strict';

// Global language data cache: { langCode: { ...translations } }
window._storyLangData = {};

// Available languages for the current story
window._storyAvailableLangs = [];

// Current language code for template generation
window._currentLangCode = 'id';

/**
 * Fetch a single language JSON file
 */
async function fetchLangFile(storyId, lang) {
  const url = `./stories/${storyId}/lang/${lang}.json`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Language file not found: ${url}`);
      return null;
    }
    return await response.json();
  } catch (e) {
    console.warn(`Failed to load language: ${lang}`, e);
    return null;
  }
}

/**
 * Load all language files for a story (parallel fetch)
 */
async function loadStoryLanguages(storyId, languages) {
  const results = await Promise.all(
    languages.map(async (lang) => {
      const data = await fetchLangFile(storyId, lang);
      return { lang, data };
    })
  );

  for (const { lang, data } of results) {
    if (data) {
      window._storyLangData[lang] = data;
      window._storyAvailableLangs.push(lang);
    }
  }

  console.log(`Loaded languages: ${window._storyAvailableLangs.join(', ')}`);
  return window._storyAvailableLangs;
}

/**
 * Set the current language code for template generation.
 * Call this before generating scripts with t() calls.
 */
function setLangCode(code) {
  window._currentLangCode = code;
}

/**
 * Translation function — resolves a dot-notated key from the current language data.
 * Falls back to Indonesian if key not found in current language.
 */
function t(key) {
  const langCode = window._currentLangCode || 'id';
  const data = window._storyLangData[langCode] || window._storyLangData['id'] || {};

  // Resolve dot-notated key: 'ch1.scene1.greeting' → data.ch1.scene1.greeting
  const parts = key.split('.');
  let value = data;
  for (const part of parts) {
    if (value && typeof value === 'object' && part in value) {
      value = value[part];
    } else {
      // Fallback to Indonesian
      let fallback = window._storyLangData['id'] || {};
      for (const p of parts) {
        if (fallback && typeof fallback === 'object' && p in fallback) {
          fallback = fallback[p];
        } else {
          console.warn(`Missing translation key: ${key}`);
          return key;
        }
      }
      return typeof fallback === 'string' ? fallback : key;
    }
  }
  return typeof value === 'string' ? value : key;
}

// Expose globally
window.loadStoryLanguages = loadStoryLanguages;
window.setLangCode = setLangCode;
window.t = t;
