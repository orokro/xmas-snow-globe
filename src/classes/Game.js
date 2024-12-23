/*
	Game.js
	-------

	This is the main file that provides a class for controlling our game.

	This will handle all the state, including the hidden cats & gatcha pulls.
*/

// vue
import { ref, shallowRef, reactive } from 'vue';

// app imports
import ThreeScene from './ThreeScene';
import RaycasterManager from './RaycasterManager';
import ToastManager from './ToastManager';

// import our data
import { cats, gatchaQuotes } from './Data';

// main export
export class Game {

	// some static constants for game state & modes
	static MODE = {
		LOADING: 0,
		UNPACKING: 10,
		PLAYING: 20,
	};

	static MENU = {
		CATS: 0,
		GATCHA: 10,
	};


	/**
	 *
	 * @param {ThreeScene} scene - reference to the ThreeJS scene that was
	 * @param {ToastManager} toastManager - reference to the ToastManager
	 * @param {ModalManager} modalManager - reference to the ModalManager
	 */
	constructor(scene, toastManager, modalManager){

		// save our scene & state managers
		this.scene = scene;
		this.toastManager = toastManager;
		this.modalManager = modalManager;

		// true until scene is ready
		this.mode = ref(Game.MODE.LOADING);

		// arrays of which cats we've & which gatcha quotes we've seen
		this.foundCats = shallowRef([]);
		this.gatchaQuotesSeen = shallowRef([]);

		// true if one of our menus is open
		this.catsMenuOpen = ref(false);
		this.gatchaMenuOpen = ref(false);

		// true when all cats / gatcha quotes have been found
		this.allCatsFound = ref(false);
		this.allGatchaQuotesFound = ref(false);

		// if we get a cat or pull, well show a number on the menu icons
		// based on how many we found since the last time they opened the menu
		this.catsMenuCount = ref(0);
		this.gatchaMenuCount = ref(0);

		// the number of pulls the user has unlocked
		this.gatchaPulls = ref(0);

		// true after we have at least one pull
		this.gatchaUnlocked = ref(false);

		// true when we're doing a gatcha pull & separate variable to hide UI during pull
		this.doingPull = ref(false);
		this.hideUI = ref(false);

		// initialize our game
		this.initGame();

		// wait for our scene to be ready before we start the game
		scene.ifOrWhenSceneIsReady(() => {
			this.beginGame();
		});
	}


	/**
	 * This function will initialize the game and also reset the game if we want to play again.
	 */
	initGame(){

		// copy our raw data & add the "found" property
		this.foundCats.value = cats.map((cat, i) => {
			return {
				...cat,
				id: `cat_${i}`,
				found: false,
			};
		});

		// reset the gatcha quotes
		let quotes = gatchaQuotes.map((quote, i) => {
			return {
				...quote,
				id: `quote_${i}`,
				found: false,
			};
		});

		// scramble the quotes
		quotes = quotes.sort(() => Math.random() - 0.5);
		this.gatchaQuotesSeen.value = quotes;

		// reset these variables to defaults
		this.allCatsFound.value = false;
		this.allGatchaQuotesFound.value = false;
		this.catsMenuCount.value = 0;
		this.gatchaMenuCount.value = 0;
		this.gatchaPulls.value = 0;
		this.gatchaUnlocked.value = false;
		this.doingPull.value = false;
	}


	/**
	 * This function will start the game
	 */
	beginGame(){

		// begin unpacking the snow globe
		this.mode = Game.MODE.UNPACKING;

		//show first modal
		this.modalManager.showModal('Find some hidden kittehs!', 'Hey You!', () => {
			this.mode = Game.MODE.PLAYING;
		});

		// set up a raycaster looking for our cats
		setTimeout(()=>{
			this.buildKittehRaycaster();
		}, 500);
	}


