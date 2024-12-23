<!--
	GatchaMenu.vue
	--------------

	Show's which gatcha quotes the player has found.
-->
<template>

	<!-- our basic menu component -->
	<MenuPanel
		:isOpen="isOpen"
		:size="470"
		:position="{ top: 130, left: 10 }"
		:tabLocation="121"
	>
		<!-- the header text for the menu -->
		<h1>{{ gameState.allCatsFound.value ? 'All Quotes Found!' : 'Pull for Merry Quotes!' }}</h1>

		<!-- loop to show quotes -->
		<div class="quotesList scrollable-element">
			<GatchaRow
				v-for="quote in gameState.gatchaQuotesSeen.value"
				:key="quote.id+quote.found"
				:quoteFound="quote.found"
				:quote="quote"
			/>
		</div>

	</MenuPanel>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// components
import MenuPanel from './MenuPanel.vue';
import GatchaRow from './GatchaRow.vue';

// define some props
const props = defineProps({

	// true if menu is open
	isOpen: {
		type: Boolean,
		default: false
	},

	// reference to our current game state
	gameState: Object
});

</script>
<style lang="scss" scoped>

	// top text
	h1 {
		text-align: center;
		font-size: 24px;
		margin: 0px;

	}// h1

	// make the quotes list scrollable with a fixed height
	.quotesList {

		// fixed height box w/ scroll bar
		height: 600px;
		overflow-x: hidden;
		overflow-y: auto;

		// spacing on top
		margin-top: 10px;

		&::-webkit-scrollbar {
			width: 8px; /* Width of the scrollbar */
			background-color: transparent; /* Optional: could be set to a color */
		}

		&::-webkit-scrollbar-thumb {
			background-color: #c1c1c1; /* Light grey, similar to macOS default */
			border-radius: 4px; /* Rounded corners on the scrollbar thumb */
			border: 2px solid transparent; /* Optional: borders for the thumb */
			background-clip: padding-box; /* Prevents background color from leaking into the border */
		}

		&::-webkit-scrollbar-thumb:hover {
			background-color: #a8a8a8; /* Darker grey on hover */
		}
	}// .quotesList

</style>
