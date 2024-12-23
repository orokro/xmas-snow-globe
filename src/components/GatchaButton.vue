<!--
	GatchaButton.vue
	----------------

	Button used for pulls.
	It also shows the number of pulls left.
-->
<template>

	<!-- outer box we'll use to build the button inside of -->
	<div
		class="gatchaButtonBox"
		:class="{
			'noPullsLeft': gameState.gatchaPulls.value === 0,
			'gatchaEnabled': gameState.gatchaUnlocked.value
		}"
		title="Lets gooooooooo!"
		@click="gameState.doPull()"
	>

		<!-- this layer will be the "shadow" for the button top -->
		<div class="shadow">

			<!-- the top of the button that's lighter in color -->
			<div class="top">

				<!-- the text -->
				<div class="text">
					Pull!
				</div>

				<!-- the number of pulls left -->
				<div
					class="pullsLeft"
					:class="{ 'noPullsLeft': gameState.gatchaPulls.value === 0 }"
				>
					Pulls Left: {{ gameState.gatchaPulls.value }}
				</div>
			</div>

		</div>

	</div>
</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// define some props
const props = defineProps({

	// reference to our current game state
	gameState: Object

});

</script>
<style lang="scss" scoped>

	// fix on top right of the screen
	.gatchaButtonBox {

		// fixed on top right
		position: absolute;
		right: 30px;

		// we will hide off screen until gatcha is enabled
		top: -150px;
		transition: top 0.3s ease;

		&.gatchaEnabled {
			top: 30px;
		}

		// fixed size
		width: 300px;
		height: 130px;


		// mega mind: no pulls?
		&.noPullsLeft {
			pointer-events: none;

			background: black;
			border-radius: 20px;

			.shadow {
				opacity: 0.7;
			}
		}// &.noPullsLeft


		// style our shadow div
		.shadow {

			// fixed on the bottom-right of our outer gatchaButtonBox
			position: absolute;
			bottom: 0px;
			right: 0px;
			width: 300px;
			height: 130px;

			// purple rectangle
			background: rgb(85, 10, 160);
			border-radius: 25px;
			border: 3px solid rgba(255, 255, 255, 0.7);

			// allow nothing to escape
			overflow: hidden;

			// appear clickable to user
			cursor: pointer;

			// the top of the button
			.top {

				// fixed on the top-left
				position: absolute;
				top: 5px;
				left: 5px;
				width: 285px;
				height: 110px;

				background: rgb(163, 113, 255);
				border-radius: 18px 18px 20px 18px;

				// the pull text
				.text {
					position: absolute;
					inset: 7px 0px 0px 0px;

					color: rgb(255, 84, 192);
					color: #fcd9f7;
					font-size: 60px;
					font-weight: bolder;
					font-style: italic;
					text-align: center;

				}// t.ext

				// the remaining pulls count
				.pullsLeft {

					// bottom center
					position: absolute;
					inset: auto 0px 0px 0px;
					height: 30px;

					color: rgb(255, 255, 255);
					font-size: 20px;
					font-weight: bold;
					font-style: italic;
					text-align: center;
					opacity: 0.7;

					// no pulls left
					&.noPullsLeft {
						color: rgba(0, 0, 0, 0.3);
					}

				}// .pullsLeft

			}// .top

		}// .shadow

		&:hover {

			// make the button look like it's being pressed
			.top {
				background: rgb(191, 160, 248);
			}
		}

		&:active {

			.shadow {
				width: 295px;
				height: 120px;
			}
		}

	}// .gatchaButtonBox

</style>
