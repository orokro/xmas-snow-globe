/*
	PresentUnboxing.js
	------------------

	This file will provide a class that just handles the unboxing of the present object.

	This will consolidate the logic of unboxing a present and showing the message to the user.
*/

// three
import * as THREE from 'three';

// our raycaster manager
import RaycasterManager from './RaycasterManager';
import ThreeScene from './ThreeScene';

// app
import { Game } from './Game';

// main class for unboxing
class PresentUnboxing {

	/**
	 * Constructs our PresentUnboxing class
	 * @param {THREE.Object3D[]} presentObjects - the array of objects to unbox
	 * @param {ThreeScene} scene - the scene to add the raycaster to
	 * @param {Function} onComplete - method to call when the unboxing is complete
	 */
	constructor(presentObjects, scene, onComplete) {

		// save the scene, present object & callback
		this.threeScene = scene;
		this.presentObjs = presentObjects;
		this.onComplete = onComplete;

		// set up our state
		this.currentStep = 0;
		this.isAnimating = false;

		// define the steps including their shape keys & durations
		this.steps = [
			{ key: 'Bow_Off', duration: 0.6 },
			{ key: ['Ribbon_A_1', 'Ribbon_A_2'], duration: [0.3, 0.5], sequential: true },
			{ key: ['Ribbon_B_1', 'Ribbon_B_2'], duration: [0.3, 0.5], sequential: true },
			{ key: 'Lid_Off', duration: 0.7 },
			{ key: 'Box_Off', duration: 0.7 }
		];

		// make our raycasting code to detect clicks on the present
		this.buildPresentRaycaster();
	}


	/**
	 * Builds the raycaster to detect clicks on the present
	 * and advances to the next step when clicked
	 */
	buildPresentRaycaster() {

		// make a raycaster to check for clicking the present
		this.raycaster = new RaycasterManager(this.threeScene);
		const filter = [this.threeScene.$('#GiftBox')];
		this.raycaster.setFilter(filter);

		// listen for a click on the present
		// wait for hits on cats
		this.raycaster.onHit((hit)=>{

			// our hit object might have userData.name with a #catName,
			// or it might be a child of a cat object
			// so recursively find the cat object's name
			let objectName = hit.object.userData.name;
			while(!objectName){
				hit.object = hit.object.parent;
				objectName = hit.object.userData.name;

				// escape if we have no parent
				if(!hit.object.parent)
					break;
			}// wend

			// if we found a cat, call the findCat function
			if(objectName){

				// the name might be a raw string, but it might also look like "#catName .class1 .class2"
				objectName = objectName.split(' ')[0].replace('#', '').toLowerCase();

				// do next step if we matched the present gift box
				if(objectName === 'giftbox')
					this.nextStep();
			}
		});
	}


	/**
	 * Advances to the next step in the unboxing
	 */
	nextStep() {

		// gtfo if we're still animating or we're done
		if (this.isAnimating || this.currentStep >= this.steps.length) return;

		// set the animating flag
		this.isAnimating = true;


		// start the zoom out if we're on the last step
		if (this.currentStep === this.steps.length - 1) {
			this.zoomIn(1, ()=>{});
		}

		// get the step details
		const step = this.steps[this.currentStep];
		const animateSequentially = (index) => {

			// get the animation key details
			const key = step.key[index];
			const duration = step.duration[index] * 1000;

			// start counting from now
			let startTime = Date.now();
			const animate = () => {

				// get the delta time & normalize for this key/step
				const elapsedTime = Date.now() - startTime;
				const progress = Math.min(elapsedTime / duration, 1);

				this.presentObjs.forEach((obj) => {
					const morphTargetIndex = obj.morphTargetDictionary[key];
					if (morphTargetIndex !== undefined) {
						obj.morphTargetInfluences[morphTargetIndex] = progress;
					}
				});

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else if (index + 1 < step.key.length) {

					// Start next animation in the sequence
					animateSequentially(index + 1);

				} else {

					// End of this step's animations
					this.isAnimating = false;
					this.currentStep++;
					if (this.currentStep === this.steps.length) {

						if(this.onComplete && typeof this.onComplete === 'function')
							this.onComplete();
					}
				}
			};
			animate();
		};

		// start the animation sequence
		if (step.sequential) {
			animateSequentially(0);

		} else {

			// get the keys & duration
			const keys = Array.isArray(step.key) ? step.key : [step.key];
			const duration = Array.isArray(step.duration) ? step.duration[0] * 1000 : step.duration * 1000;
			let startTime = Date.now();

			const animate = () => {
				const elapsedTime = Date.now() - startTime;
				const progress = Math.min(elapsedTime / duration, 1);

				keys.forEach((key, idx) => {
					this.presentObjs.forEach((obj) => {
						const morphTargetIndex = obj.morphTargetDictionary[key];
						if (morphTargetIndex !== undefined) {
							obj.morphTargetInfluences[morphTargetIndex] = progress;
						}
					});
				});

				if (progress < 1) {
					requestAnimationFrame(animate);
				} else {
					this.isAnimating = false;
					this.currentStep++;
					if (this.currentStep === this.steps.length) {

						if(this.onComplete && typeof this.onComplete === 'function')
							this.onComplete();
					}
				}
			};
			animate();
		}
	}


	/**
	 * Resets the unboxing
	 */
	reset() {

		// reset the state
		this.currentStep = 0;
		this.isAnimating = false;

		// reset the morph target influences
		this.presentObj.morphTargetInfluences.forEach((_, i) => {
			this.presentObj.morphTargetInfluences[i] = 0;
		});
	}


	zoomIn(duration, onComplete) {
		const startZoom = this.threeScene.camera.zoom;
		const endZoom = startZoom * 2;  // Adjust this factor to control how much the camera zooms in
		const startTime = Date.now();
		const endTime = startTime + duration * 1000;

		const animateZoom = () => {
		  const currentTime = Date.now();
		  const elapsed = currentTime - startTime;
		  if (elapsed < duration * 1000) {

				// Calculate the current frame's zoom level using linear interpolation
				const t = THREE.MathUtils.smoothstep((elapsed / (duration * 1000)), 0, 1);
				let zoom = startZoom + (endZoom - startZoom) * (t);


				// Update the camera's zoom level and update the controls
				this.threeScene.camera.zoom = zoom;
				this.threeScene.camera.updateProjectionMatrix();  // Make sure to update the camera's matrix
				this.threeScene.controls.update();  // Update the controls to reflect the new camera properties

				requestAnimationFrame(animateZoom);  // Continue the animation
		  } else {
			// Set final zoom state to ensure it's exactly at endZoom
				this.threeScene.camera.zoom = endZoom;
				this.threeScene.camera.updateProjectionMatrix();
				this.threeScene.controls.update();

				if (onComplete && typeof onComplete === 'function') {
			  		onComplete();
				}
		  }
		};

		requestAnimationFrame(animateZoom);  // Start the animation
	}

}

export default PresentUnboxing;
