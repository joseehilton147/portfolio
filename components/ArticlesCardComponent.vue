<script setup>
	defineProps({
		articles: {
			type: Array,
			required: true,
		},
	})

	function sanitizeTag(tag) {
		return tag.replace(/\s/g, '-').toLowerCase()
	}
</script>

<template>
	<main
		v-for="article in articles"
		:key="article.id"
		class="flex flex-col justify-between rounded-md bg-gray-50 px-3 py-4 dark:bg-neutral-700 md:px-6"
	>
		<header class="flex flex-col">
			<NuxtLink
				:to="`/articles/${sanitizeTag(article.category)}`"
				class="inline-block w-fit cursor-default rounded bg-indigo-50 px-2 py-1 text-xs font-medium tracking-widest text-indigo-500"
			>
				{{ article.category }}
			</NuxtLink>
			<NuxtLink
				:to="`/articles/${sanitizeTag(article.category)}/${article.id}`"
				class="title-font my-4 cursor-pointer text-xl font-medium text-neutral-800 dark:text-white"
			>
				{{ article.title }}
			</NuxtLink>
		</header>
		<p class="text-md mb-2 line-clamp-4 leading-relaxed text-neutral-700 dark:text-white">
			{{ article.description }}
		</p>
		<div class="mt-4 flex items-center justify-center self-end">
			<NuxtLink
				:to="`/articles/${sanitizeTag(article.category)}/${article.id}`"
				class="flex rounded-md bg-indigo-500 px-4 py-2 text-white duration-300 hover:bg-indigo-600"
			>
				<span class="mr-2">Read More</span>
				<Icon name="line-md:chevron-small-double-right" class="h-6 w-6" />
			</NuxtLink>
		</div>
	</main>
</template>
