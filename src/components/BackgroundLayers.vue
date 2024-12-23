<!--
	BackgroundLayers.vue
	--------------------

	This file will provide some background graphics that will fill the screen and live behind the ThreeJS renderer.
	Some of these backgrounds may be animated on and off depending on the state of the game.
-->
<template>

	<!-- main outer-wrapper that will be full screen and hold all our BG layers -->
	<div class="bgLayers">

		<!-- base layer will be a gradient, we'll mix a pattern on later -->
		<div class="gradientLayer"></div>

		<!-- this layer will use CSS-blending mix-modes to blend a texture over the gradient -->
		<div class="imageLayer"></div>

		<!-- gatcha layer - animated fun colors over -->
		<div v-if="
			gameState.doingCapsuleAnimation.value==true || gameState.doingPullCameraAnimation.value"
			class="gatchaLayer"></div>

		<!-- black fade for when we just have the present -->
		<div
			class="blackFade"
			:class="{hide: shouldShowBlackFade == false }"
		></div>
	</div>

</template>
<script setup>

// vue
import { ref, onMounted, computed } from 'vue';

// app
import { Game } from '../classes/Game';

// define some props
const props = defineProps({

	// reference to our current game state
	gameState: Object

});

// computed method to see if we should show the black fade
const shouldShowBlackFade = computed(() => {

	const gameIsLoading = props.gameState.mode.value == Game.MODE.LOADING;
	const gameIsUnpacking = props.gameState.mode.value == Game.MODE.UNPACKING;
	return gameIsLoading || gameIsUnpacking;
});

</script>
<style lang="scss" scoped>

	// main outer layer, that will fill the screen
	.bgLayers {

		// fill screen space, with black bg as default
		position: fixed;
		inset: 0px 0px 0px 0px;

		// black bg
		background: black;


		// the purple gradient
		.gradientLayer {

			// fill parent with purple gradient
			position: absolute;
			inset: 0px 0px 0px 0px;

			// purple gradient
			background: linear-gradient(180deg, #4E2A77 0%, #1A1A3A 100%);

		}// .gradientLayer


		// the Reli xmas themed image layer
		.imageLayer {

			// fill parent with image
			position: absolute;
			inset: 0px 0px 0px 0px;

			// image, with repeat mode one
			background: url('../assets/img/reli_xmas_bg_pattern.png') no-repeat center center;
			background-repeat: repeat;

			// blend mode
			mix-blend-mode: overlay;

		}// .imageLayer

		// the party colors layer gradient
		.gatchaLayer {

			// fill parent with purple gradient
			position: absolute;
			inset: 0px 0px 0px 0px;

			// animate background color
			animation: gatchaColors 1s infinite;
			animation-timing-function: linear;

			// mix to brighten bg
			mix-blend-mode: overlay;

		}// .gatchaLayer

		// keyframes for the gatcha layer
		@keyframes gatchaColors {
			0% {
				background: linear-gradient(180deg, #FF0000 0%, #FF0000 100%);
			}
			25% {
				background: linear-gradient(180deg, #9d00ff 0%, #9d00ff 100%);
			}
			50% {
				background: linear-gradient(180deg, #00FF00 0%, #00FF00 100%);
			}
			75% {
				background: linear-gradient(180deg, #0000FF 0%, #0000FF 100%);
			}
			100% {
				background: linear-gradient(180deg, #2a9717 0%, #2a9717 100%);
			}
		}// @keyframes gatchaColors

		// black fade for when we just have the present
		.blackFade {

			// fill parent with black
			position: absolute;
			inset: 0px 0px 0px 0px;

			// black bg
			background: rgb(29, 29, 29);

			// fade in/out
			transition: opacity 2s;

			// hide by default
			opacity: 1;

			// show when we're unpacking
			&.hide {
				opacity: 0;
			}

		}// .blackFade

	}// .bgLayers

</style>
