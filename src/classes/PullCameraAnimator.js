/*
	PullCameraAnimator.js
	---------------------

	This file provides a class that animates the camera around various
	focus points in the scene to build hype during the pull animation.
*/

// three
import * as THREE from 'three';

class PullCameraAnimator {
	constructor(camera, objects, minRadius, maxRadius, onComplete) {
		this.camera = camera;
		this.objects = objects;
		this.minRadius = minRadius;
		this.maxRadius = maxRadius;
		this.onComplete = onComplete;
		this.currentTargetIndex = 0;
		this.duration = 1000; // animation duration in milliseconds
		this.multiAxisRotation = false; // boolean to control multi-axis rotation
		this.clock = new THREE.Clock();
		this.isAnimating = false;
	}

	start(onComplete=null) {

		this.onComplete = onComplete || this.onComplete;

		this.isAnimating = true;
		this.clock.start();
		this.animateNext();
	}

	animateNext() {
		if (this.currentTargetIndex >= 3) {
			this.onComplete();
			this.currentTargetIndex = 0;
			return;
		}

		const object = this.pickRandomObject();
		const targetPosition = new THREE.Vector3();
		object.getWorldPosition(targetPosition);

		// Randomly place the camera on a sphere at maxRadius
		const phi = THREE.MathUtils.degToRad(THREE.MathUtils.randFloat(0, 360));
		const theta = THREE.MathUtils.degToRad(THREE.MathUtils.randFloat(-90, 90));
		const randomPosition = new THREE.Vector3().setFromSphericalCoords(this.maxRadius, phi, theta).add(targetPosition);

		this.camera.position.copy(randomPosition);
		this.camera.lookAt(targetPosition);

		const initialQuaternion = this.camera.quaternion.clone();
		const targetQuaternion = new THREE.Quaternion();
		targetQuaternion.setFromAxisAngle(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(THREE.MathUtils.randFloat(-30, 30)));
		targetQuaternion.multiply(initialQuaternion);

		// Animate
		let elapsed = 0;
		const update = () => {
			if (!this.isAnimating) return;

			const delta = this.clock.getDelta();
			elapsed += delta * 1000;
			const t = elapsed / this.duration;

			// Interpolate position and rotation
			const radius = THREE.MathUtils.lerp(this.maxRadius, this.minRadius, t);
			this.camera.position.lerpVectors(randomPosition, targetPosition.clone().add(targetPosition.clone().sub(randomPosition).normalize().multiplyScalar(radius)), t);
			this.camera.quaternion.slerp(targetQuaternion, t);
			this.camera.lookAt(targetPosition);

			if (t < 1) {
				requestAnimationFrame(update);
			} else {
				this.currentTargetIndex++;
				this.animateNext();
			}
		};
		update();
	}

	pickRandomObject() {
		return this.objects[Math.floor(Math.random() * this.objects.length)];
	}
}

export default PullCameraAnimator;
