<script setup>
	const props = defineProps({
		firstWord: {
			type: String,
			default: 'My',
		},
		secondWord: {
			type: String,
			default: 'Resume',
		},
		color: {
			type: String,
			default: 'indigo',
		},
	})

	const textColorClass = computed(() => `rounded-md p-2 text-4xl text-${props.color}-500`)
	const bgColorClass = computed(() => `inline-block rounded-md bg-${props.color}-500 p-4 leading-8 text-white`)
</script>

<template>
	<div
		class="flex w-fit cursor-default items-center justify-center rounded-md bg-white shadow-sm dark:bg-neutral-800"
	>
		<div class="text-center">
			<h1 :class="textColorClass">
				{{ firstWord }}
				<span :class="bgColorClass">
					{{ secondWord }}
				</span>
			</h1>
		</div>
	</div>
</template>
