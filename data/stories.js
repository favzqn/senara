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
    title: "Mental Health Hero",
    description: "Join Vani as she faces emotional challenges and discovers the true strength in maintaining mental health.",
    longDescription: "Mental health is not a weakness. It is a strength. Follow Vani's journey through emotional challenges, from anxiety to depression, while learning to recognize signs of mental disorders and understanding when to seek help. Through 5 in-depth chapters, you'll uncover myths surrounding mental health, reduce stigma, and master relaxation techniques you can practice right away. Be a Mental Health Hero, not just for yourself, but for the people you love.",
    category: "mind-emotions",
    tags: ["Mental Health", "Emotional Skills", "Self-Care"],
    age: "13+",
    series: "Mental Health Series",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/pahlawan-kesehatan-mental.png",
    duration: 45,
    chapters: 5,
    difficulty: "Intermediate",
    learningOutcomes: [
      "Understand mental health literacy concepts",
      "Recognize symptoms of mental disorders",
      "Reduce stigma towards mental health",
      "Know when to seek professional help",
      "Learn relaxation techniques (Box Breathing, Progressive Muscle Relaxation)"
    ],
    author: "Senara Team",
    scriptBy: "Diceritain Team",
    collaboration: "In partnership with diceritain.id",
    releaseDate: "2024-01-15",
    status: "published",
    rating: 4.8,
    plays: 1250,
    voiceActed: true,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "teman-baru-di-kelas-8b",
    title: "New Friend in Class 8B",
    description: "Follow Alya, a Deaf student joining a new class, and Rafi who learns to be a good friend through BISINDO.",
    longDescription: "A warm story about inclusion and sign language. Alya is a Deaf student who just transferred to Class 8B. Through Rafi's journey learning BISINDO and classmates who begin to understand how to communicate with Alya, you'll learn about empathy, inclusion, and the basics of Indonesian Sign Language (BISINDO). A story about friendship that transcends language barriers.",
    category: "relationships-social",
    tags: ["Inclusion", "BISINDO", "Sign Language", "Empathy", "Friendship"],
    age: "10+",
    series: "Inklusi Series",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/teman-baru-di-kelas-8b.png",
    duration: 25,
    chapters: 8,
    difficulty: "Beginner",
    learningOutcomes: [
      "Understand how to communicate with Deaf friends",
      "Learn the basics of BISINDO (Indonesian Sign Language)",
      "Build empathy and inclusion in school environments",
      "Appreciate diverse ways of communicating",
      "Learn to be a good ally for friends with disabilities"
    ],
    author: "Senara Team",
    releaseDate: "2024-12-10",
    status: "published",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  },
  {
    id: "digital-literacy-navigator",
    title: "Digital Literacy Navigator",
    description: "Join Raka as he learns to navigate social media safely, spot fake news, protect his privacy, and deal with cyberbullying.",
    longDescription: "Social media is everywhere, but how well do you really know it? Follow Raka, a regular high school student, as he discovers the hidden dangers of the digital world — from viral misinformation and privacy risks to cyberbullying. Through interactive choices and real-world scenarios, you'll learn to think critically, protect yourself online, and become a responsible digital citizen. A must-read for anyone who spends time on social media.",
    category: "digital-life-online",
    tags: ["Digital Literacy", "Social Media", "Fake News", "Privacy", "Cyberbullying"],
    age: "13+",
    series: "Digital Literacy Series",
    featured: true,
    thumbnail: "/senara/assets/thumbnails/digital-literacy-navigator.png",
    duration: 20,
    chapters: 1,
    difficulty: "Beginner",
    learningOutcomes: [
      "Recognize misinformation and fake news on social media",
      "Understand the importance of privacy settings and 2FA",
      "Learn how to deal with cyberbullying as a bystander and victim",
      "Develop critical thinking skills for evaluating digital content",
      "Practice responsible digital citizenship and online ethics"
    ],
    author: "Senara Team",
    releaseDate: "2026-06-12",
    status: "published",
    rating: 0,
    plays: 0,
    voiceActed: false,
    hasChoices: true,
    hasAchievements: true
  }
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
