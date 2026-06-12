/**
 * Senara TV — Channel Configuration
 * Educational YouTube channels curated by Senara
 */

const senaraTVChannels = [
  {
    id: 'UC_eifcIIjgN8Q_8m34nWo3Q',
    name: 'Satu Persen',
    handle: '@satupersen',
    category: 'self-growth',
    ageGroup: 'young-adult',
    accent: '#6366f1',
    emoji: '💡',
    focus: 'Self-growth & psychology',
    channelUrl: 'https://www.youtube.com/@satupersen',
    avatar: '',
    maxVideos: 8,
    tagline: 'Jadi 1% lebih baik setiap hari'
  },
  {
    id: 'UCu0yQD7NFMyLu_-TmKa4Hqg',
    name: 'Kok Bisa?',
    handle: '@kokbisa',
    category: 'science-curiosity',
    ageGroup: 'teen',
    accent: '#f97316',
    emoji: '🤔',
    focus: 'Science & curiosity',
    channelUrl: 'https://www.youtube.com/@kokbisa',
    avatar: '',
    maxVideos: 8,
    tagline: 'Kenapa ya? Kok bisa?'
  },
  {
    id: 'UCYO_jab_esuFRV4b17AJtAw',
    name: '3Blue1Brown',
    handle: '@3blue1brown',
    category: 'science-curiosity',
    ageGroup: 'young-adult',
    accent: '#3b82f6',
    emoji: '📐',
    focus: 'Math & visual learning',
    channelUrl: 'https://www.youtube.com/@3blue1brown',
    avatar: '',
    maxVideos: 6,
    tagline: 'Mathematics with visual intuition'
  },
  {
    id: 'UCsXVk37bltHxD1rDPwtNM8Q',
    name: 'Kurzgesagt',
    handle: '@kurzgesagt',
    category: 'science-curiosity',
    ageGroup: 'teen',
    accent: '#10b981',
    emoji: '🐦',
    focus: 'Science explained simply',
    channelUrl: 'https://www.youtube.com/@kurzgesagt',
    avatar: '',
    maxVideos: 6,
    tagline: 'In a nutshell'
  },
  {
    id: 'UCJ0-Ot6b1NkR2p9Fv9b1b1bA',
    name: 'TheraminTrees',
    handle: '@theramintrees',
    category: 'mind-emotions',
    ageGroup: 'young-adult',
    accent: '#8b5cf6',
    emoji: '🧠',
    focus: 'Psychology & critical thinking',
    channelUrl: 'https://www.youtube.com/@theramintrees',
    avatar: '',
    maxVideos: 6,
    tagline: 'Understanding manipulation and belief'
  },
  {
    id: 'UC4a-Gbdw7vOaccHmFo40b9g',
    name: 'CrashCourse',
    handle: '@crashcourse',
    category: 'stories',
    ageGroup: 'teen',
    accent: '#ef4444',
    emoji: '📚',
    focus: 'Education & learning',
    channelUrl: 'https://www.youtube.com/@crashcourse',
    avatar: '',
    maxVideos: 6,
    tagline: 'Learn anything!'
  },
  {
    id: 'UCsooa4yRKGN_zEE8iknghZA',
    name: 'TED-Ed',
    handle: '@TEDEd',
    category: 'stories',
    ageGroup: 'all',
    accent: '#e11d48',
    emoji: '🎓',
    focus: 'Animated educational lessons',
    channelUrl: 'https://www.youtube.com/@TEDEd',
    avatar: '',
    maxVideos: 6,
    tagline: 'Lessons worth sharing'
  },
  {
    id: 'UCtIy8bk-RxI0a9b9xk3b1bA',
    name: 'The School of Life',
    handle: '@theschooloflifetv',
    category: 'mind-emotions',
    ageGroup: 'young-adult',
    accent: '#d97706',
    emoji: '🏫',
    focus: 'Emotional intelligence',
    channelUrl: 'https://www.youtube.com/@theschooloflifetv',
    avatar: '',
    maxVideos: 6,
    tagline: 'Self-knowledge and emotional wisdom'
  }
];

const senaraTVHero = {
  all: {
    channelId: 'UC_eifcIIjgN8Q_8m34nWo3Q',
    title: 'Satu Persen',
    description: 'Featured educational content for personal growth',
    badge: "Editor's Pick",
    ctaLabel: 'Watch Now'
  },
  kids: {
    channelId: 'UCsooa4yRKGN_zEE8iknghZA',
    title: 'TED-Ed for Kids',
    description: 'Animated lessons perfect for young learners',
    badge: 'Educational',
    ctaLabel: 'Watch Now'
  },
  teen: {
    channelId: 'UCsXVk37bltHxD1rDPwtNM8Q',
    title: 'Kurzgesagt',
    description: 'Science and philosophy explained beautifully',
    badge: 'Science',
    ctaLabel: 'Watch Now'
  },
  'young-adult': {
    channelId: 'UC_eifcIIjgN8Q_8m34nWo3Q',
    title: 'Satu Persen',
    description: 'Self-improvement and psychology for young adults',
    badge: 'Self Growth',
    ctaLabel: 'Watch Now'
  }
};
