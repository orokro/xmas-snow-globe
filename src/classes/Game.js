/*
	Game.js
	-------

	This is the main file that provides a class for controlling our game.

	This will handle all the state, including the hidden cats & gatcha pulls.
*/

// vue
import { ref, shallowRef, reactive } from 'vue';
import ThreeScene from './ThreeScene';

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
	 */
	constructor(scene){

		// save our scene
		this.scene = scene;

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
		this.gatchaQuotesSeen.value = gatchaQuotes.map((quote, i) => {
			return {
				...quote,
				id: `quote_${i}`,
				found: false,
			};
		});

		this.foundCats.value[2].found = true;
	}


	/**
	 * This function will start the game
	 */
	beginGame(){

		// begin unpacking the snow globe
		this.mode = Game.MODE.UNPACKING;

		// for debug
		console.log('game begin', this);
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
		}
		else if(menu === Game.MENU.GATCHA){
			this.gatchaMenuOpen.value = true;
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
		foundCat.found = true;

		// clear the list & reset it
		this.foundCats.value = [];
		this.foundCats.value = foundCats;

		// check if all cats are found
		this.allCatsFound.value = foundCats.every(cat => cat.found);
	}

}
