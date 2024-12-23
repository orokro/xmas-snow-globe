/*
	ModalManager.js
	---------------

	This file is similar to ToastManager.js, but for modals.

	This file provides a class that can allow one or more simple {title, messsage}
	models to be shown and queued if one is already visible.
*/

// vue
import { ref } from 'vue';


// main class to export
class ModalManager {

	/**
	 * Constructs the ModalManager
	 */
	constructor() {

		// Ref variable to hold the current modal content
		this.currentMessage = ref({ message: '', title: '' });

		// Ref to track whether a modal is open
		this.modalIsOpen = ref(false);

		// Array to queue the modal requests
		this.modalQueue = [];

		// Store the current modal's callback
		this.currentCallback = null;
	}


	/**
	 * Shows a modal message immediately, or queues it if one is already open
	 *
	 * @param {String} message - message to display on the modal
	 * @param {String} title - [optional] title of the modal
	 * @param {Function} callback - [optional] callback to execute when the modal is closed
	 */
	showModal(message, title = '', callback = null) {

		// Create the modal object
		const modal = { message, title, callback };

		if (!this.modalIsOpen.value) {

			// If no modal is currently shown, show this one
			this.setCurrentModal(modal);
		} else {

			// Otherwise, add to the queue
			this.modalQueue.push(modal);
		}
	}

	/**
	 * Shows a modal message immediately, or queues it if one is already open
	 *
	 * @param {Object} modal - like { message: 'message', title: 'title', callback: function }
	 */
	setCurrentModal(modal) {
		this.currentMessage.value = { message: modal.message, title: modal.title };
		this.currentCallback = modal.callback;
		this.modalIsOpen.value = true;
	}


	/**
	 * Closes the modal
	 *
	 * @param {*} parameter - could be whatever data you want to pass back to the callback
	 */
	closeModal(parameter) {

		// Execute the callback if present
		if (this.currentCallback) {
			this.currentCallback(parameter);
		}

		// Close the modal
		this.modalIsOpen.value = false;

		// Delay half a second before showing the next modal, if any
		if (this.modalQueue.length > 0) {
			setTimeout(() => {
				this.setCurrentModal(this.modalQueue.shift());
			}, 500);
		}
	}
}

export default ModalManager;
