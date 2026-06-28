import { describe, it, expect, vi } from 'vitest';

// The i18n module calls initI18n() at the top level which needs document/localStorage.
// Mock it to avoid browser globals in Node test environment.
vi.mock('../scripts/i18n', () => {
  const translations: Record<string, Record<string, unknown>> = {
    en: {
      nav: { home: 'Home', collection: 'Stories', about: 'About', tagline: 'Learning through stories' },
      share: { readStory: 'Read "{{title}}" on Senara' },
    },
    id: {
      nav: { home: 'Beranda', collection: 'Koleksi', about: 'Tentang', tagline: 'Belajar lewat cerita' },
    },
  };
  let currentLang = 'en';
  return {
    t: (key: string, params: Record<string, string> = {}): string => {
      const langData = translations[currentLang] || {};
      const parts = key.split('.');
      let current: unknown = langData;
      for (const part of parts) {
        if (current && typeof current === 'object' && part in current) {
          current = (current as Record<string, unknown>)[part];
        } else {
          return key;
        }
      }
      if (typeof current !== 'string') return key;
      let value = current;
      if (Object.keys(params).length > 0) {
        value = value.replace(/\{\{(\w+)\}\}/g, (_, k) => params[k] ?? `{{${k}}}`);
      }
      return value;
    },
    getCurrentLanguage: () => currentLang as 'id' | 'en' | 'ja',
    setLanguage: vi.fn(),
    _setTestLanguage: (lang: string) => { currentLang = lang; },
  };
});

// Mock config module
vi.mock('../scripts/config', () => ({
  CONFIG: {
    social: {
      twitter: (url: string, text: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      facebook: (url: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      whatsapp: (text: string) => `https://wa.me/?text=${encodeURIComponent(text)}`,
    },
  },
}));

// Mock window.location.search
vi.stubGlobal('window', {
  location: { search: '', href: 'https://senara.id/test' },
});

import { getText, getUrlParam, formatDate } from '../scripts/shared-utils';

describe('getText', () => {
  it('returns translated text when key exists', () => {
    const result = getText('nav.home', 'Fallback');
    expect(result).toBe('Home');
  });

  it('returns fallback when key does not exist', () => {
    const result = getText('totally.fake.key', 'My Fallback');
    expect(result).toBe('My Fallback');
  });
});

describe('getUrlParam', () => {
  it('returns null when parameter is not present', () => {
    (window as any).location.search = '';
    const result = getUrlParam('id');
    expect(result).toBeNull();
  });

  it('returns the value when parameter is present', () => {
    (window as any).location.search = '?id=test-story&foo=bar';
    expect(getUrlParam('id')).toBe('test-story');
    expect(getUrlParam('foo')).toBe('bar');
    (window as any).location.search = '';
  });

  it('returns null for a missing param among existing params', () => {
    (window as any).location.search = '?id=test';
    expect(getUrlParam('missing')).toBeNull();
    (window as any).location.search = '';
  });
});

describe('formatDate', () => {
  it('formats a date string in Indonesian locale', () => {
    const result = formatDate('2024-01-15');
    expect(result).toContain('2024');
    expect(result).toContain('15');
  });

  it('formats different dates correctly', () => {
    const result = formatDate('2025-12-25');
    expect(result).toContain('2025');
    expect(result).toContain('25');
  });

  it('handles single-digit days and months', () => {
    const result = formatDate('2024-03-05');
    expect(result).toContain('5');
    expect(result).toContain('2024');
  });
});
