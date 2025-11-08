/**
 * Central Stories Database
 * Single source of truth for all story metadata
 * 
 * Story Object Structure:
 * - id: Unique identifier (used in URLs and file names)
 * - title: Display title
 * - description: Short description for cards
 * - longDescription: Detailed description for story page
 * - tags: Array of category tags
 * - age: Age rating (16+, 18+, All Ages)
 * - series: Series name for grouping
 * - featured: Whether to show on homepage
 * - thumbnail: Path to thumbnail image
 * - duration: Estimated play time in minutes
 * - chapters: Number of chapters
 * - difficulty: Story complexity (Beginner, Intermediate, Advanced)
 * - learningOutcomes: Array of what players will learn
 * - author: Story creator/writer
 * - releaseDate: ISO date string (YYYY-MM-DD)
 * - status: Publication status (published, draft, coming-soon)
 * - rating: Average user rating (0-5)
 * - plays: Total number of plays
 */

const allStoriesData = [
  {
    id: "pahlawan-kesehatan-mental",
    title: "Pahlawan Kesehatan Mental",
    description: "Pelajari literasi kesehatan mental melalui petualangan interaktif bersama Vani.",
    longDescription: "Dalam visual novel edukatif ini, Anda akan belajar tentang kesehatan mental, mengenali gejala gangguan mental, mengurangi stigma, dan memahami pentingnya bantuan profesional. Melalui 5 chapter yang menarik, Anda akan menjadi Pahlawan Kesehatan Mental yang siap membantu diri sendiri dan orang lain.",
    tags: ["Mental Health", "Emotional Skills", "Self-Care"],
    age: "13+",
    series: "Mental Health Series",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/pahlawan-kesehatan-mental.png",
    duration: 45,
    chapters: 5,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Memahami konsep literasi kesehatan mental",
      "Mengenali gejala gangguan mental",
      "Mengurangi stigma terhadap kesehatan mental",
      "Mengetahui kapan mencari bantuan profesional",
      "Belajar teknik relaksasi (Box Breathing, Progressive Muscle Relaxation)"
    ],
    author: "Senara Team",
    releaseDate: "2024-01-15",
    status: "published",
    rating: 4.8,
    plays: 1250,
    voiceActed: true,
    hasChoices: true,
    hasAchievements: true
  },
];

/**
 * Helper function to get story by ID
 * @param {string} id - Story ID
 * @returns {Object|null} Story object or null if not found
 */
function getStoryById(id) {
  return allStoriesData.find(story => story.id === id) || null;
}

/**
 * Helper function to get featured stories
 * @returns {Array} Array of featured stories
 */
function getFeaturedStories() {
  return allStoriesData.filter(story => story.featured);
}

/**
 * Helper function to get stories by status
 * @param {string} status - Publication status
 * @returns {Array} Array of stories with matching status
 */
function getStoriesByStatus(status) {
  return allStoriesData.filter(story => story.status === status);
}

/**
 * Helper function to get stories by difficulty
 * @param {string} difficulty - Difficulty level
 * @returns {Array} Array of stories with matching difficulty
 */
function getStoriesByDifficulty(difficulty) {
  return allStoriesData.filter(story => story.difficulty === difficulty);
}

/**
 * Helper function to sort stories by rating
 * @returns {Array} Stories sorted by rating (highest first)
 */
function getStoriesSortedByRating() {
  return [...allStoriesData].sort((a, b) => b.rating - a.rating);
}

/**
 * Helper function to sort stories by plays
 * @returns {Array} Stories sorted by play count (highest first)
 */
function getStoriesSortedByPopularity() {
  return [...allStoriesData].sort((a, b) => b.plays - a.plays);
}
