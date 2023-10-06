<script setup>
	const colorMode = useColorMode()

	const educations = ref([
		{
			role: 'Independent Open Source Developer',
			company: 'Freelance',
			actualJob: true,
			duration: {
				start: '01/2021',
				end: null,
			},
			location: 'Remote',
			type: 'Full-time',
		},
		{
			role: 'Creative Technologist',
			company: 'Google',
			actualJob: false,
			duration: {
				start: '06/2016',
				end: '11/2021',
			},
			location: 'New York, USA',
			type: 'Full-time',
		},
		{
			role: 'Core Dev',
			company: 'Facebook',
			actualJob: false,
			duration: {
				start: '04/2008',
				end: '05/2016',
			},
			location: 'San Francisco, USA',
			type: 'Full-time',
		},
	])

	const workingSkills = ref([
		{
			role: 'Independent Open Source Developer',
			company: 'Freelance',
			actualJob: true,
			duration: {
				start: '01/2021',
				end: null,
			},
			location: 'Remote',
			type: 'Full-time',
		},
		{
			role: 'Creative Technologist',
			company: 'Google',
			actualJob: false,
			duration: {
				start: '06/2016',
				end: '11/2021',
			},
			location: 'New York, USA',
			type: 'Full-time',
		},
		{
			role: 'Core Dev',
			company: 'Facebook',
			actualJob: false,
			duration: {
				start: '04/2008',
				end: '05/2016',
			},
			location: 'San Francisco, USA',
			type: 'Full-time',
		},
	])

	function getColorClass(index, invert = false) {
		const isDarkMode = colorMode.value === 'dark'
		let colorClasses = isDarkMode ? ['bg-neutral-700', 'bg-neutral-600'] : ['bg-rose-50', 'bg-indigo-50']

		if (invert) {
			colorClasses = [colorClasses[1], colorClasses[0]]
		}

		return index % 2 === 0 ? colorClasses[0] : colorClasses[1]
	}

	useHead({
		title: 'Resume',
	})
</script>

<template>
	<UxCursiveTitle text="Resume" />
	<div class="grid grid-cols-2 gap-6">
		<div class="fancy mx-auto text-center">
			<UxCursiveTitle text="Working Skills" text-size="text-5xl" :underline-effect="true" />
			<div
				v-for="(work, index) of workingSkills"
				:key="index"
				:class="[' rounded-md shadow-sm', getColorClass(index), {'mb-4': workingSkills.length - 1 !== index}]"
			>
				<div class="p-4 text-start">
					<h1 class="text-lg font-medium dark:text-white">{{ work.role }}</h1>
					<p class="text-sm font-semibold text-neutral-500">{{ work.company }} · {{ work.type }}</p>
					<p class="my-1 text-xs font-medium text-neutral-500">
						{{ formatLocaleDate(work.duration.start) }} ·
						{{ work.actualJob ? 'moment' : formatLocaleDate(work.duration.end) }}
					</p>
					<p class="text-xs font-medium text-neutral-500 dark:text-stone-300">
						{{ work.location }}
					</p>
				</div>
			</div>
		</div>
		<div class="fancy mx-auto text-center">
			<UxCursiveTitle text="Education" text-size="text-5xl" :underline-effect="true" />
			<div
				v-for="(education, index) of educations"
				:key="index"
				:class="[
					' rounded-md shadow-sm',
					getColorClass(index, true),
					{'mb-4': educations.length - 1 !== index},
				]"
			>
				<div class="p-4 text-start">
					<h1 class="text-lg font-medium dark:text-white">{{ education.role }}</h1>
					<p class="text-sm font-semibold text-neutral-500">{{ education.company }} · {{ education.type }}</p>
					<p class="my-1 text-xs font-medium text-neutral-500">
						{{ formatLocaleDate(education.duration.start) }} ·
						{{ education.actualJob ? 'moment' : formatLocaleDate(education.duration.end) }}
					</p>
					<p class="text-xs font-medium text-neutral-500 dark:text-stone-300">
						{{ education.location }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
