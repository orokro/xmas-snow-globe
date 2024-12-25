/*
	PullCameraAnimator.js
	---------------------

	This file provides a class that animates the camera around various
	focus points in the scene to build hype during the pull animation.
*/

// three
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';

// main class export
class PullCameraAnimator {

	/**
	 * Constructs the PullCameraAnimator
	 *
	 * @param {THREE.Camera} camera - the camera to animate
	 * @param {THREE.Object3D[]} targets - array of targets to focus on
	 * @param {Number} sweepCount - how many times to sweep the camera
	 * @param {Number} sweepLength - how long each sweep should take in seconds
	 * @param {Number} startScale - how far back to start the camera
	 */
	constructor(camera, targets, sweepCount, sweepLength, startScale) {

		// save our parameters
		this.camera = camera;
		this.targets = targets;
		this.sweepCount = sweepCount;
		this.startScale = startScale;

		// convert seconds to milliseconds while we're at it
		this.sweepLength = sweepLength * 1000;

		// used for animation state
		this.currentSweep = 0;
		this.animating = false;
		this.activeTweens = [];
	}


	/**
	 * Starts the pull animation sequence
	 *
	 * @param {Function} onComplete - the method to call when the animation is complete
	 */
	start(onComplete) {

		// save our callback
		this.onComplete = onComplete;

		// reset our state
		this.currentSweep = 0;
		this.animating = true;

		// this will start a sequence of sweeps
		this.nextSweep();

		// this will animate our tweens on every frame
		this.animate();
	}


	/**
	 * Starts the next sweep of the camera
	 */
	nextSweep() {

		// if we have more sweeps to do
		if (this.currentSweep < this.sweepCount) {

			// pick a random target and child
			const targetIndex = Math.floor(Math.random() * this.targets.length);
			const target = this.targets[targetIndex];
			const childIndex = Math.floor(Math.random() * target.children.length);
			const child = target.children[childIndex];

			// get the world positions of the target and child
			const targetWorldPosition = new THREE.Vector3();
			target.getWorldPosition(targetWorldPosition);
			const childWorldPosition = new THREE.Vector3();
			child.getWorldPosition(childWorldPosition);

			// calculate the direction and start/end positions
			const direction = new THREE.Vector3().subVectors(targetWorldPosition, childWorldPosition);
			const start = new THREE.Vector3().subVectors(targetWorldPosition, direction.multiplyScalar(this.startScale));
			const end = childWorldPosition;

			// set the camera position and look at the target
			this.camera.position.copy(start);
			this.camera.lookAt(targetWorldPosition);
			const initialRotation = this.camera.rotation.clone();

			// create a tween to rotate the camera's roll angle
			const rollAngleMax = 7;
			const rollAngle = Math.random() > 0.5 ? initialRotation.z + THREE.MathUtils.degToRad(rollAngleMax) : initialRotation.z - THREE.MathUtils.degToRad(rollAngleMax);
			const rotationTween = new TWEEN.Tween(this.camera.rotation)
				.to({ z: rollAngle }, this.sweepLength)
				.yoyo(true)
				.repeat(1);

			// create a tween to move the camera to the target
			const positionTween = new TWEEN.Tween(this.camera.position)
				.to({ x: end.x, y: end.y, z: end.z }, this.sweepLength)
				.onComplete(() => {
					this.currentSweep++;
					this.nextSweep();
				});

			// save & start the tweens
			this.activeTweens.push(rotationTween, positionTween);
			rotationTween.start();
			positionTween.start();

		// if we're done
		} else {

			// reset our state
			this.animating = false;
			this.activeTweens = [];
			if (this.onComplete) {
				this.onComplete();
			}
		}
	}


	/**
	 * Recursive frame-by-frame animation method
	 */
	animate() {
		const loop = () => {
			if (this.animating) {
				requestAnimationFrame(loop);
				this.activeTweens.forEach(tween => tween.update());
			}
		};
		loop();
	}
}

export default PullCameraAnimator;
