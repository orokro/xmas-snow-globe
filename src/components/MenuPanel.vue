<!--
	MenuPanel.vue
	-------------

	This component provides a transparent panel with a configurable:
		- size
		- position
		- tab location

	So we can re-use this code for both the in game menus.

-->
<template>

	<!-- the main box where we'll spawn contents	-->
	<div
		class="mainMenuBox"
		:style="{
			width: props.size + 'px',
			top: props.position.top + 'px',
			left: props.position.left + 'px'
		}"
	>

		<!-- the tab we'll overflow -->
		<div
			class="tab"
			:style="{
				left: props.tabLocation + 'px'
			}"
		></div>

		<!-- said contents -->
		<slot></slot>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// define some props
const props = defineProps({

	// true if menu is open
	isOpen: {
		type: Boolean,
		default: false
	},

	// the size of the menu
	size: {
		type: Number,
		default: 300
	},

	// the position of the menu
	position: {
		type: Object,
		default: () => {
			return {
				top: 0,
				left: 0
			};
		}
	},

	// the tab location
	tabLocation: {
		type: Number,
		default: 0
	},

});


</script>
<style lang="scss" scoped>

	// the main menu box, which is a transparent
	.mainMenuBox {

		// positioned abso-lutely
		position: absolute;

		// rounded corner transparent box w/ bg blur
		background-color: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(3px);
		border-radius: 10px;

		// some generic padding & box styles
		box-sizing: border-box;
		padding: 20px;

		// text settings
		color: #EFEFEF;
		font-size: 18px;

		// the tab will be over-flowed on top around the icon
		.tab {

			// fixed on top, overflowing above
			position: absolute;
			top: -100px;
			height: 100px;
			width: 100px;

			// rounded corner transparent box w/ bg blur
			background-color: rgba(0, 0, 0, 0.3);
			backdrop-filter: blur(3px);
			border-radius: 10px 10px 0px 0px;

		}// .tab

	}// .mainMenuBox

</style>
