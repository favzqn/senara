/**
 * Application Constants
 * Enums, magic numbers, and fixed values
 */

const CONSTANTS = {
  // Story categories
  CATEGORIES: {
    EMOTIONAL_SKILLS: 'Emotional Skills',
    CODING: 'Coding',
    SOCIAL_SKILLS: 'Social Skills',
    LIFE_SKILLS: 'Life Skills',
    BAHASA: 'Bahasa',
    KREATIVITAS: 'Kreativitas',
    CRITICAL_THINKING: 'Critical Thinking',
    SEJARAH_BUDAYA: 'Sejarah & Budaya',
  },

  // Story emojis
  EMOJIS: {
    'pahlawan-kesehatan-mental': '🧠',
    logic101: '💻',
    friendship: '🤝',
    resilience: '🌱',
    default: '📖',
  },

  // Difficulty levels
  DIFFICULTIES: {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
  },

  // Publication status
  STATUS: {
    PUBLISHED: 'published',
    DRAFT: 'draft',
    COMING_SOON: 'coming-soon',
  },

  // Age ratings
  AGE_RATINGS: {
    TEEN: '16+',
    YOUNG_ADULT: '18+',
    ALL_AGES: 'All Ages',
  },

  // Error messages
  ERRORS: {
    STORY_NOT_FOUND: 'Story not found.',
    CATEGORY_NOT_FOUND: 'Kategori tidak ditemukan.',
    NO_STORIES_FOUND: 'Tidak ada cerita yang sesuai dengan pencarian Anda.',
    NO_STORIES_IN_CATEGORY: 'Belum ada cerita di kategori ini.',
    SCRIPT_LOAD_FAILED: 'Failed to load story script:',
    INVALID_INPUT: 'Boleh masukkan namamu?',
  },

  // Success messages
  SUCCESS: {
    LINK_COPIED: '✓ Disalin!',
  },

  // Loading states
  LOADING_STATES: {
    LOADING: 'Loading stories...',
    EMPTY: 'No stories available',
  },

  // Category slug mapping
  CATEGORY_SLUGS: {
    'emotional-skills': 'Emotional Skills',
    'coding': 'Coding',
    'social-skills': 'Social Skills',
    'life-skills': 'Life Skills',
    'bahasa': 'Bahasa',
    'kreativitas': 'Kreativitas',
    'critical-thinking': 'Critical Thinking',
    'sejarah-budaya': 'Sejarah & Budaya',
  },

  // Default values
  DEFAULTS: {
    PLAYER_NAME: 'Pahlawan Kesehatan Mental',
    FEATURED_STORIES_LIMIT: 3,
  },
};

// Freeze constants to prevent accidental mutations
Object.freeze(CONSTANTS);
Object.freeze(CONSTANTS.CATEGORIES);
Object.freeze(CONSTANTS.EMOJIS);
Object.freeze(CONSTANTS.AGE_RATINGS);
Object.freeze(CONSTANTS.ERRORS);
Object.freeze(CONSTANTS.SUCCESS);
Object.freeze(CONSTANTS.LOADING_STATES);
Object.freeze(CONSTANTS.CATEGORY_SLUGS);
Object.freeze(CONSTANTS.DEFAULTS);
