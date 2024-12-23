/*
	RaycasterManager.js
	-------------------

	This file provides a class that abstracts some of the Raycasting logic for ThreeJS,
	so we can write the rest of the game more easier.
*/

// three
import * as THREE from 'three';

// app
import ThreeScene from './ThreeScene';

// RaycasterManager class
class RaycasterManager {

	/**
	 * Constructs the raycaster manager
	 * @param {ThreeScene} threeScene - reference to our games scene
	 */
	constructor(threeScene) {

		// save our ThreeScene & break out it's components
		this.threeScene = threeScene;

		// true if we're enabled for raycasting
		this.enabled = true;

		// wait for our scene to be ready
		this.threeScene.ifOrWhenSceneIsReady(this.onReady.bind(this));

		// create a raycaster & mouse vector
		this.raycaster = new THREE.Raycaster();
		this.mouse = new THREE.Vector2();

		// array of listeners for hits
		this.listeners = [];

		// optional filter for objects to raycast against
		this.filter = null;
	}


	/**
	 * When our ThreeScene is ready we can save these variables locally
	 */
	onReady(){

		// save our scene, camera, renderer & container
		this.scene = this.threeScene.scene;
		this.camera = this.threeScene.camera;
		this.renderer = this.threeScene.renderer;
		this.container = this.threeScene.renderContainer;

		// Bind the click handler now that we have all the refs we need
		this.container.addEventListener('click', this.onClick.bind(this));
	}


	/**
	 * Handle when our ThreeJS container is clicked so we can do the RayCast logic
	 *
	 * @param {MouseEvent} event - The JavaScript event
	 */
	onClick(event) {

		// if we're not enabled, don't do anything
		if (!this.enabled) return;

		// Calculate mouse position in normalized device coordinates (-1 to +1)
		const rect = this.container.getBoundingClientRect();
		this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
		this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

		// Update the picking ray with the camera and mouse position
		this.raycaster.setFromCamera(this.mouse, this.camera);

		// Calculate objects intersecting the picking ray
		const intersects = this.raycaster.intersectObjects(this.scene.children, true);

		// Filter the intersects if a filter is set
		const filteredIntersects = this.filter ?
			intersects.filter(intersect => this.filter.includes(intersect.object)) :
			intersects;

		// If there's a hit, call all listeners with the first intersected object
		if (filteredIntersects.length > 0) {
			for (const listener of this.listeners) {
				listener(filteredIntersects[0]);
			}
		}
	}


	/**
	 * If we want to filter the objects we raycast against, we can set them here
	 *
	 * @param {Array|Object3D} objects - The objects to filter against
	 */
	setFilter(objects) {

		// objects will be an array of ThreeJS Groups. Recursively flatten all the children into this.filter
		if (Array.isArray(objects)) {
			this.filter = objects.reduce((acc, obj) => {
				acc.push(...obj.children);
				return acc;
			}, []);
		} else {
			this.filter = [objects];
		}

	}


	/**
	 * Allow subscribers to listen to hits from this Raycaster
	 *
	 * @param {Function} callback - call back function for when we find a hit
	 */
	onHit(callback) {
		if (typeof callback === 'function') {
			this.listeners.push(callback);
		} else {
			throw new Error('Callback must be a function.');
		}
	}

}

export default RaycasterManager;
