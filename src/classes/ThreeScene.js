/*
	ThreeScene.js
	-------------

	This file provides the class that will build & manage the Three.js scene.

	This will be instantiated in our main App.vue component & passed to the
	various sub components that need reference to our scene.
*/

// threeJS imports
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// import our custom particle system, aww yiss
import { SnowGlobeParticleSystem } from './SnowGlobeParticleSystem.js';

// make ThreeJS Scene class
export default class ThreeScene {

	/**
	 * Constructs a new ThreeScene object
	 */
	constructor() {

		// this will be set true once the scene is completely ready (it's an async process)
		this.isReady = false;

		// while we're waiting for the scene to be ready, some listeners might be waiting
		// we'll add their callback fns here
		this.readyListeners = [];

		// after we build our scene and imported the GLB/GLTF scene, we'll loop over it's children
		// looking for ones with names that include #<id> or .<class> and store them in these objects
		this.sceneObjectsByID = new Map();
		this.sceneObjectsByClass = new Map();

		// which camera to use
		this.cameraToUse = null;

		// build our ThreeJS scene (this is async b/c stuffs have to load)
		this.buildThreeScene();

		// start the animation loop
		this.animate();

	}


	/**
	 * All the logic specifically for making our ThreeJS scene will live in here
	 *
	 * The rest of this class will be used for tweaking / updating / interacting with the scene, etc.
	 */
	async buildThreeScene() {

		// make a new scene & renderer
		this.scene = new THREE.Scene();
		this.renderer = new THREE.WebGLRenderer({ alpha: true });
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		this.renderer.setClearColor(0x000000, 0); // Set clear color to black with 0 alpha

		// make our main camera
		this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		const initialZoomScale = 0.75;
		this.camera.position.z = 10 * initialZoomScale;
		this.camera.position.y = 7 * initialZoomScale;

		// initial camera to use
		this.cameraToUse = this.camera;

		// make a camera used for the pull animation zoomin'
		this.pullCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.pullCamera.position.z = 10;
		this.pullCamera.position.y = 7;

		// make a camera used specifically for the capsule opening animation
		this.capsuleCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
		this.capsuleCamera.position.z = 5;
		this.capsuleCamera.position.y = 0;

		// make a new OrbitControls
		this.controls = new OrbitControls(this.camera, this.renderer.domElement);

		// set orbit rotation to default of 40 degrees on x axis
		this.controls.target.set(0, 0, 0);
		this.controls.update();


		// let's wait for the reflection map to load
		await this.loadReflectionMap();

		// let's load our scene files
		await this.loadSceneAssets();

		// loop over the children of the GLTF scene and store them in our sceneObjectsByID & sceneObjectsByClass
		this.parseSceneObjects();

		// once we've loaded our GLB/GLTF scene, we need to manually update some of the materials
		// to use the reflection map
		this.applyMaterialTweaks();

		// set up the lights in our scene
		this.setUpLights();

		// set our our custom snow particle system
		this.buildParticleSystem();

		// now that scene is entirely built, mark it as ready
		this.setSceneReady();
	}


	/**
	 * Loads our environment reflection map texture
	 *
	 * @param {string} reflectionMapName - [OPTIONAL] the name of the reflection map to load
	 */
	async loadReflectionMap(reflectionMapName='venice_sunset_1k.hdr'){

		// make a new RGBELoader
		const rgbeLoader = new RGBELoader();

		// load the HDR reflection map
		this.reflectionMap = await new Promise((resolve, reject) => {
			rgbeLoader.load(`assets/hdr/${reflectionMapName}`, resolve, undefined, reject);
		});

		// set the texture mapping so it can be sued as a reflection map
		this.reflectionMap.mapping = THREE.EquirectangularReflectionMapping;

		// set the reflection map on the scene
		this.scene.environment = this.reflectionMap;
	}


