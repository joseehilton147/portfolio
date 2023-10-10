<script setup>
	const articles = ref([
		{
			title: 'Roof party normcore before',
			category: 'AWS',
			description:
				'Ut maximus urna vitae congue vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur a fermentum sapien, id elementum ante. Aenean eget felis iaculis, tincidunt dui ut, consectetur magna. Etiam in rhoncus tortor, id imperdiet metus. Cras vel sodales nunc. Proin ex sapien, consequat feugiat tellus sed, vehicula faucibus leo. Vestibulum quis lorem in odio gravida porta in sed nisi. Etiam sapien velit, semper at metus eu, sagittis porta purus. Fusce ut eleifend leo, ac porta diam. Curabitur laoreet eros sit amet nibh posuere, id pretium nibh pellentesque.',
		},
		{
			title: 'Pinterest occupy authentic',
			category: 'NoSQL',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			title: 'Artisan reprehenderit in',
			category: 'AWS',
			description: 'Aenean eget felis iaculis, tincidunt dui ut, consectetur magna.',
		},
		{
			title: 'Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.',
			category: 'SQL',
			description: 'Quisque euismod, quam eget dignissim rhoncus, diam nunc.',
		},
	])

	const {isMobile} = useDevice()
	const articlesRef = ref(null)

	onMounted(() => {
		if (isMobile) {
			setTimeout(() => {
				articlesRef.value.scrollIntoView({behavior: 'smooth'})
			}, 100)
		}
	})

	useHead({
		title: 'Articles',
	})
</script>

<template>
	<div ref="articlesRef">
		<UxCursiveTitle text="Latest articles" class="mb-8" />
	</div>
	<section>
		<div class="grid gap-4 md:grid-cols-2">
			<UxCardComponent v-for="(article, index) of articles" :key="index">
				<template #taxonomy>
					{{ article.category }}
				</template>
				<template #title>
					{{ article.title }}
				</template>
				<template #description>
					{{ article.description }}
				</template>
				<template #footer>
					<Button
						class="flex rounded-md bg-indigo-500 px-4 py-2 text-white duration-300 hover:bg-indigo-600"
						label="Read More"
					>
						<template #icon>
							<Icon name="line-md:chevron-small-double-right" class="h-6 w-6" />
						</template>
					</Button>
				</template>
			</UxCardComponent>
		</div>
	</section>

	<div class="mt-8 flex items-center justify-center">
		<NuxtLink
			to="/"
			class="mr-3 flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-lg font-medium text-white duration-300 hover:bg-indigo-600"
		>
			<Icon name="line-md:arrow-small-left" class="mr-2 h-3.5 w-3.5" />
			Previous
		</NuxtLink>
		<NuxtLink
			to="/"
			class="flex items-center justify-center rounded-md bg-indigo-500 px-4 py-2 text-lg font-medium text-white duration-300 hover:bg-indigo-600"
		>
			Next
			<Icon name="line-md:arrow-small-right" class="ml-2 h-3.5 w-3.5" />
		</NuxtLink>
	</div>
</template>
