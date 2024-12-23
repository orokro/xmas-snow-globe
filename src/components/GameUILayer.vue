<!--
	GameUILayer.vue
	---------------

	This file hosts the UI elements for the game play modes.
-->
<template>

	<!-- main layer wrapper -->
	<div class="gameUILayer">

		<!-- if we're not hiding the UI -->
		<div v-show="shouldShowUI">

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

			<!-- our controls panel -->
			<ControlsPanel />

			<!-- gatcha pull button -->
			<GatchaButton :gameState="gameState"/>

		</div>

		<!-- layer that animates for beginning of pull -->
		<GatchaPullOverlay v-if="gameState.doingPull.value" />

	</div>

</template>
<script setup>

// vue
import { ref, onMounted, computed } from 'vue';

// components
import MenuIcon from './MenuIcon.vue';
import CatsMenu from './CatsMenu.vue';
import GatchaMenu from './GatchaMenu.vue';
import GatchaButton from './GatchaButton.vue';
import GatchaPullOverlay from './GatchaPullOverlay.vue';
import ControlsPanel from './ControlsPanel.vue';

// app
import { Game } from '../classes/Game';

// define some props
const props = defineProps({

	// our threeJS scene
	scene: Object,

	// reference to our current game state
	gameState: Object

});


// computed method to see if UI Icons should be on screen
const shouldShowUI = computed(() => {

	const UIIsNotHidden = !props.gameState.hideUI.value;
	const gameModeIsPlaying = props.gameState.mode.value === Game.MODE.PLAYING;

	return UIIsNotHidden && gameModeIsPlaying;
});


/**
 * Toggles the cats menu.
 */
function toggleCatsMenu() {
	props.gameState.showMenu(Game.MENU.CATS);
}


/**
 * Toggles the gatcha menu.
 */
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
