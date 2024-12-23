<!--
	GameUILayer.vue
	---------------

	This file hosts the UI elements for the game play modes.
-->
<template>

	<!-- main layer wrapper -->
	<div class="gameUILayer">

		<!-- our two menus -->
		<CatsMenu
			:isOpen="gameState.catsMenuOpen.value"
			:gameState="gameState"
		/>
		<GatchaMenu
			:isOpen="gameState.gatchaMenuOpen.value"
			:gameState="gameState"
		/>

		<!-- our two icons  -->
		<MenuIcon
			:icon="`cat_menu_icon`"
			:left="30"
			:notificationCount="gameState.catsMenuCount.value"
			@click="toggleCatsMenu"
		/>
		<MenuIcon
			:icon="`gatcha_menu_icon`"
			:left="130"
			:notificationCount="gameState.gatchaMenuCount.value"
			@click="toggleGatchaMenu"
		/>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// components
import MenuIcon from './MenuIcon.vue';
import CatsMenu from './CatsMenu.vue';
import GatchaMenu from './GatchaMenu.vue';

// app
import { Game } from '../classes/Game';

// define some props
const props = defineProps({

	// our threeJS scene
	scene: Object,

	// reference to our current game state
	gameState: Object

});


function toggleCatsMenu() {
	props.gameState.showMenu(Game.MENU.CATS);
}

function toggleGatchaMenu() {
	props.gameState.showMenu(Game.MENU.GATCHA);
}

</script>
<style lang="scss" scoped>

	// fill screen space
	.gameUILayer {

		// fill screen space
		position: fixed;
		inset: 0px 0px 0px 0px;

		// don't allow pointer events for the main layer
		pointer-events: none;

		// but allow them for children
		& > * {
			pointer-events: initial;
		}

	}// .gameUILayer

</style>
