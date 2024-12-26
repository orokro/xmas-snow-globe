/*
	CapsuleAnimator.js
	------------------

	This file provides a class that handles the complex animation of a capsule object.
*/

// three & third party libs
import * as THREE from 'three';
import chroma from 'chroma-js';
import TWEEN from '@tweenjs/tween.js';

// app
import ThreeScene from './ThreeScene';

// main class
class CapsuleAnimator {

	/**
	 * Constructs the CapsuleAnimator
	 *
	 * @param {THREE.Object3D} objects - the object to animate
	 * @param {ThreeScene} threeScene - the scene to animate in
	 * @param {Function} onComplete - the method to call when the animation is complete
	 */
	constructor(objects, threeScene, onComplete) {

		// save our threeJS scene
		this.threeScene = threeScene;

		// save the parts of the capsule (because threeJS makes a mesh for each material)
		this.objects = objects;

		// save our callback for when animation is complete
		this.onComplete = onComplete;

		// create a clock to manage our timing
		this.clock = new THREE.Clock(false);

		// the timing and durations for all our shape keys (morph targets)
		this.animations = [
			{ key: 'Shrink', from: 1, to: 0, start: 0, duration: 0.5 },
			{ key: 'Move_Up', from: 0, to: 1, start: 0.5, duration: 0.3 },
			{ key: 'Open', from: 0, to: 1.05, start: 0.8, duration: 0.3 },
			{ key: 'Unfold_AY', from: 0, to: 1, start: 1.1, duration: 0.20, easing: 'inOut' },
			{ key: 'Unfold_AY', from: 1, to: 0, start: 1.30, duration: 0.20, easing: 'inOut' },
			{ key: 'Unfold_AX', from: 0, to: 1, start: 1.1, duration: 0.4 },
			{ key: 'Unfold_BY', from: 0, to: 1, start: 1.5, duration: 0.20, easing: 'inOut' },
			{ key: 'Unfold_BY', from: 1, to: 0, start: 1.7, duration: 0.20, easing: 'inOut' },
			{ key: 'Unfold_BZ', from: 0, to: 1, start: 1.5, duration: 0.4 },
			{ key: 'Center_Paper', from: 0, to: 1.5, start: 1.1, duration: 0.8 }
		];

		// Total time from start to finish of all animations
		this.totalDuration = 1.8;
	}


	/**
	 * Recursive frame-by-frame animation method
	 */
	animate() {

		// don't recurse if we're done
		const elapsedTime = this.clock.getElapsedTime();
		if (elapsedTime > this.totalDuration) {


			// apply final morph target values
			this.setMorpthTargetValue('Shrink', 0);
			// this.setMorpthTargetValue('Move_Up', 0.9);
			// this.setMorpthTargetValue('Open', 1);
			this.setMorpthTargetValue('Unfold_AY', 0);
			this.setMorpthTargetValue('Unfold_AX', 1);
			this.setMorpthTargetValue('Unfold_BY', 0.6);
			this.setMorpthTargetValue('Unfold_BZ', 0.7);
			this.setMorpthTargetValue('Center_Paper', 1.35);

			this.onComplete();
			this.clock.stop();
			return;
		}

		// loop over the list of simultaneous animations & handle each with our global time
		this.animations.forEach(anim => {
			this.applyAnimation(anim, elapsedTime);
		});

		requestAnimationFrame(this.animate.bind(this));
	}


	setMorpthTargetValue(key, value) {

		this.objects.forEach(obj => {
			if (obj.morphTargetDictionary && obj.morphTargetDictionary[key] !== undefined) {
				obj.morphTargetInfluences[obj.morphTargetDictionary[key]] = value;
			}
		});
	}

