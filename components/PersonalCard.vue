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
	<img src="~/assets/images/avatar.png" class="mx-auto -mt-20 w-3/4 rounded-md" alt="Emma Doe" />
	<div class="my-4 cursor-default dark:text-white">
		<h1 class="text-center text-2xl font-medium">{{ user.name }}</h1>
		<p class="my-2 flex items-center justify-center align-middle italic">"{{ user.phrase }}"</p>
		<div class="mx-8 rounded-md bg-gray-100 py-3 dark:bg-neutral-700">
			<p class="text-center font-medium">{{ user.role }}</p>
		</div>
	</div>
	<div class="my-4 flex justify-center align-middle">
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
	<div class="flex flex-col gap-4 rounded-md bg-gray-100 p-4 dark:bg-neutral-600">
		<div v-if="user.email" class="flex items-center">
			<Icon
				name="line-md:email-twotone-alt"
				class="h-12 w-12 rounded-md bg-white p-2 text-gray-400 shadow-sm dark:bg-neutral-800 dark:text-white"
			/>
			<p class="ml-3 cursor-default font-medium dark:text-white">{{ user.email }}</p>
		</div>
		<hr class="dark:border-neutral-800" />
		<div v-if="user.location" class="flex items-center">
			<Icon
				name="line-md:map-marker"
				class="h-12 w-12 rounded-md bg-white p-2 text-gray-400 shadow-sm dark:bg-neutral-800 dark:text-white"
			/>
			<p class="ml-3 cursor-default font-medium dark:text-white">
				{{ user.location.city }}, {{ user.location.country }}
			</p>
		</div>
		<hr class="dark:border-neutral-800" />
		<div v-if="user.age" class="flex items-center">
			<Icon
				name="line-md:calendar"
				class="h-12 w-12 rounded-md bg-white p-2 text-gray-400 shadow-sm dark:bg-neutral-800 dark:text-white"
			/>
			<p class="ml-3 cursor-default font-medium dark:text-white">{{ user.age }} years</p>
		</div>
	</div>
	<Button
		label="Download CV"
		class="mt-5 w-full rounded-md border-0 bg-indigo-500 py-2 font-medium text-white duration-300 hover:bg-indigo-600 focus:outline-none"
		size="large"
	>
		<template #icon>
			<Icon name="line-md:downloading-loop" class="h-8 w-8" />
		</template>
	</Button>
</template>
