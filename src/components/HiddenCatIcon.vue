<!--
	HiddenCatIcon.vue
	-----------------

	The circle with the picture or the ? for the cats to find.

-->
<template>

	<!-- main outer-wrapper for the icon -->
	<div
		class="iconBox"

		   :style="{
			   backgroundImage: iconSettings.backgroundImage
		   }"
		   :title="iconSettings.text"
		>
	</div>

</template>
<script setup>

// vue
import { ref, onMounted, computed } from 'vue';

// define some props
const props = defineProps({

	// the cat to show
	cat: {

		type: Object,
		default: () => {
			return {
				name: 'Unknown Cat',
				icon: '00_mystery.png',
				object: 'Unknown',
				found: false
			};
		}
	}

});

// return the settings we need for the icon based if it's found or not
const iconSettings = computed(() => {

	// if found, show the cat
	if (props.cat.found==true) {
		return {
			backgroundImage: `url(assets/img/hidden_cat_icons/${props.cat.icon})`,
			text: props.cat.name,
		};
	}

	// otherwise, show the question mark
	return {
		backgroundImage: 'url(assets/img/hidden_cat_icons/00_mystery.png)',
		text: 'Find Me!',
	};

});

</script>
<style lang="scss" scoped>

	// main icon
	.iconBox {

		// make a circle
		width: 110px;
		height: 110px;
		border: 4px solid white;
		border-radius: 50%;

		// stack left
		float: left;
		margin: 10px;

		// stretch fit background image
		background-size: cover;

		// zoom in when hovered
		transition: transform 0.2s;
		&:hover {
			transform: scale(1.39);
			z-index: 1000;
		}

	}// .iconBox

</style>
