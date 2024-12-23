<!--
	CatsMenu.vue
	------------

	Show's which hidden cats the player has found.
-->
<template>

	<!-- our basic menu component -->
	<MenuPanel
		:isOpen="isOpen"
		:size="470"
		:position="{ top: 130, left: 10 }"
		:tabLocation="21"
	>

		<!-- the header text for the menu -->
		<h1>{{ gameState.allCatsFound.value ? 'All Cats Found!' : 'Find Hidden Cats to get Gatcha Pulls!' }}</h1>

		<!-- loop to show cat menu icons -->
		<div class="catMenuIcons">
			<HiddenCatIcon
				v-for="cat in gameState.foundCats.value"
				:key="cat.id+cat.found"
				:catFound="cat.found"
				:cat="cat"
			/>
		</div>

	</MenuPanel>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// components
import MenuPanel from './MenuPanel.vue';
import HiddenCatIcon from './HiddenCatIcon.vue';

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

</style>
