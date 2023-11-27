<script setup>
	defineProps({
		name: {
			type: String,
			required: true,
			default: '',
		},
		label: {
			type: String,
			required: true,
		},
	})

	const isChecked = ref(false)
	const emit = defineEmits(['update:checked'])

	function updateCheckedState(event) {
		isChecked.value = event.target.checked

		emit('update:checked', isChecked.value)
	}
</script>

<template>
	<div class="flex items-center">
		<input
			:id="name"
			ref="checkbox"
			v-model="isChecked"
			:name="name"
			type="checkbox"
			class="h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
			@change="updateCheckedState"
		/>
		<label :for="name" class="ml-2 block text-sm leading-5 text-neutral-500">{{ label }}</label>
	</div>
</template>
