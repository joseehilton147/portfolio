<script setup>
	const props = defineProps({
		firstWord: {
			type: String,
			default: 'Minha',
		},
		secondWord: {
			type: String,
			default: 'Jornada',
		},
		textColor: {
			type: String,
			default: 'indigo',
		},
		bgColor: {
			type: String,
			default: 'indigo',
		},
		disableShadow: {
			type: Boolean,
			default: false,
		},
		disableBg: {
			type: Boolean,
			default: false,
		},
	})

	const textColorClass = computed(() => `rounded-md p-2 text-xl ßmd:text-4xl text-${props.textColor}-500`)
	const bgColorClass = computed(
		() => `inline-block rounded-md bg-${props.bgColor}-500 py-1 px-4 leading-8 text-white`,
	)
</script>

<template>
	<div
		:class="[
			'flex w-fit cursor-default items-center justify-center rounded-md dark:bg-neutral-800',
			{
				'shadow-sm': !props.disableShadow,
			},
			{
				'bg-white': !props.disableBg,
			},
		]"
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
