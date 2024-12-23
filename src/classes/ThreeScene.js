/*
	ThreeScene.js
	-------------

	This file provides the class that will build & manage the Three.js scene.

	This will be instantiated in our main App.vue component & passed to the
	various sub components that need reference to our scene.
*/

// write a class that sets up a threeJS scene with a camera, renderer, and cube
import * as THREE from 'three';

// make ThreeJS Scene class
export default class ThreeScene {

	/**
	 * Constructs a new ThreeScene object
	 */
	constructor() {

		// build our ThreeJS scene
		this.buildThreeScene();

		// start the animation loop
		this.animate();
	}


	/**
	 * All the logic specifically for making our ThreeJS scene will live in here
	 *
	 * The rest of this class will be used for tweaking / updating / interacting with the scene, etc.
	 */
	buildThreeScene() {

		// make a new scene & renderer
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 alpha

		// make a basic box & add it to the scene
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		this.cube = new THREE.Mesh(geometry, material);
		this.scene.add(this.cube);

		// make our main camera
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.camera.position.z = 5;
	}


	/**
	 * This public method allows our scene to be mounted.
	 *
	 * This will be called by the Vue component, ThreeScene.vue, once it's mounted
	 * and has a reference to the DOM element where we want to mount our scene.
	 *
	 * Note: one side-effect we'll have is also starting a resize observer here,
	 * so we can resize the ThreeJS renderer when the window is resized.
	 *
	 * @param {HTMLElement} targetEl - the place to mount our scene, see comment above
	 */
	mountSceneToDOM(targetEl) {

		// mount the scene to a specific DOM element
		targetEl.appendChild(this.renderer.domElement);

		// build a resize observer to resize the renderer when the window is resized
		this.buildResizeObserver(targetEl);
	}


	/**
	 *
	 * @param {HTMLElement} targetEl - the element we want to watch for resizes
	 */
	buildResizeObserver(targetEl) {

		// make a new ResizeObserver
		this.resizeObserver = new ResizeObserver(entries => {
			for (let entry of entries) {
				const cr = entry.contentRect;
				this.renderer.setSize(cr.width, cr.height);
				this.camera.aspect = cr.width / cr.height;
				this.camera.updateProjectionMatrix();
				this.renderer.render(this.scene, this.camera);
			}
		});

		// observe the target element
		this.resizeObserver.observe(targetEl);
	}


	/**
	 * This method will animate our scene.
	 *
	 * It's called recursively by itself, and uses requestAnimationFrame to do so.
	 *
	 * This is where we can update our scene, move things around, etc.
	 */
	animate() {
		requestAnimationFrame(() => this.animate());
		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;
		this.renderer.render(this.scene, this.camera);
	}

}
