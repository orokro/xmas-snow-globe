/*
	PullCameraAnimator.js
	---------------------

	This file provides a class that animates the camera around various
	focus points in the scene to build hype during the pull animation.
*/

// three
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

// main class
class PullCameraAnimator {

	/**
	 * A class to handle the animation of the camera during the pull sequence
	 *
	 * @param {THREE.Camera} camera - Camera to animate for the pull
	 * @param {THREE.Object3D[]} targets - array of targets to randomly focus on
	 * @param {Number} minDistance - closest camera should get to target
	 * @param {Number} maxDistance - maximum distance camera should start from target
	 * @param {Number} sweepDuration - length in seconds for each sweep
	 */
	constructor(camera, targets, minDistance, maxDistance, sweepDuration) {

		// save our prams
		this.camera = camera;
		this.targets = targets;
		this.minDistance = minDistance;
		this.maxDistance = maxDistance;
		this.sweepDuration = sweepDuration * 1000;

		// set up our state
		this.currentSweep = 0;
		this.animating = false;
		this.onComplete = null;
	}


	/**
	 * Starts the animation sequence
	 *
	 * @param {Function} onComplete - method to call when the animation is complete
	 */
	start(onComplete) {

		// save our callback for when we're finished
		this.onComplete = onComplete;

		// reset the sweep count & set our animation flag to true
		this.currentSweep = 0;
		this.animating = true;

		// start the first of 3 sweeps
		this.animateNextSweep();

		// recursively animate the tweens until they're done
		this.animate();
	}


	/**
	 * Animates the next sweep of the camera
	 */
	animateNextSweep() {

		// if we have more sweeps to do, do the next one
		if (this.currentSweep < 3) {

			// increment the sweep count & perform the sweep
			this.currentSweep++;
			this.performSweep(() => {

				// when the sweep is done, animate the next one
				this.animateNextSweep();
			});

		} else {

			// if we're done, set our flag & call the onComplete method
			this.animating = false;
			if (typeof this.onComplete === 'function') {
				this.onComplete();
			}
		}
	}


	/**
	 * Performs a single sweep of the camera
	 *
	 * @param {Function} callback - method to call when the sweep is complete
	 */
	performSweep(callback) {

		// pick a random target from our list of targets to sweep around
		const target = this.targets[Math.floor(Math.random() * this.targets.length)];
		const sphericalCoords = new THREE.Spherical(
			this.maxDistance,
			Math.random() * Math.PI, // random polar angle from 0 to π
			Math.random() * 2 * Math.PI // random azimuthal angle from 0 to 2π
		);

		// pick random position around the target & look the the target
		const position = new THREE.Vector3().setFromSpherical(sphericalCoords).add(target.position);
		this.camera.position.copy(position);
		this.camera.lookAt(target.position);

		// build a tween to move the camera
		this.tweenCamera = new TWEEN.Tween(this.camera.position)
			.to({
				x: target.position.x + (this.camera.position.x - target.position.x) * this.minDistance / this.maxDistance,
				y: target.position.y + (this.camera.position.y - target.position.y) * this.minDistance / this.maxDistance,
				z: target.position.z + (this.camera.position.z - target.position.z) * this.minDistance / this.maxDistance
			}, this.sweepDuration)
			.easing(TWEEN.Easing.Quadratic.InOut)
			.onUpdate(() => this.camera.lookAt(target.position))
			.onComplete(callback);

		// build a sweet to rotate the camera
		const initialRoll = this.camera.rotation.z;
		this.tweenRoll = new TWEEN.Tween(this.camera.rotation)
			.to({ z: initialRoll + Math.PI / 12 }, this.sweepDuration) // slight roll
			.easing(TWEEN.Easing.Quadratic.InOut);

		// start the tweens
		this.tweenCamera.start();
		this.tweenRoll.start();
	}


	/**
	 * Recursive animation method
	 */
	animate() {
		if (this.animating) {

			if(this.tweenCamera && this.tweenRoll) {

				this.tweenCamera.update();
				this.tweenRoll.update();
			}

			requestAnimationFrame(this.animate.bind(this));
		}
	}
}

export default PullCameraAnimator;

