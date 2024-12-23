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

	</div>

</template>
<script setup>

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

	}// .bgLayers

</style>
