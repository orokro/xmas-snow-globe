<!--
	GatchaPullOverlay.vue
	---------------------

	This component will provide some animated elements when a pull is initiated.
-->
<template>

	<!-- this box we'll populate with four "curtains" that spell "P U L L" and animate Reli flying -->
	<div
		class="gatchaPullOverlay"
		:class="{
			'horizontal': stage === STAGE.HORIZONTAL,
			'vertical': stage === STAGE.VERTICAL
		}"
	>

		<!-- curtain 1 -->
		<div class="curtain curtain1">
			<div class="letter">P</div>
		</div>

		<!-- curtain 2 -->
		<div class="curtain curtain2">
			<div class="letter">U</div>
		</div>

		<!-- curtain 3 -->
		<div class="curtain curtain3">
			<div class="letter">L</div>
		</div>

		<!-- curtain 4 -->
		<div class="curtain curtain4">
			<div class="letter">L</div>
		</div>
		<!-- curtain 5 -->
		<div class="curtain curtain5">
			<div class="letter">!</div>
		</div>

		<!-- Reli -->
		<div class="reli">
			<img src="../assets/img/reli_ship.png" alt="Reli" />
		</div>

	</div>
</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// useful constants for our various stages
const STAGE = {
	START: 0,
	HORIZONTAL: 1,
	VERTICAL: 2,
	END: 3
};

// variable for the stages of the curtain animation
const stage = ref(STAGE.START);

// after we mount, immediately kick off the next stage
onMounted(() => {


	// after a short delay, move to the horizontal stage
	setTimeout(() => {
		stage.value = STAGE.HORIZONTAL;
	}, 1);

	// horizontal animation takes 1 second, so start the vertical stage after that
	setTimeout(() => {
		stage.value = STAGE.VERTICAL;
	}, 1400);

});

</script>
<style lang="scss" scoped>

	// rotated box with the P U L L curtains
	.gatchaPullOverlay {

		// always on top
		z-index: 1000;

		// fill screen
		position: fixed;
		inset: -100px -100px -100px -100px;

		// rotate a bit
		transform: rotate(-5deg);

		// the pull curtains
		.curtain {

			// take up 1/5th of the screen horizontally
			width: 20%;
			height: 100%;
			position: absolute;

			// animate in from left
			transition: left 1.3s ease-in-out, top 1s;

			background: rgba(30, 170, 180, 1);

			&:nth-child(odd) {
				background: rgb(6, 149, 159);
			}

			// giant letter
			.letter {

				// force center of curtain
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				// giant font
				font-size: 200px;
				font-weight: bolder;
				color: white;
			}// .letter

			&.curtain1 { left: -20%; top: 0%; }
			&.curtain2 { left: -20%; top: 0%; }
			&.curtain3 { left: -20%; top: 0%; }
			&.curtain4 { left: -20%; top: 0%; }
			&.curtain5 { left: -20%; top: 0%; }

		}// .curtain

		// cute
		.reli {

			width: 20%;
			position: absolute;

			top: 50%;
			left: -20%;
			transform: translateY(-50%) scale(0.5);

			transition: left 1.3s ease-in-out;
		}// .reli

		// first stage - curtains & reli move in left-to-right horizontally
		&.horizontal {
			.curtain1 { left: 0%; }
			.curtain2 { left: 20%; }
			.curtain3 { left: 40%; }
			.curtain4 { left: 60%; }
			.curtain5 { left: 80%; }

			.reli {
				left: 90%;
			}
		}// &.horizontal

		// first stage - curtains & reli move in left-to-right horizontally
		&.vertical {
			.curtain1 { left: 0%;  top:  100%; }
			.curtain2 { left: 20%; top: -100%;}
			.curtain3 { left: 40%; top:  100%; }
			.curtain4 { left: 60%; top: -100%;}
			.curtain5 { left: 80%; top:  100%; }

			.reli {
				left: 90%;
			}
		}// &.horizontal


	}// .gatchaPullOverlay

</style>
