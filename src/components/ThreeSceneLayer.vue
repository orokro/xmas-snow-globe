<!--
	ThreeScene.vue
	--------------

	This is where we'll mount our ThreeJS scene and render our 3D content.
-->
<template>

	<!-- the main wrapper that we'll eventually just mount the ThreeJS Canvas in once we're ready -->
	<div
		ref="sceneWrapper"
		class="threeSceneWrapper"
	>
	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// reference to the element that we'll mount the scene to
const sceneWrapper = ref(null);

// define some props
const props = defineProps({

	// the scene object
	scene: Object,

});


// when the component mounts we'll mount the threeJS scene to the sceneWrapper
onMounted(() => {

	// make sure we have a scene
	if (!props.scene) return;

	// for e-z access we'll add it to the window for debugging
	window.s = props.scene;

	// mount the scene to the sceneWrapper
	props.scene.mountSceneToDOM(sceneWrapper.value);

});


</script>
<style lang="scss" scoped>

	// fill screen space
	.threeSceneWrapper {

		// fill screen space
		position: fixed;
		inset: 0px 0px 0px 0px;

	}// .threeSceneWrapper

</style>
