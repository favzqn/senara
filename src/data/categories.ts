import { t } from '../scripts/i18n';

export interface Category {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  borderColor: string;
}

export const allCategoriesData: Category[] = [
  {
    id: 'mind-emotions',
    slug: 'mind-emotions',
    title: 'Mind & Emotions',
    description: 'Managing insecurity, anxiety, overthinking, and loneliness through relatable stories.',
    icon: '\u{1F9E0}',
    color: 'rgba(248, 223, 255, 0.25)',
    borderColor: 'rgba(147, 51, 234, 0.2)',
  },
  {
    id: 'self-awareness-identity',
    slug: 'self-awareness-identity',
    title: 'Self-Awareness & Identity',
    description: 'Understanding boundaries, self-worth, and authenticity in your personal journey.',
    icon: '\u{1F331}',
    color: 'rgba(219, 247, 220, 0.3)',
    borderColor: 'rgba(21, 128, 61, 0.2)',
  },
  {
    id: 'relationships-social',
    slug: 'relationships-social',
    title: 'Relationships & Social Dynamics',
    description: 'Navigating friendships, toxic people, dating, and conflict resolution.',
    icon: '\u{1FA77}',
    color: 'rgba(254, 205, 211, 0.3)',
    borderColor: 'rgba(219, 39, 119, 0.2)',
  },
  {
    id: 'digital-life-online',
    slug: 'digital-life-online',
    title: 'Digital Life & Online Identity',
    description: 'Facing cyberbullying, filter anxiety, viral pressure, and online drama.',
    icon: '\u{1F4F1}',
    color: 'rgba(191, 219, 254, 0.25)',
    borderColor: 'rgba(29, 78, 216, 0.2)',
  },
  {
    id: 'college-work-adulthood',
    slug: 'college-work-adulthood',
    title: 'College, Work & Early Adulthood',
    description: 'Dealing with first job, burnout, academic pressure, and life transitions.',
    icon: '\u{1F4BC}',
    color: 'rgba(254, 240, 138, 0.3)',
    borderColor: 'rgba(161, 98, 7, 0.2)',
  },
  {
    id: 'social-issues',
    slug: 'social-issues',
    title: 'Social Issues',
    description: 'Understanding privilege, bullying, inequality, and societal expectations.',
    icon: '\u{1F30D}',
    color: 'rgba(191, 219, 254, 0.2)',
    borderColor: 'rgba(15, 118, 110, 0.2)',
  },
  {
    id: 'money-young-adult-life',
    slug: 'money-young-adult-life',
    title: 'Money & Young Adult Life',
    description: 'Managing your first salary, impulsive buying, and the pressure to overwork for money.',
    icon: '\u{1F4B8}',
    color: 'rgba(254, 226, 226, 0.3)',
    borderColor: 'rgba(180, 83, 9, 0.2)',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return allCategoriesData.find(cat => cat.id === id);
}

export function getTranslatedCategory(category: Category): Category {
  const translatedTitle = t(`categories.${category.id}`);
  const translatedDesc = t(`categories.${category.id}-desc`);
  const result = { ...category };
  if (translatedTitle !== `categories.${category.id}`) result.title = translatedTitle;
  if (translatedDesc !== `categories.${category.id}-desc`) result.description = translatedDesc;
  return result;
}
