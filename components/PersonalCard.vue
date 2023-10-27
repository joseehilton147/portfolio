<script setup>
	const user = ref({
		name: 'Emma Doe',
		role: 'Analytics Engineer',
		phrase: 'Works on my machine...',
		avatar: '~/assets/images/avatar.png',
		email: 'contact@emmadoe.com',
		age: 24,
		location: {
			city: 'São Paulo',
			country: 'Brazil',
		},
	})
	const socialMedias = ref([
		{
			name: 'Github',
			icon: 'line-md:github-loop',
			color: 'text-github dark:text-white',
			link: '',
		},
		{
			name: 'Linkedin',
			icon: 'line-md:linkedin',
			color: 'text-linkedin dark:text-white',
			link: '',
		},
		{
			name: 'Twitter',
			icon: 'line-md:twitter',
			color: 'text-twitter dark:text-white',
			link: '',
		},
		{
			name: 'Instagram',
			icon: 'line-md:instagram',
			color: 'text-instagram dark:text-white',
			link: '',
		},
	])
</script>

<template>
	<img src="~/assets/images/avatar.png" class="rounded-md mx-auto -mt-20 w-3/4" alt="Emma Doe" />
	<div class="cursor-default my-4 dark:text-white">
		<h1 class="font-medium text-center text-2xl">{{ user.name }}</h1>
		<p class="flex my-2 items-center justify-center align-middle italic">"{{ user.phrase }}"</p>
		<div class="rounded-md bg-gray-100 mx-8 py-3 dark:bg-neutral-700">
			<p class="font-medium text-center">{{ user.role }}</p>
		</div>
	</div>
	<div class="flex my-4 justify-center align-middle">
		<NuxtLink
			v-for="(socialMedia, index) of socialMedias"
			:key="index"
			:to="socialMedia.link"
			:class="[
				'cursor-pointer rounded-md bg-gray-100 p-2 duration-300 hover:bg-indigo-500 hover:text-white dark:bg-neutral-600 dark:hover:bg-indigo-500',
				socialMedia.color,
				{'mr-4': socialMedias.length - 1 !== index},
			]"
		>
			<Icon :name="socialMedia.icon" :class="`h-8 w-8`" />
		</NuxtLink>
	</div>
	<div class="rounded-md flex flex-col bg-gray-100 p-4 gap-4 dark:bg-neutral-700">
		<div v-if="user.email" class="flex items-center">
			<Icon
				name="line-md:email-twotone-alt"
				class="bg-white rounded-md h-12 shadow-sm p-2 text-gray-400 w-12 dark:bg-neutral-800 dark:text-white"
			/>
			<p class="cursor-default font-medium ml-3 dark:text-white">{{ user.email }}</p>
		</div>
		<hr class="dark:border-neutral-800" />
		<div v-if="user.location" class="flex items-center">
			<Icon
				name="line-md:map-marker"
				class="bg-white rounded-md h-12 shadow-sm p-2 text-gray-400 w-12 dark:bg-neutral-800 dark:text-white"
			/>
			<p class="cursor-default font-medium ml-3 dark:text-white">
				{{ user.location.city }}, {{ user.location.country }}
			</p>
		</div>
		<hr class="dark:border-neutral-800" />
		<div v-if="user.age" class="flex items-center">
			<Icon
				name="line-md:calendar"
				class="bg-white rounded-md h-12 shadow-sm p-2 text-gray-400 w-12 dark:bg-neutral-800 dark:text-white"
			/>
			<p class="cursor-default font-medium ml-3 dark:text-white">{{ user.age }} years</p>
		</div>
	</div>
	<PrimeButton
		label="Download CV"
		class="rounded-md font-medium bg-indigo-500 border-0 mt-5 text-white w-full py-2 duration-300 hover:bg-indigo-600 focus:outline-none"
		size="large"
	>
		<template #icon>
			<Icon name="line-md:downloading-loop" class="h-8 w-8" />
		</template>
	</PrimeButton>
</template>
