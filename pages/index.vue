<script setup>
	const router = useRouter()

	definePageMeta({
		layout: 'landing-page',
	})

	onMounted(() => {
		router.push('/demo')
	})
</script>

<template>
	<h1>olá mundo</h1>
</template>
