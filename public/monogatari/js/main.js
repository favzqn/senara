'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:
// Story loading is handled by story-loader.js

$_ready (async () => {
	// 2. Inside the $_ready function:
	
	// Wait for story scripts to load before initializing
	if (window.storyLoadPromise) {
		await window.storyLoadPromise;
		console.log('Story scripts loaded, initializing Monogatari...');
	}

	// Wait for multi-language script generation to complete
	if (window.multiLangPromise) {
		await window.multiLangPromise;
		console.log('Multi-language scripts ready.');
	}

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:
		
		// Track story start
		MonogatariAnalytics.trackStoryStart();

		// Hook into Monogatari's action system to track events
		setupAnalyticsHooks();
	});
});

/**
 * Setup hooks into Monogatari events for analytics tracking
 */
function setupAnalyticsHooks() {
	// Track when scenes change
	const originalDoAction = monogatari.doAction;
	monogatari.doAction = function(action) {
		// Track scene changes
		if (typeof action === 'string' && action.includes('show scene')) {
			const sceneMatch = action.match(/show scene\s+(\S+)/);
			if (sceneMatch) {
				MonogatariAnalytics.trackSceneChange(sceneMatch[1]);
			}
		}

		// Track when story ends
		if (action === 'end' || (typeof action === 'string' && action.includes('end'))) {
			MonogatariAnalytics.trackStoryCompletion('story_end');
		}

		return originalDoAction.call(this, action);
	};

	// Track choices via DOM event delegation (Monogatari v2.x doesn't support action().register())
	document.addEventListener('click', (e) => {
		const choiceBtn = e.target.closest('[data-choice]');
		if (choiceBtn) {
			const choiceText = choiceBtn.textContent.trim();
			MonogatariAnalytics.trackChoice(choiceText, choiceBtn.dataset.choice || choiceText);
		}
	});

	// Monitor for save/load UI interactions
	document.addEventListener('click', (e) => {
		if (e.target.closest('[data-action="save"]')) {
			const saveName = prompt('Enter save name:') || 'autosave';
			MonogatariAnalytics.trackSave(saveName);
		}
		if (e.target.closest('[data-action="load"]')) {
			MonogatariAnalytics.trackLoad('user_load');
		}
		if (e.target.closest('[data-action="restart"]')) {
			MonogatariAnalytics.trackRestart();
		}
	});

	// Track page unload (story abandonment)
	window.addEventListener('beforeunload', () => {
		MonogatariAnalytics.trackAbandon();
	});
}
