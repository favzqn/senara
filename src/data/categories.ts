export interface Category {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export const allCategoriesData: Category[] = [
  {
    id: 'mind-emotions',
    title: 'Mind & Emotions',
    description: 'Managing insecurity, anxiety, overthinking, and loneliness through relatable stories.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z"/><path d="M10 21h4"/><path d="M9 9h6"/><path d="M12 9v4"/></svg>',
    color: 'rgba(248, 223, 255, 0.25)',
  },
  {
    id: 'self-awareness-identity',
    title: 'Self-Awareness & Identity',
    description: 'Understanding boundaries, self-worth, and authenticity in your personal journey.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22c4-4 8-7.5 8-12a8 8 0 1 0-16 0c0 4.5 4 8 8 12z"/><circle cx="12" cy="10" r="3"/></svg>',
    color: 'rgba(219, 247, 220, 0.3)',
  },
  {
    id: 'relationships-social',
    title: 'Relationships & Social Dynamics',
    description: 'Navigating friendships, toxic people, dating, and conflict resolution.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    color: 'rgba(254, 205, 211, 0.3)',
  },
  {
    id: 'digital-life-online',
    title: 'Digital Life & Online Identity',
    description: 'Facing cyberbullying, filter anxiety, viral pressure, and online drama.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>',
    color: 'rgba(191, 219, 254, 0.25)',
  },
  {
    id: 'college-work-adulthood',
    title: 'College, Work & Early Adulthood',
    description: 'Dealing with first job, burnout, academic pressure, and life transitions.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    color: 'rgba(254, 240, 138, 0.3)',
  },
  {
    id: 'social-issues',
    title: 'Social Issues',
    description: 'Understanding privilege, bullying, inequality, and societal expectations.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    color: 'rgba(191, 219, 254, 0.2)',
  },
  {
    id: 'money-young-adult-life',
    title: 'Money & Young Adult Life',
    description: 'Managing your first salary, impulsive buying, and the pressure to overwork for money.',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>',
    color: 'rgba(254, 226, 226, 0.3)',
  },
];

export function getCategoryById(id: string): Category | undefined {
  return allCategoriesData.find(cat => cat.id === id);
}
