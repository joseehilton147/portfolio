<script setup>
	const colorMode = useColorMode()

	const academicLife = ref([
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

	const certifications = ref([
		{
			name: 'Google Cloud Platform Fundamentals: Core Infrastructure',
			company: 'Google',
			emissionDate: '01/2021',
		},
		{
			name: ' LGPD - Lei Geral de Proteção de Dados',
			company: 'Alura',
			emissionDate: '03/2023',
		},
	])

	const skills = ref([
		{
			name: 'JavaScript',
			level: 7,
		},
		{
			name: 'TypeScript',
			level: 3,
		},
		{
			name: 'C#',
			level: 3,
		},
		{
			name: 'SQL',
			level: 5,
		},
		{
			name: 'NoSQL',
			level: 3,
		},
	])

	const knowledges = ref([
		'Vue.js',
		'React.js',
		'Node.js',
		'Nest.js',
		'Docker',
		'Kubernetes',
		'AWS',
		'GCP',
		'Communication',
		'Flexibility',
		'Creativity',
	])

	const isDarkMode = computed(() => colorMode.value === 'dark')

	const {isMobile} = useDevice()
	const resumeRef = ref(null)

	onMounted(() => {
		if (isMobile) {
			setTimeout(() => {
				resumeRef.value.scrollIntoView({behavior: 'smooth'})
			}, 100)
		}
	})

	useHead({
		title: 'Resume',
	})
</script>

<template>
	<ClientOnly>
		<div ref="resumeRef">
			<UxCursiveTitle text="My resume" class="mb-8" />
		</div>
		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<UxCursiveTitle text="Experiences" text-size="text-4xl md:text-5xl" class="mb-4 text-center" />
				<div
					v-for="(experience, index) of experiences"
					:key="index"
					:class="[
						' rounded-md shadow-sm',
						isDarkMode
							? index % 2 === 0
								? 'bg-neutral-700'
								: 'bg-neutral-600'
							: index % 2 === 0
								? 'bg-rose-50'
								: 'bg-indigo-50',
						{'mb-4': experiences.length - 1 !== index},
					]"
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

			<div>
				<UxCursiveTitle text="Academic Life" text-size="text-4xl md:text-5xl" class="mb-4 text-center" />
				<div
					v-for="(education, index) of academicLife"
					:key="index"
					:class="[
						' rounded-md shadow-sm',
						isDarkMode
							? index % 2 === 0
								? 'bg-neutral-600'
								: 'bg-neutral-700'
							: index % 2 === 0
								? 'bg-indigo-50'
								: 'bg-rose-50',
						{'mb-4': academicLife.length - 1 !== index},
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

		<div class="my-8">
			<UxCursiveTitle text="Certifications" text-size="text-4xl md:text-5xl text-center mb-4" />
			<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
				<div
					v-for="(certification, index) of certifications"
					:key="index"
					:class="[
						' rounded-md shadow-sm',
						isDarkMode
							? index % 2 === 0
								? 'bg-neutral-600'
								: 'bg-neutral-700'
							: index % 2 === 0
								? 'bg-indigo-50'
								: 'bg-rose-50',
						{'mb-4': certification.length - 1 !== index},
					]"
				>
					<div class="p-4 text-start">
						<h1 class="text-md font-medium dark:text-white">{{ certification.name }}</h1>
						<p class="my-1 text-xs font-medium text-neutral-500">
							{{ certification.company }} · {{ formatLocaleDate(certification.emissionDate) }}
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
			<div>
				<UxCursiveTitle text="Skills" text-size="text-4xl md:text-5xl" class="text-center" />
				<div v-for="(skill, index) of skills" :key="index" class="my-4">
					<h1 class="text-start text-base font-medium dark:text-white">{{ skill.name }}</h1>
					<div class="flex h-5 rounded-md bg-neutral-600">
						<div
							class="skill-per relative h-5 w-0 rounded-md bg-indigo-500 transition"
							:per="skill.level * 10"
							:style="{width: `${skill.level * 10}%`}"
						></div>
					</div>
				</div>
			</div>
			<div>
				<UxCursiveTitle text="Knowledges" text-size="text-4xl md:text-5xl" class="mb-6 text-center" />
				<div class="flex flex-wrap justify-center gap-4">
					<div
						v-for="(knowledge, index) of knowledges"
						:key="index"
						class="rounded-md bg-gray-100 px-4 py-2 dark:bg-neutral-600"
					>
						<h1 class="cursor-default text-start text-base font-light dark:text-white">
							{{ knowledge }}
						</h1>
					</div>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>

<style scoped>
	.skill-per:before {
		content: attr(per);
		position: absolute;
		padding: 2px 6px;
		background-color: #6366f1;
		color: #fff;
		font-size: 12px;
		border-radius: 6px;
		bottom: -28px;
		right: 0;
		transform: translateX(50%);
		z-index: 1;
	}
	.skill-per:after {
		content: '';
		position: absolute;
		width: 10px;
		height: 10px;
		background-color: #6366f1;
		bottom: -13px;
		right: 0;
		transform: translateX(50%) rotate(45deg);
		border-radius: 1px;
	}
</style>
