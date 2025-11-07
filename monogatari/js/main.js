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

// Get story ID from URL parameter (from Senara platform)
function getStoryFromURL() {
	const params = new URLSearchParams(window.location.search);
	return params.get('story');
}

// Load story script dynamically
function loadStoryScript(storyId) {
	if (storyId) {
		const script = document.createElement('script');
		script.src = `./stories/${storyId}.js`;
		script.onerror = function() {
			console.error('Failed to load story script:', storyId);
		};
		document.head.appendChild(script);
	}
}

// Load story if coming from Senara
const storyId = getStoryFromURL();
if (storyId) {
	loadStoryScript(storyId);
}

$_ready (() => {
	// 2. Inside the $_ready function:

	monogatari.init ('#monogatari').then (() => {
		// 3. Inside the init function:

	});
});
