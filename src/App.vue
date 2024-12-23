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

		<!-- this layer holds all the UI for the various game modes -->
		<GameUILayer :scene="scene" :gameState="game"/>

	</main>
</template>
<script setup>

// components
import BackgroundLayers from './components/BackgroundLayers.vue';
import ThreeSceneLayer from './components/ThreeSceneLayer.vue';
import GameUILayer from './components/GameUILayer.vue';

// app / misc
import ThreeScene from './classes/ThreeScene';
import { Game } from './classes/Game';

// create a new ThreeJS scene
const scene = new ThreeScene();

// make a new instance of our game object
const game = new Game(scene);

// for debugging & ez access
window.s = scene;
window.g = game;

</script>
<style lang="scss" scoped>


</style>
