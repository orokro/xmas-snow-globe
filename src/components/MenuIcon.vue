<!--
	MenuIcon.vue
	------------

	The icons in the top-left that toggles the hidden cats / gatcha menus.
-->
<template>

	<!-- the icon -->
	<div
		class="menuIcon"
		:style="{ left: props.left + 'px' }"
	>
		<img :src="`assets/img/icons/${props.icon}.png`" alt="Hidden Cats" />
	</div>
</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// define props
const props = defineProps({

	// left position of icon
	left: {
		type: Number,
		default: 30
	},

	// which icon image to show
	icon: {
		type: String,
		default: 'cat_menu_icon'
	}

});

</script>
<style lang="scss" scoped>

	// the icon
	.menuIcon {

		// position top-left
		position: fixed;
		top: 32px;

		// cursor
		cursor: pointer;

		// z-index
		z-index: 1000;

		// icon
		img {
			width: 100px;
			height: 100px;
		}

		transition: top 0.15s ease-out;
		&:hover {
			top: 25px;
		}

	}// .menuIcon

</style>
