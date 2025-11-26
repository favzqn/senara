/**
 * Quiz Analytics Helper
 * Use this in your story scripts to track quiz attempts
 * 
 * Example usage in a story script:
 * QuizAnalytics.trackQuizAttempt('quiz_1', 'What is 2+2?', '4', true);
 */

const QuizAnalytics = (() => {
	/**
	 * Track a quiz attempt
	 * @param {string} quizId - Unique ID for the quiz
	 * @param {string} question - The quiz question
	 * @param {string} userAnswer - The user's answer
	 * @param {boolean} isCorrect - Whether the answer was correct
	 */
	function trackQuizAttempt(quizId, question, userAnswer, isCorrect) {
		if (typeof MonogatariAnalytics !== 'undefined') {
			MonogatariAnalytics.trackQuizAttempt(quizId, question, userAnswer, isCorrect);
		} else {
			console.warn('MonogatariAnalytics not available');
		}
	}

	/**
	 * Track multiple quiz attempts at once
	 * @param {array} attempts - Array of quiz attempts
	 * Example: [
	 *   { quizId: 'q1', question: 'Q1?', answer: 'A', correct: true },
	 *   { quizId: 'q2', question: 'Q2?', answer: 'B', correct: false }
	 * ]
	 */
	function trackMultipleAttempts(attempts) {
		attempts.forEach(attempt => {
			trackQuizAttempt(
				attempt.quizId,
				attempt.question,
				attempt.answer,
				attempt.correct
			);
		});
	}

	/**
	 * Get current quiz statistics
	 */
	function getQuizStats() {
		if (typeof MonogatariAnalytics !== 'undefined') {
			const state = MonogatariAnalytics.getState();
			return {
				quizzesAttempted: state.quizzesAttempted,
				quizzesCorrect: state.quizzesCorrect,
				score: state.quizzesAttempted > 0 
					? Math.round((state.quizzesCorrect / state.quizzesAttempted) * 100)
					: 0
			};
		}
		return null;
	}

	return {
		trackQuizAttempt,
		trackMultipleAttempts,
		getQuizStats
	};
})();
