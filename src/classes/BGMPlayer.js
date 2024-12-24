/*
	BGMPlayer.js
	------------

	The BGMPlayer class is a simple class that plays background music when the user clicks on the window.
*/

// Main class
class BGMPlayer {

	/**
	 *
	 * @param {String} filePath - path to it
	 */
	constructor(filePath) {

		this.audioFile = filePath;
		this.audio = new Audio(this.audioFile);
		this.audio.loop = true;
		this.hasStarted = false;

		// set up our event waiting for the first click
		this.init();
	}


	/**
	 * Initializes the BGMPlayer
	 */
	init() {
		// Add a click event listener to the window that triggers audio playback
		window.addEventListener('click', this.handleFirstClick);
	}


	/**
	 * Starts the audio playback
	 */
	start() {
		if (!this.hasStarted) {
			this.audio.play()
				.then(() => {
					console.log('Playback has started successfully.');
				})
				.catch(error => {
					console.error('Error occurred during playback:', error);
				});
			this.hasStarted = true; // Set the flag to true after starting playback
			window.removeEventListener('click', this.handleFirstClick); // Remove the event listener
		}
	}


	/**
	 * Handles the first click event
	 */
	handleFirstClick = () => {
		this.start();
	};


}

export default BGMPlayer;
