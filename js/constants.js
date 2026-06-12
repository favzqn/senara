/**
 * Application Constants
 * Enums, magic numbers, and fixed values
 */

const CONSTANTS = {
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
    TEEN: '13+',
    YOUNG_ADULT: '16+',
    ALL_AGES: '10+',
  },

  // Error messages
  ERRORS: {
    STORY_NOT_FOUND: 'Story not found.',
    CATEGORY_NOT_FOUND: 'Category not found.',
    NO_STORIES_FOUND: 'No stories match your search.',
    NO_STORIES_IN_CATEGORY: 'No stories in this category yet.',
    SCRIPT_LOAD_FAILED: 'Failed to load story script:',
    INVALID_INPUT: 'Please enter your name.',
  },

  // Success messages
  SUCCESS: {
    LINK_COPIED: 'Copied!',
  },

  // Loading states
  LOADING_STATES: {
    LOADING: 'Loading stories...',
    EMPTY: 'No stories available',
  },

  // Default values
  DEFAULTS: {
    PLAYER_NAME: 'Mental Health Hero',
    FEATURED_STORIES_LIMIT: 3,
  },
};

// Freeze constants to prevent accidental mutations
Object.freeze(CONSTANTS);
Object.freeze(CONSTANTS.AGE_RATINGS);
Object.freeze(CONSTANTS.ERRORS);
Object.freeze(CONSTANTS.SUCCESS);
Object.freeze(CONSTANTS.LOADING_STATES);
Object.freeze(CONSTANTS.DEFAULTS);
