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

		<!-- quote box in the center of the screen -->
		<div class="quoteBox" v-if="gameState.pickedQuote.value!=null">
			<div class="quote">{{ gameState.pickedQuote.value.text }}</div>
			<div class="author">From: {{ gameState.pickedQuote.value.from }}</div>
			<div class="closeButtonRow">
				<button @click="gameState.completePull()">Close</button>
			</div>
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

// define some props
const props = defineProps({

	// reference to our current game state
	gameState: Object

});


// after we mount, immediately kick off the next stage
onMounted(() => {


	// after a short delay, move to the horizontal stage
	setTimeout(() => {
		stage.value = STAGE.HORIZONTAL;
	}, 1);

	// horizontal animation takes 1 second, so start the vertical stage after that
	setTimeout(() => {
		stage.value = STAGE.VERTICAL;
	}, 1200);

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
			height: 110%;
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

			&.curtain1 { left: -20%; top: -5%; }
			&.curtain2 { left: -20%; top: -5%; }
			&.curtain3 { left: -20%; top: -5%; }
			&.curtain4 { left: -20%; top: -5%; }
			&.curtain5 { left: -20%; top: -5%; }

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
				left: 92%;
			}
		}// &.horizontal

		// first stage - curtains & reli move in left-to-right horizontally
		&.vertical {
			.curtain1 { left: 0%;  top:  110%; }
			.curtain2 { left: 20%; top: -110%;}
			.curtain3 { left: 40%; top:  110%; }
			.curtain4 { left: 60%; top: -110%;}
			.curtain5 { left: 80%; top:  110%; }

			.reli {
				left: 92%;
			}
		}// &.horizontal

		.quoteBox {

			// center of the screen
			position: absolute;
			top: 40%;
			left: 50%;
			transform: translate(-50%, -50%) rotate(5deg);

			width: 300px;

			// hand writing font
			font-family: 'Dancing Script', cursive;
			color: rgb(58, 18, 110);

			// semi-transparent box
			background: rgba(255, 255, 255, 1);
			padding: 20px 20px 60px 20px;
			border-radius: 15px;

			// the quote text
			.quote {
				font-size: 20px;
				font-size: italic;
				font-weight: bolder;
				text-align: center;
			}// .quote

			// author style
			.author {
				font-size: 15px;
				font-style: italic;
				text-align: right;
				margin-top: 10px;
			}// .author

			// the row on the button holding the button
			.closeButtonRow {

				position: absolute;
				inset: auto 0px 0px 0px;
				height: 45px;

				text-align: center;

				// make the button look nice
				button {
					background: rgb(58, 18, 110);
					color: white;
					font-size: 20px;
					font-weight: bolder;
					padding: 5px 10px;
					border-radius: 10px;
					cursor: pointer;
					transition: background 0.5s;

				}// button

			}// .closeButtonRow

		}// .quoteBox

	}// .gatchaPullOverlay

</style>
