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
    id: 'mental-health-wellbeing',
    slug: 'mental-health-wellbeing',
    title: 'Kesehatan Mental',
    description: 'Cerita untuk regulasi emosi, journaling reflektif, dan dukungan sebaya.',
    icon: '🧠',
    color: 'rgba(248, 223, 255, 0.25)',
    borderColor: 'rgba(147, 51, 234, 0.2)',
  },
  {
    id: 'personal-growth-life-skills',
    slug: 'personal-growth-life-skills',
    title: 'Pengembangan Diri',
    description: 'Latihan kebiasaan, manajemen waktu, dan membangun mindset berkembang.',
    icon: '🌱',
    color: 'rgba(219, 247, 220, 0.3)',
    borderColor: 'rgba(21, 128, 61, 0.2)',
  },
  {
    id: 'health-fitness-lifestyle',
    slug: 'health-fitness-lifestyle',
    title: 'Kesehatan & Gaya Hidup',
    description: 'Narasi seputar nutrisi mindful, olahraga ringan, dan ritual keseharian.',
    icon: '🏃‍♀️',
    color: 'rgba(187, 247, 208, 0.3)',
    borderColor: 'rgba(4, 120, 87, 0.2)',
  },
  {
    id: 'career-tech-professional',
    slug: 'career-tech-professional',
    title: 'Karier & Teknologi',
    description: 'Simulasi karier digital, pemecahan masalah, dan komunikasi profesional.',
    icon: '💼',
    color: 'rgba(191, 219, 254, 0.25)',
    borderColor: 'rgba(29, 78, 216, 0.2)',
  },
  {
    id: 'relationships',
    slug: 'relationships',
    title: 'Hubungan & Relasi',
    description: 'Romansa sehat, dinamika keluarga, dan pertemanan yang suportif.',
    icon: '💞',
    color: 'rgba(254, 205, 211, 0.3)',
    borderColor: 'rgba(219, 39, 119, 0.2)',
  },
  {
    id: 'youth-education',
    slug: 'youth-education',
    title: 'Remaja & Pendidikan',
    description: 'Topik akademik ringan, study hacks, dan eksplorasi cita-cita remaja.',
    icon: '🎓',
    color: 'rgba(254, 240, 138, 0.3)',
    borderColor: 'rgba(161, 98, 7, 0.2)',
  },
  {
    id: 'social-issues-humanity',
    slug: 'social-issues-humanity',
    title: 'Isu Sosial & Kemanusiaan',
    description: 'Empati lintas budaya, aktivisme muda, dan kerja kemanusiaan.',
    icon: '🌍',
    color: 'rgba(191, 219, 254, 0.2)',
    borderColor: 'rgba(15, 118, 110, 0.2)',
  },
  {
    id: 'money-financial-literacy',
    slug: 'money-financial-literacy',
    title: 'Keuangan & Literasi',
    description: 'Keuangan harian, budgeting gamified, dan keputusan finansial awal.',
    icon: '💰',
    color: 'rgba(254, 226, 226, 0.3)',
    borderColor: 'rgba(180, 83, 9, 0.2)',
  },
  {
    id: 'culture-history-folklore',
    slug: 'culture-history-folklore',
    title: 'Budaya & Sejarah',
    description: 'Legenda lokal, tokoh sejarah, dan perjalanan lintas tradisi.',
    icon: '🏺',
    color: 'rgba(254, 215, 170, 0.25)',
    borderColor: 'rgba(194, 65, 12, 0.2)',
  },
  {
    id: 'spirituality-self-reflection',
    slug: 'spirituality-self-reflection',
    title: 'Spiritualitas & Refleksi',
    description: 'Meditasi terpandu, filosofi praktis, dan ruang hening untuk jeda.',
    icon: '✨',
    color: 'rgba(221, 214, 254, 0.3)',
    borderColor: 'rgba(109, 40, 217, 0.2)',
  },
  {
    id: 'digital-life-internet-safety',
    slug: 'digital-life-internet-safety',
    title: 'Kehidupan Digital',
    description: 'Etika daring, jejak digital, dan kemampuan navigasi cyber wellness.',
    icon: '🔒',
    color: 'rgba(191, 219, 254, 0.25)',
    borderColor: 'rgba(37, 99, 235, 0.2)',
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
