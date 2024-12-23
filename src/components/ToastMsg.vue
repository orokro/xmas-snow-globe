<!--
	ToastMsg.vue
	------------

	The toast popup message
-->
<template>

	<!-- outermost body wrapper of the toast message -->
	<div
		class="toastBody"
		:class="{ show: props.toastManager.showToast.value }"
	>

		<!-- the optional title for the toast -->
		<div
			v-if="props.toastManager.currentMessage.value.title!=''"
			class="toastTitle"
		>
			{{ props.toastManager.currentMessage.value.title }}
		</div>

		<!-- the main message text -->
		<div class="toastMessage">
			{{ props.toastManager.currentMessage.value.message }}
		</div>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// define some props
const props = defineProps({

	// the toast manager
	toastManager: Object
});

</script>
<style lang="scss" scoped>

	// the box that slides in & out
	.toastBody {

		// fixed force top center
		position: fixed;
		left: 50%;
		top: -100px;
		transform: translateX(-50%);

		// animate in when we're visible
		transition: top 0.5s;
		&.show {
			top: 20px;
		}

		// size and padding
		width: 300px;
		padding: 20px;

		// rounded transparent box
		border: 3px solid rgba(255, 255, 255, 0.5);
		border-radius: 15px;
		background: rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(10px);

		// text settings
		color: #EFEFEF;
		font-size: 18px;
		text-align: center;

	}// .toastBody

</style>
