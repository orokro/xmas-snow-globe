/*
	Main.js
	-------

	Main JavaScript entry point for the app, to load & mount the App.vue component
*/
import { createApp } from 'vue';
import App from './App.vue';

// import the styles
import './assets/style.css';

createApp(App).mount('#app');
