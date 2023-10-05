<script setup>
	defineProps({
		text: {
			type: String,
			required: true,
		},
		textClass: {
			type: String,
			default: 'my-5 text-7xl font-medium',
		},
		spacing: {
			type: String,
			default: 'mb-5',
		},
		textSize: {
			type: String,
			default: 'text-7xl',
		},
	})
</script>

<template>
	<h1 :class="['font-rancho cursor-default tracking-tight dark:text-white', textClass, spacing, textSize]">
		{{ text }}
	</h1>
</template>
