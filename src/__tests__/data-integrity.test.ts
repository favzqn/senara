import { describe, it, expect } from 'vitest';
import { allStoriesData, type Story } from '../data/stories';
import { allCategoriesData } from '../data/categories';

const VALID_STATUSES = ['published', 'draft', 'coming-soon'] as const;
const VALID_DIFFICULTIES = ['Beginner', 'Intermediate', 'Advanced'] as const;
const VALID_CATEGORY_IDS = allCategoriesData.map((c) => c.id);

describe('data integrity - stories', () => {
  it('exports a non-empty array of stories', () => {
    expect(allStoriesData.length).toBeGreaterThan(0);
  });

  it('every story has a unique id', () => {
    const ids = allStoriesData.map((s) => s.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it.each(allStoriesData.map((s) => [s.id, s]))(
    'story "%s" has all required fields',
    (_id, story) => {
      const s = story as Story;
      expect(s.id).toBeTruthy();
      expect(s.title).toBeTruthy();
      expect(s.description).toBeTruthy();
      expect(s.longDescription).toBeTruthy();
      expect(s.category).toBeTruthy();
      expect(s.tags).toBeInstanceOf(Array);
      expect(s.tags.length).toBeGreaterThan(0);
      expect(s.age).toBeTruthy();
      expect(s.series).toBeTruthy();
      expect(typeof s.duration).toBe('number');
      expect(s.duration).toBeGreaterThan(0);
      expect(typeof s.chapters).toBe('number');
      expect(s.chapters).toBeGreaterThan(0);
      expect(typeof s.rating).toBe('number');
      expect(typeof s.plays).toBe('number');
      expect(typeof s.featured).toBe('boolean');
      expect(typeof s.voiceActed).toBe('boolean');
      expect(typeof s.hasChoices).toBe('boolean');
      expect(typeof s.hasAchievements).toBe('boolean');
      expect(s.createdAt).toBeTruthy();
      expect(s.releaseDate).toBeTruthy();
      expect(s.author).toBeTruthy();
    },
  );

  it.each(allStoriesData.map((s) => [s.id, s]))(
    'story "%s" has a valid status',
    (_id, story) => {
      const s = story as Story;
      expect(VALID_STATUSES).toContain(s.status);
    },
  );

  it.each(allStoriesData.map((s) => [s.id, s]))(
    'story "%s" has a valid difficulty',
    (_id, story) => {
      const s = story as Story;
      expect(VALID_DIFFICULTIES).toContain(s.difficulty);
    },
  );

  it.each(allStoriesData.map((s) => [s.id, s]))(
    'story "%s" references a valid category',
    (_id, story) => {
      const s = story as Story;
      expect(VALID_CATEGORY_IDS).toContain(s.category);
    },
  );
});

describe('data integrity - categories', () => {
  it('exports a non-empty array of categories', () => {
    expect(allCategoriesData.length).toBeGreaterThan(0);
  });

  it('every category has a unique id', () => {
    const ids = allCategoriesData.map((c) => c.id);
    const unique = new Set(ids);
    expect(unique.size).toBe(ids.length);
  });

  it.each(allCategoriesData.map((c) => [c.id, c]))(
    'category "%s" has all required fields',
    (_id, cat) => {
      expect(cat.id).toBeTruthy();
      expect(cat.title).toBeTruthy();
      expect(cat.description).toBeTruthy();
      expect(cat.icon).toBeTruthy();
      expect(cat.color).toBeTruthy();
    },
  );

  it('every category is referenced by at least one story (or none are orphaned unused — soft check)', () => {
    // Informational: which categories have stories
    const usedCategories = new Set(allStoriesData.map((s) => s.category));
    const allCategoryIds = allCategoriesData.map((c) => c.id);
    const unused = allCategoryIds.filter((id) => !usedCategories.has(id));
    // Just log — not all categories must have stories yet
    if (unused.length > 0) {
      console.log('Categories without stories:', unused);
    }
    // At least the categories used by stories must exist
    for (const catId of usedCategories) {
      expect(allCategoryIds).toContain(catId);
    }
  });
});
