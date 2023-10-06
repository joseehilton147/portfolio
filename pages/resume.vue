<script setup>
	const colorMode = useColorMode()

	const educations = ref([
		{
			InstitutionName: 'Universidade Federal de São Paulo',
			course: 'Analysis and Systems Development',
			typeOfCourse: 'Bachelor',
			stillCoursing: true,
			duration: {
				start: '01/2023',
				end: null,
			},
		},
		{
			InstitutionName: 'Pontifícia Universidade Católica de São Paulo',
			course: 'Photography',
			typeOfCourse: 'Bachelor',
			stillCoursing: false,
			duration: {
				start: '06/2016',
				end: '06/2017',
			},
		},
	])

	const experiences = ref([
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
	<UxCursiveTitle text="My resume" class="mb-8" />
	<div class="grid grid-cols-2 gap-6">
		<div class="fancy mx-auto text-center">
			<UxCursiveTitle text="Experiences" text-size="text-5xl" :underline-effect="true" class="mb-4" />
			<div
				v-for="(experience, index) of experiences"
				:key="index"
				:class="[' rounded-md shadow-sm', getColorClass(index), {'mb-4': experiences.length - 1 !== index}]"
			>
				<div class="p-4 text-start">
					<h1 class="text-lg font-medium dark:text-white">{{ experience.role }}</h1>
					<p class="text-sm font-semibold text-neutral-500">
						{{ experience.company }} · {{ experience.type }}
					</p>
					<p class="my-1 text-xs font-medium text-neutral-500">
						{{ formatLocaleDate(experience.duration.start) }} ·
						{{ experience.actualJob ? 'moment' : formatLocaleDate(experience.duration.end) }}
					</p>
					<p class="text-xs font-medium text-neutral-500 dark:text-stone-300">
						{{ experience.location }}
					</p>
				</div>
			</div>
		</div>
		<div class="fancy mx-auto text-center">
			<UxCursiveTitle text="Academic Life" text-size="text-5xl" :underline-effect="true" class="mb-4" />
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
					<h1 class="text-lg font-medium dark:text-white">{{ education.InstitutionName }}</h1>
					<p class="text-sm font-semibold text-neutral-500">
						{{ education.typeOfCourse }} · {{ education.course }}
					</p>
					<p class="my-1 text-xs font-medium text-neutral-500">
						{{ formatLocaleDate(education.duration.start) }} ·
						{{ education.stillCoursing ? 'moment' : formatLocaleDate(education.duration.end) }}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
