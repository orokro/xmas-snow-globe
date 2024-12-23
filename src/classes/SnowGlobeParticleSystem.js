/*
	SnowGlobeParticleSystem.js
	--------------------------

	This file provides a class that extends the ThreeJS Object3D class.

	This class will be our particle for the snow globe.
*/

// ThreeJS Imports
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// main export
export class SnowGlobeParticleSystem extends THREE.Object3D {

	/**
	 * Builds our snow globe particle system
	 *
	 * @param {Number} particleCount - how many particles to create & simulate
	 * @param {Number} radius - radius of the snow globe
	 * @param {THREE.Camera} camera - the camera to follow for shaking simulation
	 * @param {OrbitControls} controls - the controls to listen to for shaking simulation
	 */
	constructor(particleCount, radius, camera, controls) {

		// always call this when extending
		super();

		// save our initial values
		this.particleCount = particleCount;
		this.radius = radius;
		this.camera = camera;
		this.controls = controls;

		// create a group to hold our particles
		this.particles = new THREE.Group();

		// initialize the particles & add them to our base object
		this.initParticles();
		this.add(this.particles);

		// React to control changes to simulate shaking
		this.previousCameraPosition = new THREE.Vector3().copy(camera.position);
		controls.addEventListener('change', this.onControlsChange.bind(this));
	}


	/**
	 * Initializes the particles in the snow globe
	 */
	initParticles() {

		// create a new buffer geometry to hold our particles
		const geometry = new THREE.BufferGeometry();

		// create arrays to hold our positions & velocities
		const positions = [];
		const velocity = [];

		// loop to spawn particles
		for (let i = 0; i < this.particleCount; i++) {

			// create a random vertex
			const vertex = new THREE.Vector3(
				(Math.random() * 2 - 1) * this.radius,
				(Math.random() * 2 - 1) * this.radius,
				(Math.random() * 2 - 1) * this.radius
			);

			// if the vertex is outside the radius, normalize it
			if (vertex.length() > this.radius) {
				vertex.normalize().multiplyScalar(this.radius);
			}

			// save position & a random initial velocity
			positions.push(vertex.x, vertex.y, vertex.z);
			velocity.push((Math.random() - 0.5) * 0.1, -Math.random() * 0.02, (Math.random() - 0.5) * 0.1);

			// TODO: get rid of the initial velocity and use fixed random X/Z positions instead
			// then we'll start with (0, 0, 0) for initial velocity
			// velocity.push(0, 0, 0);
		}

		// set the position & velocity attributes
		geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
		geometry.setAttribute('velocity', new THREE.Float32BufferAttribute(velocity, 3));

		// create a new points material & system
		const material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.03 });
		this.particleSystem = new THREE.Points(geometry, material);
		this.particles.add(this.particleSystem);

		// do initial shake
		this.stirUpParticles(0.1);
	}


	/**
	 * Reacts to control changes to simulate shaking
	 */
	onControlsChange() {

		// calculate the change in camera position
		const delta = this.camera.position.clone().sub(this.previousCameraPosition);

		// calculate the intensity of the shake
		const intensity = delta.length() * 0.05;
		this.stirUpParticles(intensity);

		// save for next time
		this.previousCameraPosition.copy(this.camera.position);
	}


	/**
	 * Stirs up the particles with a given intensity
	 *
	 * @param {Number} intensity - how much to stir up the particles
	 */
	stirUpParticles(intensity) {

		const positions = this.particleSystem.geometry.attributes.position;
		const velocities = this.particleSystem.geometry.attributes.velocity;

		for (let i = 0; i < positions.count; i++) {

			// apply intensity to Y with a random factor
			velocities.setY(i, velocities.getY(i) + intensity * (Math.random() - 0.5));

			// apply random X and Z
			velocities.setX(i, velocities.getX(i) + (Math.random() - 0.5) * 0.001);
			velocities.setZ(i, velocities.getZ(i) + (Math.random() - 0.5) * 0.001);

			// cap max velocity
			if (velocities.getY(i) > 0.1) {
				velocities.setY(i, 0.1);
			}

			// TODO: better particle coverage
			// if a particle is near the edge, push it back in by a random amount
			// const x = positions.getX(i);
			// const y = positions.getY(i);
			// const z = positions.getZ(i);
			// const vertex = new THREE.Vector3(x, y, z);
			// if (vertex.length() > this.radius*0.5) {

			// 	// scale it in with some random factor
			// 	const scale = Math.random() * 0.8;
			// 	vertex.normalize().multiplyScalar(this.radius * (1 - scale));
			// 	positions.setXYZ(i, vertex.x, vertex.y, vertex.z);
			// }
		}

		velocities.needsUpdate = true;
	}


	/**
	 * Updates the particles
	 */
	update() {

		// loop through all particles
		const positions = this.particleSystem.geometry.attributes.position;
		const velocities = this.particleSystem.geometry.attributes.velocity;
		for (let i = 0; i < this.particleCount; i++) {

			const x = positions.getX(i);
			const y = positions.getY(i);
			const z = positions.getZ(i);
			const velocity = new THREE.Vector3(velocities.getX(i), velocities.getY(i), velocities.getZ(i));

			let newPos = new THREE.Vector3(x, y, z).add(velocity);
			if (newPos.length() > this.radius) {
				newPos.normalize().multiplyScalar(this.radius);
			}

			positions.setXYZ(i, newPos.x, newPos.y, newPos.z);

			// if the particle is below the ground, bounce it back up
			const bottomLimit = -this.radius*0.995;
			if (newPos.y < bottomLimit) {
				velocities.setY(i, 0);
				newPos.setY(bottomLimit);
			}else{
				// apply some gravity
				velocities.setY(i, velocities.getY(i) - 0.00005);
			}
		}

		positions.needsUpdate = true;
	}

}