	/**
	 * Applies the animation to the objects
	 *
	 * @param {Object} anim - the animation object
	 * @param {Number} elapsedTime - the current time
	 */
	applyAnimation(anim, elapsedTime) {

		// calculate the time into the animation
		const timeIntoAnimation = elapsedTime - anim.start;

		// if we're in the animation window, apply the animation
		if (timeIntoAnimation >= 0 && timeIntoAnimation <= anim.duration) {

			// calculate the progress & ease it if needed
			const progress = timeIntoAnimation / anim.duration;
			const easedProgress = anim.easing === 'inOut' ? THREE.MathUtils.smoothstep(progress, 0, 1) : progress;
			const value = THREE.MathUtils.lerp(anim.from, anim.to, easedProgress);

			// Apply the morph target value across all objects that contain it
			this.objects.forEach(obj => {
				if (obj.morphTargetDictionary && obj.morphTargetDictionary[anim.key] !== undefined) {
					obj.morphTargetInfluences[obj.morphTargetDictionary[anim.key]] = value;
				}
			});
		}
	}


	/**
	 * Kick off the opening animation
	 */
	start(onComplete=null) {

		this.onComplete = onComplete || this.onComplete;

		// randomly color the capsule's second material (the opaque one),
		// using chromajs to get a 75% saturated color, any hue, and a lightness of 50%
		const randomColor = chroma.hsl(Math.random() * 360, 0.75, 0.5).hex();
		this.objects[1].material.color.set(randomColor);

		// zoom camera out while we open the capsule
		this.zoomOut(2);

		this.clock.start();
		requestAnimationFrame(this.animate.bind(this));
	}


	/**
	 * Resets the animations to their initial state
	 */
	resetAnimations() {

		// Set the initial values for each animation
		this.animations.forEach(anim => {

			const targetValue = anim.key === 'Shrink' ? 1 : 0;

			this.objects.forEach(obj => {
				if (obj.morphTargetDictionary && obj.morphTargetDictionary[anim.key] !== undefined) {
					obj.morphTargetInfluences[obj.morphTargetDictionary[anim.key]] = targetValue;
				}
			});
		});

	}


	/**
	 * Zooms the camera out from the capsule
	 *
	 * @param {Number} duration - the duration of the zoom out in seconds
	 */
	zoomOut(duration) {

		// Check if the end position is defined, if not, initialize it
		if (!this.capsuleCameraEndPos) {
			this.capsuleCameraEndPos = this.threeScene.capsuleCamera.position.clone();
		}

		// Calculate the start position if not defined (1 meter in front of the end position)
		if (!this.capsuleCameraStartPos) {

			// Adjust this vector if you need a different front direction
			this.capsuleCameraStartPos = this.capsuleCameraEndPos.clone().add(new THREE.Vector3(0, 0, 1));
		}

		// Randomly determine the roll direction: +7 or -7 degrees in radians
		const rollDirection = Math.random() < 0.5 ? -1 : 1;
		const startRoll = rollDirection * (7 * Math.PI / 180);
		const endRoll = 0;

		// Set initial position and rotation
		this.threeScene.capsuleCamera.position.copy(this.capsuleCameraStartPos);
		this.threeScene.capsuleCamera.rotation.z = startRoll;

		// Create a TWEEN for moving and rolling the camera
		const zoomTween = new TWEEN.Tween(
			{
				zr: startRoll,
				x: this.capsuleCameraStartPos.x,
				y: this.capsuleCameraStartPos.y,
				z: this.capsuleCameraStartPos.z
			})
			.to({
				zr: endRoll,
				x: this.capsuleCameraEndPos.x,
				y: this.capsuleCameraEndPos.y,
				z: this.capsuleCameraEndPos.z
			}, duration * 1000)
			.onUpdate((obj) => {
				this.threeScene.capsuleCamera.position.set(obj.x, obj.y, obj.z);
				this.threeScene.capsuleCamera.rotation.z = obj.zr;
			})
			.easing(TWEEN.Easing.Cubic.Out) // This can be changed to any easing function
			.start();

		// Start the animation loop
		const animate = () => {
			requestAnimationFrame(animate);
			zoomTween.update();
		};

		animate();
	}

}

export default CapsuleAnimator;
