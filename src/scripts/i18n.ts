import idData from '../i18n/id.json';
import enData from '../i18n/en.json';
import jaData from '../i18n/ja.json';

export type Language = 'id' | 'en' | 'ja';

const SUPPORTED_LANGUAGES: Language[] = ['id', 'en', 'ja'];
const DEFAULT_LANGUAGE: Language = 'id';
const STORAGE_KEY = 'senara_language';

const translations: Record<Language, Record<string, unknown>> = {
  id: idData as Record<string, unknown>,
  en: enData as Record<string, unknown>,
  ja: jaData as Record<string, unknown>,
};

let currentLanguage: Language = DEFAULT_LANGUAGE;
let initialized = false;

function getStoredLanguage(): Language {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED_LANGUAGES.includes(stored as Language)) {
      return stored as Language;
    }
  } catch {}
  return DEFAULT_LANGUAGE;
}

function detectLanguage(): Language {
  const bl = (navigator.language || '').toLowerCase();
  if (bl.startsWith('id')) return 'id';
  if (bl.startsWith('ja')) return 'ja';
  return 'en';
}

function getNestedValue(obj: Record<string, unknown>, path: string): string | undefined {
  const result = path.split('.').reduce<unknown>((current, key) => {
    if (current && typeof current === 'object' && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj);
  if (typeof result === 'string') return result;
  if (typeof result === 'number') return String(result);
  return undefined;
}

export function t(key: string, params: Record<string, string> = {}): string {
  const langData = translations[currentLanguage] || {};
  let value = getNestedValue(langData, key);

  if (value === undefined && currentLanguage !== DEFAULT_LANGUAGE) {
    const defaultData = translations[DEFAULT_LANGUAGE] || {};
    value = getNestedValue(defaultData, key);
  }

  if (value === undefined) return key;

  if (Object.keys(params).length > 0) {
    value = value.replace(/\{\{(\w+)\}\}/g, (_, paramKey) => {
      return params[paramKey] !== undefined ? params[paramKey] : `{{${paramKey}}}`;
    });
  }

  return value;
}

export function setLanguage(lang: Language): void {
  if (!SUPPORTED_LANGUAGES.includes(lang)) return;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {}
  window.location.reload();
}

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

export function translatePage(): void {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n')!;
    const translation = t(key);
    if (translation !== key) {
      el.textContent = translation;
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html')!;
    const translation = t(key);
    if (translation !== key) {
      el.innerHTML = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-i18n-placeholder')!;
    const translation = t(key);
    if (translation !== key) {
      (el as HTMLInputElement).placeholder = translation;
    }
  });
}

export function initI18n(): void {
  if (initialized) return;
  let stored = getStoredLanguage();
  if (!stored || !SUPPORTED_LANGUAGES.includes(stored)) {
    stored = detectLanguage();
    try {
      localStorage.setItem(STORAGE_KEY, stored);
    } catch {}
  }
  currentLanguage = stored;
  document.documentElement.lang = currentLanguage;
  initialized = true;
}

initI18n();
