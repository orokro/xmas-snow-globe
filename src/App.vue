<!--
	App.vue
	-------

	Main entry point / root component of the App.
-->
<template>

	<main>

		<!-- this will render our background layer stack (i.e. gradient, texture, etc ) -->
		<BackgroundLayers :gameState="game"/>

		<!-- this will mount our threeJS scene when ready -->
		<ThreeSceneLayer :scene="scene"/>

		<!-- this layer holds all the UI for the various game modes -->
		<GameUILayer :scene="scene" :gameState="game"/>

		<!-- show toasts if any queued up -->
		<ToastMsg :toastManager="toastManager"/>

		<!-- show modals if any queued up -->
		<ModalMsg :modalManager="modalManager"/>

	</main>
</template>
<script setup>

// components
import BackgroundLayers from './components/BackgroundLayers.vue';
import ThreeSceneLayer from './components/ThreeSceneLayer.vue';
import GameUILayer from './components/GameUILayer.vue';
import ToastMsg from './components/ToastMsg.vue';
import ModalMsg from './components/ModalMsg.vue';

// app / misc
import ThreeScene from './classes/ThreeScene';
import { Game } from './classes/Game';
import ToastManager from './classes/ToastManager';
import ModalManager from './classes/ModalManager';
import BGMPlayer from './classes/BGMPlayer';

// create a new ThreeJS scene
const scene = new ThreeScene();

// make new BGM player waiting for first window click
const bgmPlayer = new BGMPlayer('assets/sfx/2024_reli-xmas.mp3');

// make a couple managers before we make our game
const toastManager = new ToastManager(3);
const modalManager = new ModalManager();

// make a new instance of our game object
const game = new Game(scene, toastManager, modalManager);

// for debugging & ez access
window.s = scene;
window.t = toastManager;
window.m = modalManager;
window.g = game;

</script>
<style lang="scss" scoped>


</style>
