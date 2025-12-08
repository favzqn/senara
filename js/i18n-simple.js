/**
 * Senara Simple i18n Module
 * Uses embedded translations (no fetch required, works with file://)
 */

const I18n = (function() {
  const SUPPORTED_LANGUAGES = ['id', 'en'];
  const DEFAULT_LANGUAGE = 'id';
  const STORAGE_KEY = 'senara_language';
  
  let currentLanguage = DEFAULT_LANGUAGE;
  let isInitialized = false;
  
  /**
   * Get language from localStorage
   */
  function getStoredLanguage() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED_LANGUAGES.includes(stored)) {
        return stored;
      }
    } catch (e) {}
    return DEFAULT_LANGUAGE;
  }
  
  /**
   * Get nested value from object using dot notation
   */
  function getNestedValue(obj, path) {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : undefined;
    }, obj);
  }
  
  /**
   * Translate a key
   */
  function t(key, params = {}) {
    // Get translations from LOCALES global (defined in locales.js)
    const locales = typeof LOCALES !== 'undefined' ? LOCALES : {};
    const langData = locales[currentLanguage] || {};
    let value = getNestedValue(langData, key);
    
    // Fallback to default language
    if (value === undefined && currentLanguage !== DEFAULT_LANGUAGE) {
      const defaultData = locales[DEFAULT_LANGUAGE] || {};
      value = getNestedValue(defaultData, key);
    }
    
    // Return key if no translation found
    if (value === undefined) {
      return key;
    }
    
    // Handle interpolation: {{name}} → params.name
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      value = value.replace(/\{\{(\w+)\}\}/g, (match, paramKey) => {
        return params[paramKey] !== undefined ? params[paramKey] : match;
      });
    }
    
    return value;
  }
  
  /**
   * Set the current language and reload
   */
  function setLanguage(lang) {
    if (!SUPPORTED_LANGUAGES.includes(lang)) {
      return;
    }
    
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    
    window.location.reload();
  }
  
  /**
   * Get current language
   */
  function getCurrentLanguage() {
    return currentLanguage;
  }
  
  /**
   * Check if ready
   */
  function isReady() {
    return isInitialized;
  }
  
  /**
   * Initialize
   */
  function init() {
    if (isInitialized) return;
    
    currentLanguage = getStoredLanguage();
    document.documentElement.lang = currentLanguage;
    isInitialized = true;
    
    console.log(`i18n: Language set to "${currentLanguage}"`);
  }
  
  /**
   * Translate all elements with data-i18n attribute
   */
  function translatePage() {
    const elements = document.querySelectorAll('[data-i18n]');
    
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      const translation = t(key);
      
      // Only update if translation found
      if (translation !== key) {
        el.textContent = translation;
      }
    });

    // Elements that allow HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      const translation = t(key);
      if (translation !== key) {
        el.innerHTML = translation;
      }
    });
    
    // Handle placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const translation = t(key);
      if (translation !== key) {
        el.placeholder = translation;
      }
    });
  }
  
  // Auto-init immediately (synchronous, no fetch needed)
  init();
  
  return {
    t,
    setLanguage,
    getCurrentLanguage,
    isReady,
    init,
    translatePage,
    DEFAULT_LANGUAGE,
    SUPPORTED_LANGUAGES
  };
})();

// Shorthand
function t(key, params) {
  return I18n.t(key, params);
}

// Auto-translate page when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  I18n.translatePage();
});