	/**
	 * Loads the assets for our scene, which mostly should be entirely in one GLB/GLTF file from Blender
	 */
	async loadSceneAssets(){

		// make a new GLTFLoader
		const gltfLoader = new GLTFLoader();

		// load the GLTF scene
		this.gltfScene = await new Promise((resolve, reject) => {
			gltfLoader.load('assets/models/snow_globe_scene.glb', resolve, undefined, reject);
		});

		// add the GLTF scene to our main scene
		this.scene.add(this.gltfScene.scene);
	}


	/**
	 * Builds our custom particle system for the snow globe
	 */
	buildParticleSystem(){

		// get the globe glass object, because we'll use it's center to place the particle system
		const globeGlass = this.$('#GlobeGlass');

		// get the center of the globe glass, in world space
		const globeGlassCenter = new THREE.Vector3();
		globeGlass.getWorldPosition(globeGlassCenter);

		// we should also measure the radius of the globe glass, so we can place the particle system inside it
		const globeGlassSize = new THREE.Box3().setFromObject(globeGlass);
		const globeGlassRadius = globeGlassSize.getSize(new THREE.Vector3()).length() / 3.5;

		// make a new particle system
		const particleCount = 2000;
		this.particleSystem = new SnowGlobeParticleSystem(particleCount, globeGlassRadius, this.camera, this.controls);

		// add the particle system to the scene
		this.scene.add(this.particleSystem);

		// move the particle system to the center of the globe glass
		this.particleSystem.position.copy(globeGlassCenter);
	}


	/**
	 * Loops over the children of the GLTF scene and stores them in our sceneObjectsByID & sceneObjectsByClass
	 */
	parseSceneObjects(){

		/**
		 * Little helper function to recursively parse the scene objects
		 *
		 * @param {THREE.Object3D} sceneObject - object to walk over for children
		 */
		const parseSceneObjects = sceneObject => {

			// loop over the children of the scene object
			sceneObject.children.forEach(child => {

				// a name could have both an ID and a class, like "#foo .class1 .class2"
				const nameToSplit = child.userData.name ? child.userData.name : child.name;
				const nameParts = nameToSplit.split(' ');

				// loop over the name parts
				nameParts.forEach(namePart => {

					// if it starts with a #, it's an ID
					if(namePart.startsWith('#')){
						const id = namePart.substring(1);
						this.sceneObjectsByID.set(id, child);
					}

					// if it starts with a ., it's a class
					else if(namePart.startsWith('.')){
						const className = namePart.substring(1);
						if(!this.sceneObjectsByClass.has(className)){
							this.sceneObjectsByClass.set(className, []);
						}
						this.sceneObjectsByClass.get(className).push(child);
					}
				});

				// recurse on the child
				parseSceneObjects(child);

			});

		};

		// start the recursion
		parseSceneObjects(this.gltfScene.scene);
	}


	/**
	 * Applies some tweaks to specific materials in our scene
	 */
	applyMaterialTweaks(){

		// set the reflection map on the globe base material
		const globeBaseMaterial = this.$('#GlobeBase').children[0].material;
		globeBaseMaterial.envMap = this.reflectionMap;
		globeBaseMaterial.envMapIntensity = 1.0;
		globeBaseMaterial.roughness = 0.2;
		globeBaseMaterial.needsUpdate = true;

		// get the dark interior of the gatcha hole
		const gatchaHoleMaterial = this.$('#GlobeBase').children[1].material;
		gatchaHoleMaterial.envMap = null;
		gatchaHoleMaterial.roughness = 10;
		gatchaHoleMaterial.envMapIntensity = 0;

		// get the glass material of the globe
		const globeGlassMaterial = this.$('#GlobeGlass').material;
		globeGlassMaterial.envMap = this.reflectionMap;
		globeGlassMaterial.envMapIntensity = 20.0;
		const colorWhite = 0.05;
		globeGlassMaterial.color.r = colorWhite;
		globeGlassMaterial.color.g = colorWhite;
		globeGlassMaterial.color.b = colorWhite;
		globeGlassMaterial.roughness = 0.0;
		globeGlassMaterial.needsUpdate = true;

		// get the windshield material
		const windshieldMaterial = this.$('#WindShield').material;
		windshieldMaterial.roughness = 0.0;
		windshieldMaterial.envMapIntensity = 1.0;
		windshieldMaterial.opacity = 0.5;

		this.render();
	}


