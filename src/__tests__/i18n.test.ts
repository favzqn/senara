import { describe, it, expect } from 'vitest';
import idData from '../i18n/id.json';
import enData from '../i18n/en.json';
import jaData from '../i18n/ja.json';

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };
type JsonObject = { [key: string]: JsonValue };

/** Collect all leaf key paths (e.g. "nav.home") from a JSON object */
function collectLeafKeys(obj: JsonObject, prefix = ''): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      keys.push(...collectLeafKeys(value as JsonObject, path));
    } else {
      keys.push(path);
    }
  }
  return keys.sort();
}

/** Collect only the top-level keys from a JSON object */
function collectTopLevelKeys(obj: JsonObject): string[] {
  return Object.keys(obj).sort();
}

/** Collect second-level structural keys (e.g. "nav.home", "contact.title") but only for object values */
function collectSecondLevelKeys(obj: JsonObject): string[] {
  const keys: string[] = [];
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      for (const innerKey of Object.keys(value as JsonObject)) {
        keys.push(`${key}.${innerKey}`);
      }
    }
  }
  return keys.sort();
}

const languages = { id: idData, en: enData, ja: jaData } as const;
const langPairs: [string, JsonObject, string, JsonObject][] = [
  ['id', idData as JsonObject, 'en', enData as JsonObject],
  ['id', idData as JsonObject, 'ja', jaData as JsonObject],
  ['en', enData as JsonObject, 'ja', jaData as JsonObject],
];

describe('i18n - language file structure', () => {
  it('all 3 files exist and are objects', () => {
    expect(idData).toBeTruthy();
    expect(enData).toBeTruthy();
    expect(jaData).toBeTruthy();
    expect(typeof idData).toBe('object');
    expect(typeof enData).toBe('object');
    expect(typeof jaData).toBe('object');
  });

  it('all 3 files have the same top-level keys', () => {
    const idKeys = collectTopLevelKeys(idData as JsonObject);
    const enKeys = collectTopLevelKeys(enData as JsonObject);
    const jaKeys = collectTopLevelKeys(jaData as JsonObject);

    expect(enKeys).toEqual(idKeys);
    expect(jaKeys).toEqual(idKeys);
  });

  it.each(langPairs)('%s and %s have matching second-level keys', (_a, a, _b, b) => {
    const aKeys = collectSecondLevelKeys(a);
    const bKeys = collectSecondLevelKeys(b);
    expect(bKeys).toEqual(aKeys);
  });

  it('all files have meta.lang matching their filename', () => {
    expect((idData as any).meta.lang).toBe('id');
    expect((enData as any).meta.lang).toBe('en');
    expect((jaData as any).meta.lang).toBe('ja');
  });

  it.each(Object.entries(languages))('%s file has non-empty string values for leaf keys', (lang, data) => {
    const leafKeys = collectLeafKeys(data as JsonObject);
    expect(leafKeys.length).toBeGreaterThan(100); // sanity check — these are big files

    // Spot-check a few essential keys
    const essentialKeys = ['nav.home', 'nav.collection', 'nav.about'];
    for (const key of essentialKeys) {
      const parts = key.split('.');
      let current: any = data;
      for (const part of parts) {
        expect(current).toBeTruthy();
        current = current[part];
      }
      expect(typeof current).toBe('string');
      expect((current as string).length).toBeGreaterThan(0);
    }
  });

  it('categories object exists in all languages with matching keys', () => {
    const idCats = Object.keys((idData as any).categories).sort();
    const enCats = Object.keys((enData as any).categories).sort();
    const jaCats = Object.keys((jaData as any).categories).sort();
    expect(enCats).toEqual(idCats);
    expect(jaCats).toEqual(idCats);
  });

  it('stories object exists in all languages with matching keys', () => {
    const idStories = Object.keys((idData as any).stories).sort();
    const enStories = Object.keys((enData as any).stories).sort();
    const jaStories = Object.keys((jaData as any).stories).sort();
    expect(enStories).toEqual(idStories);
    expect(jaStories).toEqual(idStories);
  });
});
