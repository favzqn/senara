export const CONSTANTS = {
  DIFFICULTIES: {
    BEGINNER: 'Beginner',
    INTERMEDIATE: 'Intermediate',
    ADVANCED: 'Advanced',
  },
  STATUS: {
    PUBLISHED: 'published',
    DRAFT: 'draft',
    COMING_SOON: 'coming-soon',
  },
  AGE_RATINGS: {
    TEEN: '13+',
    YOUNG_ADULT: '16+',
    ALL_AGES: '10+',
  },
  ERRORS: {
    STORY_NOT_FOUND: 'Story not found.',
    CATEGORY_NOT_FOUND: 'Category not found.',
    NO_STORIES_FOUND: 'No stories match your search.',
    NO_STORIES_IN_CATEGORY: 'No stories in this category yet.',
    SCRIPT_LOAD_FAILED: 'Failed to load story script:',
    INVALID_INPUT: 'Please enter your name.',
  },
  SUCCESS: {
    LINK_COPIED: 'Copied!',
  },
  LOADING_STATES: {
    LOADING: 'Loading stories...',
    EMPTY: 'No stories available',
  },
  DEFAULTS: {
    PLAYER_NAME: 'Mental Health Hero',
    FEATURED_STORIES_LIMIT: 3,
  },
} as const;

export type Constants = typeof CONSTANTS;
