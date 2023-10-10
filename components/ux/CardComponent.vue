<template>
	<main class="flex flex-col justify-between rounded-md bg-gray-50 px-3 py-4 dark:bg-neutral-700 md:px-6">
		<header>
			<div
				v-if="$slots.taxonomy"
				class="inline-block cursor-default rounded bg-indigo-50 px-2 py-1 text-xs font-medium tracking-widest text-indigo-500"
			>
				<slot name="taxonomy"></slot>
			</div>
			<h2
				v-if="$slots.title"
				class="title-font my-4 cursor-pointer text-xl font-medium text-neutral-800 dark:text-white"
			>
				<slot name="title"></slot>
			</h2>
		</header>
		<p class="text-md mb-2 line-clamp-4 leading-relaxed text-neutral-700 dark:text-white">
			<slot name="description"></slot>
		</p>
		<div v-if="$slots.footer" class="mt-4 flex items-center justify-center self-end">
			<slot name="footer"></slot>
		</div>
	</main>
</template>
