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

	useHead({
		title: 'Articles',
	})
</script>

<template>
	<UxCursiveTitle text="Latest articles" class="mb-8" />
	<section>
		<div class="grid grid-cols-2 gap-4">
			<div
				v-for="(article, index) of articles"
				:key="index"
				class="flex flex-col justify-between rounded-md bg-gray-50 px-6 py-4 dark:bg-neutral-700"
			>
				<div>
					<span
						class="inline-block rounded bg-indigo-50 px-2 py-1 text-xs font-medium tracking-widest text-indigo-500"
					>
						{{ article.category }}
					</span>
					<h2 class="title-font my-4 text-xl font-medium text-neutral-800 dark:text-white">
						{{ article.title }}
					</h2>
					<p class="text-md mb-2 line-clamp-4 leading-relaxed text-neutral-700 dark:text-white">
						{{ article.description }}
					</p>
				</div>
				<div class="mt-4 flex items-center justify-center self-end">
					<button class="flex rounded-md bg-indigo-500 px-4 py-2 text-white duration-300 hover:bg-indigo-600">
						<span class="mr-1">Read More</span>
						<Icon name="line-md:chevron-small-double-right" class="h-6 w-6" />
					</button>
				</div>
			</div>
		</div>
	</section>

	<div class="mt-8 flex items-center justify-center">
		<!-- Previous Button -->
		<a
			href="#"
			class="mr-3 flex h-10 items-center justify-center rounded-md border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
		>
			<svg
				class="mr-2 h-3.5 w-3.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M13 5H1m0 0 4 4M1 5l4-4"
				/>
			</svg>
			Previous
		</a>
		<a
			href="#"
			class="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
		>
			Next
			<svg
				class="ml-2 h-3.5 w-3.5"
				aria-hidden="true"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 14 10"
			>
				<path
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M1 5h12m0 0L9 1m4 4L9 9"
				/>
			</svg>
		</a>
	</div>
</template>
