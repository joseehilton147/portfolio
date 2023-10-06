<script setup>
	defineProps({
		text: {
			type: String,
			required: true,
		},
		textClass: {
			type: String,
			default: 'my-5 font-medium',
		},
		spacing: {
			type: String,
			default: 'mb-5',
		},
		textSize: {
			type: String,
			default: 'text-8xl',
		},
		underlineEffect: {
			type: Boolean,
			default: false,
		},
	})
</script>

<template>
	<h1
		:class="[
			'font-rancho underlineEffect cursor-default tracking-tight dark:text-white',
			textClass,
			spacing,
			textSize,
		]"
	>
		<span :class="[{tapered: underlineEffect}]">{{ text }}</span>
	</h1>
</template>

<style scoped>
	.underlineEffect {
		span {
			background-size: 100% 15%;
			background-repeat: repeat-x;
			background-position: left 0% bottom 10%;
		}
	}

	.tapered {
		background-image: linear-gradient(179deg, #60a5fa 0%, #3b82f6 50%, transparent 54%, transparent 100%);
	}
</style>