	/**
	 * Helper method to get a scene object by ID or class
	 *
	 * @param {string} selector - a string that has either '#<id>' or '.<class>'
	 * @returns {THREE.Object3D|null} - the object with our sceneObjectsByID or sceneObjectsByClass maps
	 */
	$(selector){

		// take a string that has either '#<id>' or '.<class>' and use it to find the object
		// with our sceneObjectsByID or sceneObjectsByClass maps
		if(selector.startsWith('#')){
			const id = selector.substring(1);
			return this.sceneObjectsByID.get(id);
		}
		else if(selector.startsWith('.')){
			const className = selector.substring(1);
			return this.sceneObjectsByClass.get(className);
		}
		else{
			return null;
		}
	}



	/**
	 * Sets up the lights in our scene
	 */
	setUpLights(){

		// make a new ambient light
		const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
		this.scene.add(ambientLight);

	}


	/**
	 * Function for debug, to print out all the ids and class names we found in the scene
	 * (this is just for debugging, not used in the actual app)
	 *
	 * @param {boolean} [printObject=false] - whether to print the object itself
	 */
	printObjects(printObject=false){

		console.log('Objects by ID:');
		this.sceneObjectsByID.forEach((value, key) => {
			if(printObject==false)
				console.log(`#${key}`);
			else
				console.log(`#${key}`, value);
		});

		console.log('Objects by Class:');
		this.sceneObjectsByClass.forEach((value, key) => {
			if(printObject==false)
				console.log(`.${key}`);
			else
				console.log(`.${key}`, value);
		});
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

		// this depends on the renderer being ready, so we'll wait for that
		this.ifOrWhenSceneIsReady(() => {

			// save reference to the container element
			this.renderContainer = targetEl;

			// mount the scene to a specific DOM element
			targetEl.appendChild(this.renderer.domElement);

			// build a resize observer to resize the renderer when the window is resized
			this.buildResizeObserver(targetEl);
		});
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

				 // update our other two cameras
				this.pullCamera.aspect = cr.width / cr.height;
				this.pullCamera.updateProjectionMatrix();
				this.capsuleCamera.aspect = cr.width / cr.height;
				this.capsuleCamera.updateProjectionMatrix();
			}
		});

		// observe the target element
		this.resizeObserver.observe(targetEl);
	}


	/**
	 * Either runs the FN immediately if scene is already ready, or will do so when it is ready
	 *
	 * @param {Function} doFN - call back function to run when the scene is ready
	 */
	ifOrWhenSceneIsReady(doFN){

		// if the scene is ready, just call the function
		if(this.isReady){
			doFN();
		}

		// otherwise, add the function to the readyListeners array
		else{
			this.readyListeners.push(doFN);
		}
	}


	/**
	 * This method will be called when the scene is ready.
	 *
	 * It will mark the scene as ready, and then call all the functions in the readyListeners
	 */
	setSceneReady(){

		// mark the scene as ready
		this.isReady = true;

		// call all the functions in the readyListeners array
		this.readyListeners.forEach(fn => fn());
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
		if(this.particleSystem)
			this.particleSystem.update();
		this.render();
	}

	setCamera(camera){
		this.cameraToUse = camera;
	}


	/**
	 * This method will render our scene.
	 *
	 * It's called when we want to render the scene, but not animate it.
	 */
	render(){
		this.renderer.render(this.scene, this.cameraToUse);
	}

}
