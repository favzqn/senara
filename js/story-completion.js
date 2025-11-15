/**
 * Story Completion Handler
 * Marks stories as completed when they finish in the Monogatari engine
 * This script should be included in the Monogatari player page
 */

/**
 * Mark story as completed in the current learning path
 * Called when story ends or user completes it
 */
function markCurrentStoryCompleted() {
  try {
    const pathId = sessionStorage.getItem('currentPathId');
    const storyId = sessionStorage.getItem('currentStoryId');
    
    if (pathId && storyId) {
      markStoryCompleted(pathId, storyId);
      console.log(`Story completed: ${storyId} in path ${pathId}`);
      
      // Clean up session storage
      sessionStorage.removeItem('currentPathId');
      sessionStorage.removeItem('currentStoryId');
      
      return true;
    }
  } catch (error) {
    console.warn('Error marking story as completed:', error);
  }
  return false;
}

/**
 * Get completion status for current story
 * @returns {Object} Object with pathId, storyId, and isCompleted flag
 */
function getCurrentStoryCompletionStatus() {
  const pathId = sessionStorage.getItem('currentPathId');
  const storyId = sessionStorage.getItem('currentStoryId');
  
  return {
    pathId,
    storyId,
    isCompleted: pathId && storyId ? isStoryCompleted(pathId, storyId) : false
  };
}

/**
 * Redirect to path detail after story completion
 * @param {string} pathId - Path ID to redirect to
 */
function redirectToPathAfterCompletion(pathId) {
  if (pathId) {
    window.location.href = `path-detail.html?id=${pathId}`;
  }
}

/**
 * Show completion message with next steps
 * @param {string} pathId - Path ID
 * @param {string} storyId - Story ID
 * @returns {HTMLElement} Completion message element
 */
function createCompletionMessage(pathId, storyId) {
  const path = getLearningPathById(pathId);
  const nextStory = getNextStoryInPath(pathId, storyId);
  
  const container = document.createElement('div');
  container.className = 'fixed bottom-4 right-4 bg-green-50 border-2 border-green-500 rounded-lg p-4 max-w-sm shadow-lg';
  
  let nextStoryHTML = '';
  if (nextStory) {
    nextStoryHTML = `
      <p class="text-sm text-green-800 mt-3">
        <strong>Next:</strong> ${nextStory.title}
      </p>
      <a href="path-detail.html?id=${pathId}" class="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition">
        Continue to Next Story →
      </a>
    `;
  } else {
    nextStoryHTML = `
      <p class="text-sm text-green-800 mt-3 font-semibold">
        🎉 You've completed this learning path!
      </p>
      <a href="path-detail.html?id=${pathId}" class="inline-block mt-3 bg-green-600 text-white px-4 py-2 rounded font-semibold hover:bg-green-700 transition">
        View Your Progress →
      </a>
    `;
  }
  
  container.innerHTML = `
    <h3 class="font-bold text-green-900 text-lg">✅ Story Completed!</h3>
    <p class="text-sm text-green-800 mt-2">
      Great job! You've completed <strong>${path ? path.title : 'this story'}</strong>.
    </p>
    ${nextStoryHTML}
  `;
  
  return container;
}
