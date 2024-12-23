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
		<!-- the icon image -->
		<img :src="`assets/img/icons/${props.icon}.png`" alt="Hidden Cats" />

		<!-- read bubble for finds -->
		<div
			class="notificationCount"
			v-if="props.notificationCount > 0"
		>
			<span>{{ props.notificationCount }}</span>
		</div>

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
	},

	// number to show in red circle when you find things
	notificationCount: {
		type: Number,
		default: 0
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

		// red notification bubble
		.notificationCount {

			// fixed on top right
			position: absolute;
			top: 0px;
			right: 0px;

			// red circle on bottom right
			background: red;
			color: white;
			border-radius: 50%;
			width: 30px;
			height: 30px;

			// text settings
			text-align: center;
			font-size: 20px;

			// move text down a bit
			span {
				position: relative;
				top: 4px;
				left: -1px;
			}// span

		}// .notificationCount

	}// .menuIcon

</style>
