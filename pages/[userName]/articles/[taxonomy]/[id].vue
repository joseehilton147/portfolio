<script setup>
	const article = ref({
		title: 'Roof party normcore before',
		description:
			'Ut maximus urna vitae congue vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a fermentum sapien, id elementum ante. Aenean eget felis iaculis, tincidunt dui ut, consectetur magna. Etiam in rhoncus tortor, id imperdiet metus. Cras vel sodales nunc. Proin ex sapien, consequat feugiat tellus sed, vehicula faucibus leo. Vestibulum quis lorem in odio gravida porta in sed nisi. Etiam sapien velit, semper at metus eu, sagittis porta purus. Fusce ut eleifend leo, ac porta diam. Curabitur laoreet eros sit amet nibh posuere, id pretium nibh pellentesque.',
	})
</script>

<template>
	<header>
		<h1 class="text-center font-mono text-4xl font-semibold leading-relaxed tracking-tight antialiased">
			{{ article.title }}
		</h1>
		<p>
			{{ article.description }}
		</p>
	</header>
</template>
