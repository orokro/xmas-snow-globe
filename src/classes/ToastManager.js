/*
	ToastManager.js
	---------------

	Simple JavaScript class to manage timing & queueing of toast messages.
*/

// vue
import { ref } from 'vue';

// main class
class ToastManager {

	/**
	 * Constructs the ToastManager
	 *
	 * @param {Number} toastLength - the length toasts should last in seconds
	 */
	constructor(toastLength) {

		// The duration each toast should remain visible
		this.toastLength = toastLength * 1000;

		// Ref variable to hold the current message and title
		this.currentMessage = ref({
			message: '',
			title: '',
		});

		// true if we should show the toast
		this.showToast = ref(false);

		// Array to queue the messages
		this.messageQueue = [];

		// To hold the timer ID
		this.timerId = null;
	}


	/**
	 * Shows a toast message, or queues it for later if it's still showing another one
	 *
	 * @param {String} message - the Message to display
	 * @param {String} title - [optional] the title of the message
	 */
	showToastMsg(message, title = '') {

		// Create the toast object
		const toast = { message, title };
		if (this.showToast.value === false) {

			// If there is no current message, display this one immediately
			this.setCurrentMessage(toast);

		} else {

			// Otherwise, add to the queue
			this.messageQueue.push(toast);
		}
	}


	/**
	 * Set the current message to show & countdown
	 *
	 * @param {Object} toast - message like { message: 'message', title: 'title' }
	 */
	setCurrentMessage(toast) {

		// Set the current message object
		this.currentMessage.value = toast;
		this.showToast.value = true;

		// in the public folder /assets/sfx/ there's a ding.mp3 file
		// play that sound now
		setTimeout(() => {
			const audio = new Audio('assets/sfx/ding.mp3');
			audio.play();
		}, 100);

		// Clear any existing timer
		if (this.timerId) {
			clearTimeout(this.timerId);
		}

		this.timerId = setTimeout(() => {
			this.clearCurrentMessage();
		}, this.toastLength);

	}


	/**
	 * Clear the current message and show the next one in the queue
	 */
	clearCurrentMessage() {

		this.showToast.value = false;
		if (this.messageQueue.length > 0) {

			// Wait half a second before showing the next message
			setTimeout(() => {
				this.setCurrentMessage(this.messageQueue.shift());
			}, 500);
		}
	}

}

export default ToastManager;
