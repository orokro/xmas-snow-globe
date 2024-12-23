<!--
	GatchaRow.vue
	-------------

	One of our quotes that has been found, or not, displayed in the gatcha menu.

-->
<template>

	<!-- main outer-wrapper for the icon -->
	<div
		class="quoteRow"
		:title="quoteSettings.text"
	>
		<!-- the author of the quote, optional if empty string -->
		<div
			v-if="quoteSettings.from!=''"
			class="author"
		>
			{{ quoteSettings.from }}
		</div>

		<!-- the quote text -->
		<div class="quote" :class="{ unFound: !quoteSettings.found }">
			{{ quoteSettings.text }}
		</div>

	</div>

</template>
<script setup>

// vue
import { ref, onMounted, computed } from 'vue';

// define some props
const props = defineProps({

	// the cat to show
	quote: {

		type: Object,
		default: () => {
			return {
				from: 'Unknown Aurelinaut',
				text: 'Meow',
				found: false
			};
		}
	}

});


// return the settings we need for the icon based if it's found or not
const quoteSettings = computed(() => {

	// if found, show the full quote
	if (props.quote.found==true) {
		return {
			from: props.quote.from,
			text: props.quote.text,
			found: true,
		};
	}

	// otherwise, show the question mark
	else {
		return {
			from: '',
			text: '???',
			found: false,
		};
	};

});

</script>
<style lang="scss" scoped>

	// main quote row
	.quoteRow {

		// make a circle
		width: 100%;
		height: 40px;

		// alternate bg on odd rows
		// background-color: #f0f0f0;
		&:nth-child(odd) {
			background-color: rgba(255, 255, 255, 0.1);
		}

		// relative so we can position children abso-lutely
		position: relative;

		// stretch fit background image
		background-size: cover;

		// the author name, smol on top left
		.author {

			position: absolute;
			top: 0px;
			left: 0px;

			// text settings
			font-size: 12px;
			color: #AAA;


			padding: 2px 6px;

		}// .author

		// the quote text
		.quote {

			// fill parent
			position: absolute;
			inset: 14px 0px 0px 0px;

			// center text, and use ellipsis for overflow
			text-align: center;
			white-space: nowrap;
			padding: 0px 10px;

			// before found
			&.unFound {
				color: #666;
				font-size: 32px;
				font-weight: bolder;
				top: 2px;
			}

			// add ellipses for overflow
			overflow: hidden;
			text-overflow: ellipsis;

		}// .quote

	}// .quoteRow

</style>
