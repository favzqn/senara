/**
 * Central Categories Database
 * Single source of truth for all learning category metadata
 * 
 * Category Object Structure:
 * - id: Unique identifier (used in URLs)
 * - slug: URL-friendly slug
 * - title: Display title
 * - description: Short description for cards
 * - icon: Emoji icon
 * - color: Background color (rgba)
 * - borderColor: Border color (rgba)
 */

const allCategoriesData = [
  {
    id: 'mind-emotions',
    slug: 'mind-emotions',
    title: 'Mind & Emotions',
    description: 'Managing insecurity, anxiety, overthinking, and loneliness through relatable stories.',
    icon: '🧠',
    color: 'rgba(248, 223, 255, 0.25)',
    borderColor: 'rgba(147, 51, 234, 0.2)',
  },
  {
    id: 'self-awareness-identity',
    slug: 'self-awareness-identity',
    title: 'Self-Awareness & Identity',
    description: 'Understanding boundaries, self-worth, and authenticity in your personal journey.',
    icon: '🌱',
    color: 'rgba(219, 247, 220, 0.3)',
    borderColor: 'rgba(21, 128, 61, 0.2)',
  },
  {
    id: 'relationships-social',
    slug: 'relationships-social',
    title: 'Relationships & Social Dynamics',
    description: 'Navigating friendships, toxic people, dating, and conflict resolution.',
    icon: '🩷',
    color: 'rgba(254, 205, 211, 0.3)',
    borderColor: 'rgba(219, 39, 119, 0.2)',
  },
  {
    id: 'digital-life-online',
    slug: 'digital-life-online',
    title: 'Digital Life & Online Identity',
    description: 'Facing cyberbullying, filter anxiety, viral pressure, and online drama.',
    icon: '📱',
    color: 'rgba(191, 219, 254, 0.25)',
    borderColor: 'rgba(29, 78, 216, 0.2)',
  },
  {
    id: 'college-work-adulthood',
    slug: 'college-work-adulthood',
    title: 'College, Work & Early Adulthood',
    description: 'Dealing with first job, burnout, academic pressure, and life transitions.',
    icon: '💼',
    color: 'rgba(254, 240, 138, 0.3)',
    borderColor: 'rgba(161, 98, 7, 0.2)',
  },
  {
    id: 'social-issues',
    slug: 'social-issues',
    title: 'Social Issues',
    description: 'Understanding privilege, bullying, inequality, and societal expectations.',
    icon: '🌍',
    color: 'rgba(191, 219, 254, 0.2)',
    borderColor: 'rgba(15, 118, 110, 0.2)',
  },
  {
    id: 'money-young-adult-life',
    slug: 'money-young-adult-life',
    title: 'Money & Young Adult Life',
    description: 'Managing your first salary, impulsive buying, and the pressure to overwork for money.',
    icon: '💸',
    color: 'rgba(254, 226, 226, 0.3)',
    borderColor: 'rgba(180, 83, 9, 0.2)',
  },
];

/**
 * Get category by ID
 * @param {string} id - Category ID
 * @returns {Object} Category object or null
 */
function getCategoryById(id) {
  return allCategoriesData.find(cat => cat.id === id) || null;
}

/**
 * Get category by slug
 * @param {string} slug - Category slug
 * @returns {Object} Category object or null
 */
function getCategoryBySlug(slug) {
  return allCategoriesData.find(cat => cat.slug === slug) || null;
}

/**
 * Get all categories
 * @returns {Array} All category objects
 */
function getAllCategories() {
  return allCategoriesData;
}

/**
 * Get category with translated title
 * Uses i18n if available, otherwise returns original
 * @param {Object} category - Category object
 * @returns {Object} Category with translated title
 */
function getTranslatedCategory(category) {
  if (typeof I18n !== 'undefined' && I18n.isReady && I18n.isReady()) {
    const translatedTitle = I18n.t(`categories.${category.id}`);
    const translatedDesc = I18n.t(`categories.${category.id}-desc`);
    const result = { ...category };
    if (translatedTitle !== `categories.${category.id}`) {
      result.title = translatedTitle;
    }
    if (translatedDesc !== `categories.${category.id}-desc`) {
      result.description = translatedDesc;
    }
    return result;
  }
  return category;
}

/**
 * Get all categories with translations
 * @returns {Array} All category objects with translated titles
 */
function getAllCategoriesTranslated() {
  return allCategoriesData.map(getTranslatedCategory);
}
