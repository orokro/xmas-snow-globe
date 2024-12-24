<!--
	ModalMsg.vue
	------------

	Similar to the ToastMsg.vue, but centered popup that blocks bg interaction.
	Also waits for user input to dismiss.
-->
<template>

	<!-- giant wrapper to block out the bg -->
	<div
		class="modalLayer"
		:class="{ show: props.modalManager.modalIsOpen.value }"
	>

		<!-- body wrapper of the toast message -->
		<div
			class="modalBody"
		>

			<!-- the optional title for the modal -->
			<div
				v-if="props.modalManager.currentMessage.value.title!=''"
				class="modalTitle"
			>
				{{ props.modalManager.currentMessage.value.title }}
			</div>

			<!-- the main message text -->
			<div v-html="props.modalManager.currentMessage.value.message" class="modalMessage" ></div>

			<!-- the close button -->
			<div class="closeButtonRow">
				<button
					@click="props.modalManager.closeModal"
				>
					K
				</button>
			</div>

		</div>
	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// define some props
const props = defineProps({

	// the toast manager
	modalManager: Object
});

</script>
<style lang="scss" scoped>

	// the full layer
	.modalLayer {

		// fill the screen
		position: fixed;
		inset: 0px 0px 0px 0px;

		// blur the background
		// background: rgba(0, 0, 0, 0.5);
		backdrop-filter: blur(5px);

		// animate blur and opacity in
		opacity: 0.0;
		backdrop-filter: blur(0px);
		transition: opacity 0.5s, backdrop-filter 0.5s;

		// no pointer events if hidden (by default)
		pointer-events: none;

		// blue & fade in
		&.show {

			opacity: 1.0;
			backdrop-filter: blur(5px);
			pointer-events: initial;

			.modalBody {
				transform: translate(-50%, -50%) scale(1.0);
			}
		}

		// the box that slides in & out
		.modalBody {

			// fixed force top center
			position: fixed;

			// force center
			left: 50%;
			top: 50%;
			transform: translate(-50%, -50%) scale(0.0);

			// animate in when we're visible
			transition: transform 0.5s;

			// size and padding
			width: 450px;
			height: 300px;
			padding: 10px;

			// rounded transparent box
			border-radius: 15px;
			background: rgba(0, 0, 0, 0.7);
			backdrop-filter: blur(10px);

			// text settings
			color: #EFEFEF;
			font-size: 32px;
			text-align: center;

			// the title of the modal
			.modalTitle {

				// text settings
				color: rgb(23, 212, 241);
				margin-bottom: 20px;
				border-bottom: rgb(23, 212, 241) 2px solid;

				// vertical gradient that fades towards teh top
				background: linear-gradient(0deg, rgba(23, 212, 241,0.2) 0%, rgba(23, 212, 241,0.05) 100%);
				border-radius: 12px 12px 0px 0px;

			}// .modalTitle

			// the main message text
			.modalMessage {

				// text settings
				margin-top: 20px;

			}// .modalMessage

			// the row on the bottom with the modal button
			.closeButtonRow {

				position: absolute;
				inset: auto 0px 0px 0px;
				height: 40px;

				padding: 6px 10px;

				// button stuck on right
				button {

					// stack on right
					float: right;

                    display: inline-block;
                    outline: none;
                    cursor: pointer;

					// rounded box style
					background: #00c2ee;
					border-radius: 3px;
                    padding: 0 16px;
                    border-radius: 8px;
					height: 36px;
					min-width: 64px;
                    border: none;
					box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);
                    transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);

					// text settings
                    font-weight: 500;
                    color: #fff;
                    line-height: 1.15;
                    font-size: 14px;
                    word-spacing: 0px;
                    letter-spacing: .0892857143em;
                    text-decoration: none;
                    text-transform: uppercase;
                    text-align: center;

                    &:hover {
                        background: #49deff;
                        box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
                    }

				}

			}// .closeButtonRow

		}// .toastBody

	}//.modalLayer


</style>