	/**
	 * Build a ray caster that responds to hidden kittehs
	 */
	buildKittehRaycaster(){

		// this will be a new RaycasterManager that will look for our cats
		this.catRaycaster = new RaycasterManager(this.scene);

		// filter the raycaster to only look for cats
		const filter = [
			...this.scene.$('.cat'),
		];
		this.catRaycaster.setFilter(filter);
		// this.catRaycaster.setBaseFilter(this.scene.$('#Ground'));

		// wait for hits on cats
		this.catRaycaster.onHit((hit)=>{

			// our hit object might have userData.name with a #catName,
			// or it might be a child of a cat object
			// so recursively find the cat object's name
			let catObjectName = hit.object.userData.name;
			while(!catObjectName){
				hit.object = hit.object.parent;
				catObjectName = hit.object.userData.name;

				// escape if we have no parent
				if(!hit.object.parent)
					break;
			}// wend

			// if we found a cat, call the findCat function
			if(catObjectName){

				// the name might be a raw string, but it might also look like "#catName .class1 .class2"
				catObjectName = catObjectName.split(' ')[0].replace('#', '').toLowerCase();

				// make sure this is in our list of cats from the imported data
				if(cats.find(cat => cat.object.toLowerCase() === catObjectName))
					this.findCat(catObjectName);
			}
		});

	}

	/**
	 * Shows or toggles one of our game menus
	 *
	 * @param {Number} menu - one of the Game.MENU constants
	 */
	showMenu(menu){

		// if cats menu is open and we're trying to open it again, close it
		if(menu === Game.MENU.CATS && this.catsMenuOpen.value){
			this.catsMenuOpen.value = false;
			return;
		}

		// if gatcha menu is open and we're trying to open it again, close it
		if(menu === Game.MENU.GATCHA && this.gatchaMenuOpen.value){
			this.gatchaMenuOpen.value = false;
			return;
		}

		// if either menu is open, close both
		if(this.catsMenuOpen.value || this.gatchaMenuOpen.value){
			this.catsMenuOpen.value = false;
			this.gatchaMenuOpen.value = false;
		}

		// open the requested menu
		if(menu === Game.MENU.CATS){
			this.catsMenuOpen.value = true;
			this.catsMenuCount.value = 0;
		}
		else if(menu === Game.MENU.GATCHA){
			this.gatchaMenuOpen.value = true;
			this.gatchaMenuCount.value = 0;
		}
	}


	/**
	 * This function will be called when the user clicks on a cat in the scene.
	 *
	 * @param {String} catObjectName - the name of the cat object in the scene
	 */
	findCat(catObjectName){

		// the name might be a raw string, but it might also look like "#catName .class1 .class2"
		// so we need to process it if a hash is present
		catObjectName = catObjectName.split(' ')[0].replace('#', '').toLowerCase();

		// get the list of cats we already have
		const foundCats = this.foundCats.value;

		// find the cat in our list & set it to true
		const foundCat = foundCats.find(cat => cat.object.toLowerCase() === catObjectName);

		// if it was already found, ignore it
		if(foundCat.found)
			return;

		// mark the cat as found
		foundCat.found = true;

		// clear the list & reset it
		this.foundCats.value = [];
		this.foundCats.value = foundCats;

		// check if all cats are found
		this.allCatsFound.value = foundCats.every(cat => cat.found);

		// if the cats menu is closed, increment its bubble counter
		if(this.catsMenuOpen.value === false)
			this.catsMenuCount.value++;

		// in the public folder /assets/sfx/ there's a meow.mp3 file
		// play that sound now
		const audio = new Audio('assets/sfx/meow.mp3');
		audio.play();

		// add pulls based on how many cats we've found
		const totalCatsFound = foundCats.filter(cat => cat.found).length;
		this.gatchaPulls.value += totalCatsFound;

		// gatcha always unlocked if at least one cat found
		this.gatchaUnlocked.value = true;

		// show a toast message
		this.toastManager.showToastMsg(`You found ${foundCat.name} Kitteh!`, `+${totalCatsFound} Gatcha Pulls!`);

		// if we found all the cats, show the modal
		if(this.allCatsFound.value){
			this.modalManager.showModal('You found all the kittehs!', 'Congratulations!');
		}
	}


	/**
	 * Starts gatcha pull animate sequence
	 */
	doPull(){

		// gtfo if no pulls
		if(this.gatchaPulls.value < 1)
			return;

		// if we're already doing a pull, ignore
		if(this.doingPull.value)
			return;

		// decrement the pulls
		// this.gatchaPulls.value--;

		// show the gatcha menu
		this.doingPull.value = true;

		// hide the UI after 1 second
		setTimeout(()=>{
			this.hideUI.value = true;
		}, 1000);

		setTimeout(()=>{
			this.doingPull.value = false;
			this.hideUI.value = false;
		}, 4000);
	}

}
