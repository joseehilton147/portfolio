<script setup>
	// const authStore = useAuthStore()
	// const user = ref(authStore.getUser)

	const colorMode = useColorMode()

	const areas = ref([
		{
			icon: 'fluent-mdl2:modeling-view',
			name: 'Data Modelling',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
		},
		{
			icon: 'mdi:graph-outline',
			name: 'Data Viz',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
		},
		{
			icon: 'game-icons:materials-science',
			name: 'Data Science',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
		},
		{
			icon: 'carbon:communication-unified',
			name: 'Communication',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod tincidunt volutpat.',
		},
	])

	function getColorClass(index) {
		const isDarkMode = colorMode.value === 'dark'
		let colorClasses = ['bg-rose-50', 'bg-indigo-50', 'bg-indigo-50', 'bg-rose-50']

		if (isDarkMode) {
			colorClasses = ['bg-neutral-700', 'bg-neutral-600', 'bg-neutral-600', 'bg-neutral-700']
		}

		return colorClasses[index] || ''
	}

	useHead({
		titleTemplate: titleChunk => {
			return titleChunk ? `${titleChunk} - About` : 'About'
		},
	})

	const swiperInstance = ref(null)

	const {isMobile} = useDevice()

	onMounted(async () => {
		await nextTick()
		const swiperParams = {
			loop: true,
			autoplay: true,
			navigation: true,
			slidesPerView: isMobile ? 1 : 3,
			spaceBetween: 20,
		}

		Object.assign(swiperInstance.value, swiperParams)

		swiperInstance.value.initialize()
	})

	const posts = ref([
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/1.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/3.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/1.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/2.jpg',
		},
		{
			title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
			image: '/images/posts/3.jpg',
		},
	])
</script>

<template>
	<ClientOnly>
		<UxCursiveTitle text="👋 Hello" class="mb-8" />
		<p class="dark:text-white">
			Make sure to include in your wheelhouse that ipo will be a game-changer, so dogpile that, or those options
			are already baked in with this model, or organic growth, or per my previous email.
		</p>
		<p class="my-4 dark:text-white">
			We want to empower the team with the right tools and guidance to uplevel our craft and build better high
			touch client. Even dead cats bounce pulling teeth, and to be inspired is to become creative, innovative and
			energized we want this philosophy to trickle down to all our stakeholders.
		</p>
		<UxCursiveTitle text="What i do!" text-size="text-4xl md:text-5xl" class="my-8" />
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<div v-for="(area, index) of areas" :key="index" :class="['rounded-md shadow-sm', getColorClass(index)]">
				<div class="relative px-6 py-4">
					<h1 class="mb-2 text-xl font-medium md:text-2xl dark:text-white">{{ area.name }}</h1>
					<p class="text-sm font-medium text-neutral-500 md:text-base dark:text-stone-300">
						{{ area.description }}
					</p>
					<Icon :name="area.icon" class="absolute bottom-0 right-2 h-24 w-24 opacity-5 dark:opacity-10" />
				</div>
			</div>
		</div>
		<UxCursiveTitle text="my Check latest articles..." text-size="text-4xl md:text-5xl" class="my-8" />
		<div>
			<swiper-container ref="swiperInstance">
				<swiper-slide v-for="(post, index) of posts" :key="index">
					<img :src="post.image" :alt="post.title" class="rounded-md" />
					<h1 class="mt-4 dark:text-white">{{ post.title }}</h1>
				</swiper-slide>
			</swiper-container>
		</div>
	</ClientOnly>
</template>

<style>
	.swiper-slide img {
		display: block;
		width: auto;
		height: 35vh;
		object-fit: contain;
	}
</style>
