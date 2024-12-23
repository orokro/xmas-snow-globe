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
		gatcha gatcha gatcha
	</MenuPanel>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// components
import MenuPanel from './MenuPanel.vue';

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

	// the main menu box, which is a transparent
</style>
