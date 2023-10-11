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
			icon: 'line-md:briefcase',
			link: '/resume',
		},
		{
			name: 'Articles',
			icon: 'line-md:text-box-to-text-box-multiple-transition',
			link: '/articles',
		},
	])

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
	<div
		:class="[
			{'flex flex-col': $device.isDesktop},
			{
				'absolute left-1/2 top-4 -translate-x-1/2 rounded-lg bg-gray-100 dark:bg-neutral-600':
					$device.isMobileOrTablet,
			},
		]"
	>
		<NuxtLink
			v-for="(item, index) of updatedSidebarItems"
			:key="index"
			:to="item.link"
			:class="[
				'flex items-center justify-center  duration-300 hover:cursor-pointer hover:bg-indigo-500 hover:text-white dark:text-white dark:hover:bg-indigo-500',
				{'flex-col rounded-md p-4': $device.isDesktop},
				{'px-8 py-4': $device.isMobileOrTablet},
				{'mb-4': sidebarItems.length - 1 !== index},
				{'rounded-t-lg': $device.isMobileOrTablet && index === 0},
				{'rounded-b-lg': $device.isMobileOrTablet && index === sidebarItems.length - 1},
				{'bg-indigo-500 text-white dark:bg-indigo-500': item.active},
				{'bg-gray-100 dark:bg-neutral-700': !item.active},
			]"
		>
			<Icon :name="item.icon" :class="['dark:text-white', $device.isDesktop ? 'h-12 w-12' : 'h-8 w-8']" />
			<p :class="['mt-1 text-xl font-medium', {'ml-3': $device.isMobileOrTablet}]">{{ item.name }}</p>
		</NuxtLink>
	</div>
</template>
