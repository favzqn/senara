/**
 * Monogatari Analytics Module
 * Tracks story events and sends them to Umami analytics
 */

const MonogatariAnalytics = (() => {
	// Configuration
	const config = {
		enabled: typeof window.umami !== 'undefined',
		storyId: null,
		sessionId: generateSessionId(),
		startTime: Date.now(),
		currentScene: null,
		choicesCount: 0,
		quizzesAttempted: 0,
		quizzesCorrect: 0,
	};

	/**
	 * Generate a unique session ID
	 */
	function generateSessionId() {
		return `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}

	/**
	 * Get story ID from URL parameter
	 */
	function getStoryId() {
		const params = new URLSearchParams(window.location.search);
		return params.get('story') || 'unknown';
	}

	/**
	 * Track an event with Umami
	 * @param {string} eventName - Event name (e.g., 'story_start')
	 * @param {object} eventData - Additional event data
	 */
	function trackEvent(eventName, eventData = {}) {
		if (!config.enabled) {
			console.warn('Umami not available, event not tracked:', eventName);
			return;
		}

		const enrichedData = {
			storyId: config.storyId,
			sessionId: config.sessionId,
			timestamp: new Date().toISOString(),
			...eventData
		};

		// Send to Umami
		if (window.umami && typeof window.umami.track === 'function') {
			window.umami.track(eventName, enrichedData);
		}

		console.log(`📊 Analytics: ${eventName}`, enrichedData);
	}

	/**
	 * Initialize analytics when story starts
	 */
	function init() {
		config.storyId = getStoryId();
		
		trackEvent('story_session_start', {
			storyId: config.storyId,
			sessionId: config.sessionId,
			timestamp: new Date().toISOString()
		});
	}

	/**
	 * Track story start (when play button is clicked)
	 */
	function trackStoryStart() {
		trackEvent('story_start', {
			storyId: config.storyId,
			duration: 0
		});
	}

	/**
	 * Track scene transition
	 * @param {string} sceneLabel - Label of the scene
	 */
	function trackSceneChange(sceneLabel) {
		const previousScene = config.currentScene;
		config.currentScene = sceneLabel;

		trackEvent('story_scene_change', {
			fromScene: previousScene,
			toScene: sceneLabel,
			sceneNumber: extractSceneNumber(sceneLabel)
		});
	}

	/**
	 * Extract scene number from label (e.g., 'Scene_1' -> 1)
	 */
	function extractSceneNumber(label) {
		const match = label.match(/\d+/);
		return match ? parseInt(match[0]) : null;
	}

	/**
	 * Track user choice
	 * @param {string} choiceText - Text of the choice selected
	 * @param {string} choiceLabel - Label/ID of the choice
	 */
	function trackChoice(choiceText, choiceLabel) {
		config.choicesCount++;

		trackEvent('story_choice_made', {
			choiceText: choiceText,
			choiceLabel: choiceLabel,
			choiceNumber: config.choicesCount,
			currentScene: config.currentScene
		});
	}

	/**
	 * Track quiz attempt
	 * @param {string} quizId - ID of the quiz
	 * @param {string} question - Quiz question text
	 * @param {string} userAnswer - User's answer
	 * @param {boolean} isCorrect - Whether answer was correct
	 */
	function trackQuizAttempt(quizId, question, userAnswer, isCorrect) {
		config.quizzesAttempted++;
		if (isCorrect) {
			config.quizzesCorrect++;
		}

		trackEvent('story_quiz_attempt', {
			quizId: quizId,
			question: question,
			userAnswer: userAnswer,
			isCorrect: isCorrect,
			quizNumber: config.quizzesAttempted,
			correctCount: config.quizzesCorrect,
			currentScene: config.currentScene
		});
	}

	/**
	 * Track story completion
	 * @param {string} endingLabel - Label of the ending reached
	 */
	function trackStoryCompletion(endingLabel) {
		const duration = Math.round((Date.now() - config.startTime) / 1000); // seconds

		trackEvent('story_completed', {
			storyId: config.storyId,
			endingLabel: endingLabel,
			duration: duration,
			totalChoices: config.choicesCount,
			totalQuizzes: config.quizzesAttempted,
			correctQuizzes: config.quizzesCorrect,
			quizScore: config.quizzesAttempted > 0 
				? Math.round((config.quizzesCorrect / config.quizzesAttempted) * 100)
				: null,
			sessionId: config.sessionId
		});
	}

	/**
	 * Track story abandonment (user leaves before completion)
	 */
	function trackAbandon() {
		const duration = Math.round((Date.now() - config.startTime) / 1000);

		trackEvent('story_abandoned', {
			storyId: config.storyId,
			lastScene: config.currentScene,
			duration: duration,
			choicesMade: config.choicesCount,
			quizzesAttempted: config.quizzesAttempted,
			sessionId: config.sessionId
		});
	}

	/**
	 * Track story restart
	 */
	function trackRestart() {
		trackEvent('story_restarted', {
			storyId: config.storyId,
			previousDuration: Math.round((Date.now() - config.startTime) / 1000),
			choicesMade: config.choicesCount,
			sessionId: config.sessionId
		});

		// Reset counters
		config.startTime = Date.now();
		config.currentScene = null;
		config.choicesCount = 0;
		config.quizzesAttempted = 0;
		config.quizzesCorrect = 0;
	}

	/**
	 * Track save game action
	 * @param {string} saveName - Name of the save
	 */
	function trackSave(saveName) {
		trackEvent('story_saved', {
			saveName: saveName,
			currentScene: config.currentScene,
			choicesMade: config.choicesCount,
			sessionId: config.sessionId
		});
	}

	/**
	 * Track load game action
	 * @param {string} saveName - Name of the save being loaded
	 */
	function trackLoad(saveName) {
		trackEvent('story_loaded', {
			saveName: saveName,
			sessionId: config.sessionId
		});
	}

	/**
	 * Track settings change
	 * @param {string} setting - Setting name
	 * @param {*} value - New value
	 */
	function trackSettingsChange(setting, value) {
		trackEvent('story_settings_changed', {
			setting: setting,
			value: value,
			sessionId: config.sessionId
		});
	}

	/**
	 * Get current analytics state
	 */
	function getState() {
		return {
			storyId: config.storyId,
			sessionId: config.sessionId,
			currentScene: config.currentScene,
			choicesCount: config.choicesCount,
			quizzesAttempted: config.quizzesAttempted,
			quizzesCorrect: config.quizzesCorrect,
			duration: Math.round((Date.now() - config.startTime) / 1000)
		};
	}

	// Public API
	return {
		init,
		trackStoryStart,
		trackSceneChange,
		trackChoice,
		trackQuizAttempt,
		trackStoryCompletion,
		trackAbandon,
		trackRestart,
		trackSave,
		trackLoad,
		trackSettingsChange,
		getState,
		trackEvent // For custom events
	};
})();

// Initialize analytics when script loads
if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', () => {
		MonogatariAnalytics.init();
	});
} else {
	MonogatariAnalytics.init();
}
