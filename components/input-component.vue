<script setup>
	const props = defineProps({
		modelValue: {
			type: [String, Number],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
			validation: value => ['text', 'number', 'email', 'password', 'url', 'date'].includes(value),
		},
		name: {
			type: String,
			required: true,
		},
		placeholder: {
			type: String,
			default: null,
		},
		required: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		autocomplete: {
			type: String,
			default: 'off',
			validation: value => ['off', 'on'].includes(value),
		},
		loading: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: null,
		},
	})

	const emit = defineEmits(['update:modelValue', 'focus', 'blur'])

	const input = ref(null)
	const showPassword = ref(false)

	function onInput(event) {
		emit('update:modelValue', event.target.value)
	}

	function toggleShowPassword() {
		showPassword.value = !showPassword.value
	}

	const inputType = computed(() => {
		return props.type === 'password' && showPassword.value ? 'text' : props.type
	})
</script>

<template>
	<client-only>
		<div class="relative flex flex-col">
			<label class="block text-left text-neutral-500">{{ label }}</label>
			<input
				:id="name"
				ref="input"
				:name="name"
				:value="modelValue"
				:type="inputType"
				:required="required"
				:placeholder="placeholder"
				:disabled="disabled || loading"
				:readonly="readonly"
				:autocomplete="autocomplete"
				class="rounded-lg border border-gray-200 px-4 py-2 text-neutral-500"
				@input="onInput"
				@focus="$emit('focus', $event)"
				@blur="$emit('blur', $event)"
			/>
			<div
				v-if="type === 'password'"
				class="absolute right-0 top-1/2 flex transform cursor-pointer items-center pr-3"
				@click="toggleShowPassword"
			>
				<Icon
					:name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
					class="h-6 w-6 text-neutral-500"
				/>
			</div>
		</div>
	</client-only>
</template>
