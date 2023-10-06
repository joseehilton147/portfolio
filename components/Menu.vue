<script setup>
	const router = useRouter()

	const sidebarItems = ref([
		{
			name: 'About',
			icon: 'line-md:account',
			link: '/',
		},
		{
			name: 'Resume',
			icon: 'line-md:text-box-multiple',
			link: '/resume',
		},
		{
			name: 'Projects',
			icon: 'line-md:lightbulb',
			link: '/projects',
		},
		{
			name: 'Articles',
			icon: 'line-md:text-box',
			link: '/articles',
		},
	])

	// Compute the active state of each sidebar item based on the current route
	const updatedSidebarItems = computed(() => {
		return sidebarItems.value.map(item => {
			return {
				...item,
				active: router.currentRoute.value.path === item.link,
			}
		})
	})
</script>

<template>
	<div class="flex flex-col">
		<NuxtLink
			v-for="(item, index) of updatedSidebarItems"
			:key="index"
			:to="item.link"
			:class="[
				'flex flex-col items-center justify-center rounded-md bg-gray-100 p-4 hover:cursor-pointer hover:bg-indigo-500 hover:text-white dark:bg-neutral-600 dark:text-white dark:hover:bg-indigo-500',
				{'mb-4': sidebarItems.length - 1 !== index},
				{'bg-indigo-500 text-white dark:bg-indigo-500': item.active},
			]"
		>
			<Icon :name="item.icon" class="h-12 w-12" />
			<p class="mt-1 text-xl font-medium">{{ item.name }}</p>
		</NuxtLink>
	</div>
</template>
