<script setup>
	defineProps({
		text: {
			type: String,
			required: true,
		},
		textClass: {
			type: String,
			default: 'font-medium',
		},
		textSize: {
			type: String,
			default: 'text-6xl md:text-8xl',
		},
	})
</script>

<template>
	<h1 :class="['font-rancho cursor-default tracking-tight dark:text-white', textClass, textSize]">
		{{ text }}
	</h1>
</template>
