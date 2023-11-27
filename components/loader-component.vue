<script setup>
	const props = defineProps({
		displayLoading: {
			type: Boolean,
			default: false,
		},
	})

	useHead({
		bodyAttrs: {
			class: computed(() => (props.displayLoading ? 'overflow-hidden' : '')),
		},
	})
</script>

<template>
	<div
		v-show="displayLoading"
		class="preloader z-2 fixed inset-0 flex h-screen w-full items-center justify-center bg-black bg-opacity-50"
	>
		<span class="spinner absolute inline-block h-20 w-20 bg-transparent" />
	</div>
</template>

<style>
	.preloader > span {
		animation-name: spinner;
		animation-duration: 1.2s;
		animation-iteration-count: infinite;
		animation-direction: normal;
	}
	.spinner:after {
		content: ' ';
		display: block;
		width: 64px;
		height: 64px;
		margin: 8px;
		border-radius: 50%;
		border: 6px solid #fff;
		border-color: #fff transparent #fff transparent;
		animation: spinner 1.2s linear infinite;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
