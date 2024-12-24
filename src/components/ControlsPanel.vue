<!--
	ControlsPanel.vue
	-----------------

	Just a little box on the bottom-right that shows the mouse controls
-->
<template>

	<!-- the box w/ the controls text -->
	<div class="controlsBox">

		<!-- cuz i'm feeling lazy, we'll absolutely position an image and 3 rows of text -->
		<img src="../assets/img/control_icons.png" class="controlsImage"/>

		<div class="row row_1"><span>Left Mouse</span> to Rotate</div>
		<div class="row row_2"><span>Scroll</span> to Zoom In/Out</div>
		<div class="row row_3"><span>Right Mouse</span> to Pan</div>

		<!-- we'll sneak the credits link into this panel also -->
		<div class="row row_4 creditsRow">
			<span @click="showCredits">Credits</span>
		</div>
	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

// app
import { gatchaQuotes } from '@/classes/Data';

// define some props
const props = defineProps({

	// the toast manager
	modalManager: Object
});

// show the credits
const showCredits = () => {

	const css = `
		<style type="text/css">
			.inlineStyle {
				text-align: left;
				padding: 10px 30px;
			}

			.inlineStyle a {
				color: white;
			}
		</style>`;

	// show a modal for programming
	let modalHTML = `
		<div class="inlineStyle"><small><small>

			A game by Greg Miller (Orokro/RlySrsBiz)<br>
			<br>
			<a href="http://gmiller.net" target="_blank">gmiller.net</a><br>
			<a href="https://x.com/RlySrsBiz" target="_blank">@RlySrsBiz</a>
		</small></small></div>
	` + css;
	props.modalManager.showModal(modalHTML, 'Programming & 3D Modeling');

	// show modal for music
	modalHTML = `
		<div class="inlineStyle"><small><small>
			Music by ZbotZero<br>
			<br>
			<a href="https://discord.com/invite/yZyNufZcAh" target="_blank">Discord Server</a><br>
			<a href="https://soundcloud.com/zbotzero" target="_blank">SoundCloud</a><br>
			<a href="https://www.youtube.com/@ZbotZero" target="_blank">YouTube</a><br>
		</small></small></div>
	` + css;
	props.modalManager.showModal(modalHTML, 'Music');

	// show modal for art
	modalHTML = `
		<div class="inlineStyle"><small><small>
			2D/3D Assets modeled by Greg Miller, <br>
			but additional models downloaded:<br>
			<br>
			<a href="https://free3d.com/3d-model/tree-v3--182436.html" target="_blank">Tree</a><br>
			<a href="https://sketchfab.com/3d-models/pickup-truck-scene-fcd1362ddc45471b8d53cec41ee38582" target="_blank">Truck</a><br>

		</small></small></div>
	` + css;
	props.modalManager.showModal(modalHTML, 'Additional Art');

	// get all the unique "from" in our gatchaQuotes & join with commas
	const froms = gatchaQuotes.map(quote => quote.from).filter((v, i, a) => a.indexOf(v) === i);
	const fromsStr = froms.join(', ');

	// show modal for art
	modalHTML = `
		<div class="inlineStyle"><small><small>
			Thanks to everyone who contributed quotes:<br>
			<small><small>${fromsStr}</small></small>
		</small></small></div>
	` + css;
	props.modalManager.showModal(modalHTML, 'Contributions');

};



</script>
<style lang="scss" scoped>

	// fix on bottom right of the screen
	.controlsBox {

		// fixed size on bottom right
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 215px;
		height: 190px;

		// semi-transparent blurry box
		background: rgba(0, 0, 0, 0.3);
		backdrop-filter: blur(5px);

		color: white;
		padding: 10px;
		border-radius: 15px;

		// fix the image on the left of the box
		.controlsImage {

			position: absolute;
			left: 10px;
			top: 10px;
			width: 40px;
			height: 160px;

		}// .controlsImage

		// the rows of text
		.row {
			position: absolute;
			left: 60px;
			font-weight: bolder;

			span { color: #2ECDB5;}
			&.row_1 { top: 25px; }
			&.row_2 { top: 80px; }
			&.row_3 { top: 135px; }
			&.row_4 {
				top: 175px;
				left: 0px;
				right: 0px;
				text-align: center;

				span {
					color: white;
					text-decoration: underline;
					cursor: pointer;
				}

				opacity: 0.7;
				&:hover { opacity: 1; }
			 }// .row_4

		}
	}// .controlsBox

</style>
