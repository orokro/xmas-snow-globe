/*
	BGMPlayer.js
	------------

	The BGMPlayer class is a simple class that plays background music when the user clicks on the window.
*/

// main class export
class BGMPlayer {


	/**
	 * Constructs the BGMPlayer
	 */
	constructor() {


		// Create audio objects for both themes
		this.bgm = new Audio('assets/sfx/zbot_theme.mp3');
		this.gatchaTheme = new Audio('assets/sfx/zbot_gatcha.mp3');

		// Enable looping for background music
		this.bgm.loop = true;

		// A flag to control the initial play action
		this.initialized = false;

		// Setup event listener to start the BGM on the first user interaction
		window.addEventListener('click', () => {
			if (!this.initialized) {
				this.bgm.play();
				this.initialized = true;
			}
		}, { once: true });
	}


	/**
	 * Temporarily interrupts the BGM music to play the gatcha theme
	 */
	playGatchaTheme() {

		// Gradually reduce the volume of the main BGM
		this.fadeVolume(this.bgm, 1, 0, 1000, () => {

			// Once volume is faded out, play the gatcha theme
			this.gatchaTheme.play();

			// Listen for when the gatcha theme has finished playing
			this.gatchaTheme.onended = () => {

				// Once gatcha theme is complete, fade BGM back in
				this.fadeVolume(this.bgm, 0, 1, 1000);
			};
		});
	}


	/**
	 * Fades the volume of an audio object
	 *
	 * @param {Audio} audio - the audio object to fade
	 * @param {Number} startVolume - the starting volume
	 * @param {Number} endVolume - the ending volume
	 * @param {Number} duration - the duration of the fade in milliseconds
	 * @param {Function} callback - the method to call when the fade is complete
	 */
	fadeVolume(audio, startVolume, endVolume, duration, callback) {


		// Number of steps to fade & some time calculations
		const steps = 50;
		const stepTime = duration / steps;
		const volumeStep = (endVolume - startVolume) / steps;
		let currentStep = 0;

		// Set the initial volume
		audio.volume = startVolume;

		// Start the interval to fade the volume
		const interval = setInterval(() => {

			if (currentStep >= steps) {
				clearInterval(interval);
				if (callback) callback();
			} else {
				currentStep++;
				audio.volume += volumeStep;
			}

		}, stepTime);
	}

}

export default BGMPlayer;
