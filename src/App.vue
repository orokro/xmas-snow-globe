<!--
	App.vue
	-------

	Main entry point / root component of the App.
-->
<template>

	<main>

		<!-- this will render our background layer stack (i.e. gradient, texture, etc ) -->
		<BackgroundLayers/>

		<!-- this will mount our threeJS scene when ready -->
		<ThreeSceneLayer :scene="scene"/>

	</main>
</template>
<script setup>

// components
import BackgroundLayers from './components/BackgroundLayers.vue';
import ThreeSceneLayer from './components/ThreeSceneLayer.vue';

// app / misc
import ThreeScene from './classes/ThreeScene';

// create a new ThreeJS scene
const scene = new ThreeScene();


</script>
<style lang="scss" scoped>


</style>
