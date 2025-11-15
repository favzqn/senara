/**
 * Learning Paths Database
 * Defines structured learning paths with prerequisite stories
 * 
 * Path Object Structure:
 * - id: Unique identifier (used in URLs)
 * - title: Display title
 * - description: Short description (1-2 sentences)
 * - longDescription: Detailed description (2-3 sentences)
 * - emoji: Emoji icon for visual representation
 * - estimatedDuration: Total duration in minutes
 * - status: "available" or "coming-soon"
 * - learningOutcomes: Array of what learners will achieve
 * - stories: Array of story IDs in sequence
 * - storyDetails: Detailed info for each story in the path
 */

const allLearningPaths = [
  {
    id: "mental-health-101",
    title: "Mental Health 101",
    description: "Memahami Kesehatan Mental dari Dasar",
    longDescription: "Jalur pembelajaran komprehensif tentang literasi kesehatan mental. Pelajari konsep dasar, kenali gejala, dan pahami kapan mencari bantuan profesional.",
    emoji: "🧠",
    estimatedDuration: 45,
    status: "available",
    learningOutcomes: [
      "Literasi kesehatan mental",
      "Pengenalan gejala gangguan mental",
      "Mengurangi stigma terhadap kesehatan mental",
      "Mengetahui kapan mencari bantuan profesional",
      "Teknik relaksasi dan self-care"
    ],
    stories: [
      "pahlawan-kesehatan-mental"
    ],
    storyDetails: [
      {
        storyId: "pahlawan-kesehatan-mental",
        title: "Pahlawan Kesehatan Mental",
        synopsis: "Pelajari literasi kesehatan mental melalui petualangan interaktif bersama Vani.",
        duration: 45,
        difficulty: "Intermediate",
        order: 1
      }
    ]
  },
  {
    id: "critical-thinking-mastery",
    title: "Critical Thinking Mastery",
    description: "Analisis & Pengambilan Keputusan",
    longDescription: "Jalur pembelajaran untuk mengembangkan kemampuan berpikir kritis melalui skenario kompleks dan pilihan bermakna.",
    emoji: "🚀",
    estimatedDuration: 120,
    status: "coming-soon",
    learningOutcomes: [
      "Analisis masalah secara sistematis",
      "Evaluasi bukti dan argumen",
      "Pengambilan keputusan yang informed",
      "Pemecahan masalah kreatif",
      "Berpikir logis dan rasional"
    ],
    stories: [],
    storyDetails: []
  }
];

/**
 * Helper function to get learning path by ID
 * @param {string} id - Path ID
 * @returns {Object|null} Path object or null if not found
 */
function getLearningPathById(id) {
  return allLearningPaths.find(path => path.id === id) || null;
}

/**
 * Helper function to get all available paths
 * @returns {Array} Array of available paths
 */
function getAvailablePaths() {
  return allLearningPaths.filter(path => path.status === "available");
}

/**
 * Helper function to get all coming soon paths
 * @returns {Array} Array of coming soon paths
 */
function getComingSoonPaths() {
  return allLearningPaths.filter(path => path.status === "coming-soon");
}

/**
 * Helper function to get story details within a path
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {Object|null} Story details or null if not found
 */
function getStoryInPath(pathId, storyId) {
  const path = getLearningPathById(pathId);
  if (!path) return null;
  return path.storyDetails.find(s => s.storyId === storyId) || null;
}

/**
 * Helper function to get next story in path
 * @param {string} pathId - Path ID
 * @param {string} currentStoryId - Current story ID
 * @returns {Object|null} Next story details or null if no next story
 */
function getNextStoryInPath(pathId, currentStoryId) {
  const path = getLearningPathById(pathId);
  if (!path) return null;
  
  const currentIndex = path.storyDetails.findIndex(s => s.storyId === currentStoryId);
  if (currentIndex === -1 || currentIndex === path.storyDetails.length - 1) {
    return null;
  }
  
  return path.storyDetails[currentIndex + 1];
}

/**
 * Helper function to get previous story in path
 * @param {string} pathId - Path ID
 * @param {string} currentStoryId - Current story ID
 * @returns {Object|null} Previous story details or null if no previous story
 */
function getPreviousStoryInPath(pathId, currentStoryId) {
  const path = getLearningPathById(pathId);
  if (!path) return null;
  
  const currentIndex = path.storyDetails.findIndex(s => s.storyId === currentStoryId);
  if (currentIndex <= 0) {
    return null;
  }
  
  return path.storyDetails[currentIndex - 1];
}
