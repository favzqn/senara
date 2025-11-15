/**
 * Learning Paths Utilities
 * Handles progress tracking, localStorage management, and soft lock logic
 */

/**
 * LocalStorage key prefix for learning paths
 */
const LP_PREFIX = 'path_';
const LP_STORY_SUFFIX = '_story_';
const LP_COMPLETED = 'completed';

/**
 * Generate localStorage key for a story in a path
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {string} LocalStorage key
 */
function getLPStorageKey(pathId, storyId) {
  return `${LP_PREFIX}${pathId}${LP_STORY_SUFFIX}${storyId}`;
}

/**
 * Mark a story as completed in a learning path
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 */
function markStoryCompleted(pathId, storyId) {
  try {
    const key = getLPStorageKey(pathId, storyId);
    localStorage.setItem(key, LP_COMPLETED);
  } catch (error) {
    console.warn('Could not save progress to localStorage:', error);
  }
}

/**
 * Check if a story is completed in a learning path
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {boolean} True if story is completed
 */
function isStoryCompleted(pathId, storyId) {
  try {
    const key = getLPStorageKey(pathId, storyId);
    return localStorage.getItem(key) === LP_COMPLETED;
  } catch (error) {
    console.warn('Could not read progress from localStorage:', error);
    return false;
  }
}

/**
 * Check if a story is locked (prerequisite not completed)
 * Story 1 is always unlocked. Other stories require previous story completion.
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {boolean} True if story is locked
 */
function isStoryLocked(pathId, storyId) {
  const path = getLearningPathById(pathId);
  if (!path) return true;
  
  const storyIndex = path.storyDetails.findIndex(s => s.storyId === storyId);
  if (storyIndex === -1) return true;
  
  // First story is always unlocked
  if (storyIndex === 0) return false;
  
  // Other stories require previous story to be completed
  const previousStory = path.storyDetails[storyIndex - 1];
  return !isStoryCompleted(pathId, previousStory.storyId);
}

/**
 * Get progress for a learning path
 * @param {string} pathId - Path ID
 * @returns {Object} Progress object with completed count and total
 */
function getPathProgress(pathId) {
  const path = getLearningPathById(pathId);
  if (!path) return { completed: 0, total: 0, percentage: 0 };
  
  const total = path.storyDetails.length;
  const completed = path.storyDetails.filter(s => isStoryCompleted(pathId, s.storyId)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return { completed, total, percentage };
}

/**
 * Reset progress for a learning path
 * @param {string} pathId - Path ID
 */
function resetPathProgress(pathId) {
  try {
    const path = getLearningPathById(pathId);
    if (!path) return;
    
    path.storyDetails.forEach(story => {
      const key = getLPStorageKey(pathId, story.storyId);
      localStorage.removeItem(key);
    });
  } catch (error) {
    console.warn('Could not reset progress:', error);
  }
}

/**
 * Check if localStorage is available (not in incognito mode)
 * @returns {boolean} True if localStorage is available
 */
function isLocalStorageAvailable() {
  try {
    const test = '__localStorage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Get all completed stories in a path
 * @param {string} pathId - Path ID
 * @returns {Array} Array of completed story IDs
 */
function getCompletedStoriesInPath(pathId) {
  const path = getLearningPathById(pathId);
  if (!path) return [];
  
  return path.storyDetails
    .filter(s => isStoryCompleted(pathId, s.storyId))
    .map(s => s.storyId);
}

/**
 * Check if path is fully completed
 * @param {string} pathId - Path ID
 * @returns {boolean} True if all stories in path are completed
 */
function isPathCompleted(pathId) {
  const progress = getPathProgress(pathId);
  return progress.completed === progress.total && progress.total > 0;
}

/**
 * Get prerequisite story for a story in a path
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {Object|null} Prerequisite story details or null if no prerequisite
 */
function getPrerequisiteStory(pathId, storyId) {
  const path = getLearningPathById(pathId);
  if (!path) return null;
  
  const storyIndex = path.storyDetails.findIndex(s => s.storyId === storyId);
  if (storyIndex <= 0) return null;
  
  return path.storyDetails[storyIndex - 1];
}

/**
 * Check if a story should show the prerequisite modal
 * Shows modal if:
 * 1. Story is not the first in the path
 * 2. Previous story is not completed
 * 3. localStorage is available
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {boolean} True if should show modal
 */
function shouldShowPrerequisiteModal(pathId, storyId) {
  if (!isLocalStorageAvailable()) return false;
  
  const prerequisite = getPrerequisiteStory(pathId, storyId);
  if (!prerequisite) return false;
  
  return !isStoryCompleted(pathId, prerequisite.storyId);
}

/**
 * Get story status for display
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {string} Status: "start", "locked", or "completed"
 */
function getStoryStatus(pathId, storyId) {
  if (isStoryCompleted(pathId, storyId)) {
    return 'completed';
  }
  
  if (isStoryLocked(pathId, storyId)) {
    return 'locked';
  }
  
  return 'start';
}

/**
 * Get status icon for story
 * @param {string} status - Story status
 * @returns {string} Icon emoji
 */
function getStatusIcon(status) {
  const icons = {
    'start': '▶️',
    'locked': '🔒',
    'completed': '✅'
  };
  return icons[status] || '•';
}

/**
 * Format progress for display
 * @param {string} pathId - Path ID
 * @returns {string} Formatted progress (e.g., "1 dari 3 selesai")
 */
function formatPathProgress(pathId) {
  const progress = getPathProgress(pathId);
  return `${progress.completed} dari ${progress.total} selesai`;
}
