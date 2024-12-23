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
	</div>

</template>
<script setup>

// vue
import { ref, onMounted } from 'vue';

</script>
<style lang="scss" scoped>

	// fix on bottom right of the screen
	.controlsBox {

		// fixed size on bottom right
		position: fixed;
		bottom: 30px;
		right: 30px;
		width: 215px;
		height: 160px;

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
		}
	}// .controlsBox

</style>
