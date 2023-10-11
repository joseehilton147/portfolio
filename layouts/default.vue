<script setup>
	const colorMode = useColorMode()
	const isDarkMode = ref(false)

	watch(isDarkMode, value => (colorMode.preference = value ? 'dark' : 'light'))

	/**
	 * Credit to [@hooray](https://github.com/hooray)
	 * @see https://github.com/vuejs/vitepress/pull/2347
	 */
	function toggleDark(event) {
		document.getElementsByClassName('moon')[0].classList.toggle('sun')
		document.getElementsByClassName('tdnn')[0].classList.toggle('day')
		document.getElementsByTagName('BODY')[0].classList.toggle('light')

		const isAppearanceTransition =
			document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches

		if (!isAppearanceTransition) {
			isDarkMode.value = !isDarkMode.value
			return
		}

		const {clientX: x, clientY: y} = event
		const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

		const transition = document.startViewTransition(async () => {
			isDarkMode.value = !isDarkMode.value
			await nextTick()
		})

		transition.ready.then(() => {
			const clipPath = [`circle(0px at ${x}px ${y}px)`, `circle(${endRadius}px at ${x}px ${y}px)`]
			document.documentElement.animate(
				{
					clipPath: isDarkMode.value ? [...clipPath].reverse() : clipPath,
				},
				{
					duration: 400,
					easing: 'ease-out',
					pseudoElement: isDarkMode.value ? '::view-transition-old(root)' : '::view-transition-new(root)',
				},
			)
		})
	}

	const displayMobileMenu = ref(false)

	const route = useRoute()

	const isTaxonomyPage = computed(() => route.path.includes('/articles/'))

	onMounted(() => {
		if (colorMode.preference === 'dark') isDarkMode.value = true
	})
</script>

<template>
	<header
		:class="[
			'container flex',
			{'my-8 justify-end': $device.isDesktop},
			{'my-4  justify-center': $device.isMobileOrTablet},
		]"
	>
		<div>
			<LogoComponent />
			<div class="mx-auto mt-4 flex w-fit place-items-center">
				<div :class="[{'mr-4': $device.isMobileOrTablet}]">
					<button class="tdnn relative cursor-pointer" @click="toggleDark">
						<div class="moon absolute block"></div>
					</button>
				</div>
				<div
					:class="['cursor-pointer', {hidden: $device.isDesktop}]"
					@click="displayMobileMenu = !displayMobileMenu"
				>
					<Icon
						:name="displayMobileMenu ? 'line-md:menu-to-close-transition' : 'line-md:menu'"
						class="h-12 w-12 dark:text-white"
					/>
					<div class="relative">
						<MenuComponent v-if="displayMobileMenu" />
					</div>
				</div>
			</div>
		</div>
	</header>
	<main class="container mb-8">
		<div :class="[{'mx-4': $device.isMobileOrTablet}, {'grid grid-cols-12 gap-12': $device.isDesktop}]">
			<div
				:class="[
					'h-fit rounded-md bg-white p-2 shadow-sm dark:bg-neutral-800',
					{'sticky top-24 col-span-3 p-4': $device.isDesktop},
					{'mt-24': $device.isMobileOrTablet},
					{hidden: $device.isMobileOrTablet && isTaxonomyPage},
				]"
			>
				<PersonalCard />
			</div>
			<div
				:class="[
					'rounded-md bg-white p-4 shadow-sm dark:bg-neutral-800',
					{'col-span-7 p-8': $device.isDesktop},
					{'my-8': $device.isMobileOrTablet},
				]"
			>
				<slot />
			</div>
			<div
				:class="[
					'h-fit rounded-md bg-white p-2 shadow-sm dark:bg-neutral-800',
					{hidden: $device.isMobileOrTablet},
					{'sticky top-24 col-span-2 p-4': $device.isDesktop},
				]"
			>
				<MenuComponent />
			</div>
		</div>
	</main>
</template>

<style scoped>
	.light {
		background: #fff;
		color: #d43370;
	}
	.tdnn {
		margin: 0 auto;
		/*change size of toggle with font-size*/
		font-size: 20%;
		height: 16em;
		width: 30em;
		border-radius: 16em;
		transition: all 500ms ease-in-out;
		background: #423966;
	}
	.day {
		background: #ffbf71;
	}
	.moon {
		border-radius: 50%;
		transition: all 400ms ease-in-out;
		top: 3em;
		left: 3em;
		transform: rotate(-75deg);
		width: 10em;
		height: 10em;
		background: #423966;
		box-shadow:
			3em 2.5em 0 0em #d9fbff inset,
			rgba(255, 255, 255, 0.1) 0em -7em 0 -4.5em,
			rgba(255, 255, 255, 0.1) 3em 7em 0 -4.5em,
			rgba(255, 255, 255, 0.1) 2em 13em 0 -4em,
			rgba(255, 255, 255, 0.1) 6em 2em 0 -4.1em,
			rgba(255, 255, 255, 0.1) 8em 8em 0 -4.5em,
			rgba(255, 255, 255, 0.1) 6em 13em 0 -4.5em,
			rgba(255, 255, 255, 0.1) -4em 7em 0 -4.5em,
			rgba(255, 255, 255, 0.1) -1em 10em 0 -4.5em;
	}
	.sun {
		top: 4.5em;
		left: 18em;
		transform: rotate(0deg);
		width: 7em;
		height: 7em;
		background: #fff;
		box-shadow:
			3em 3em 0 5em #fff inset,
			0 -5em 0 -2.7em #fff,
			3.5em -3.5em 0 -3em #fff,
			5em 0 0 -2.7em #fff,
			3.5em 3.5em 0 -3em #fff,
			0 5em 0 -2.7em #fff,
			-3.5em 3.5em 0 -3em #fff,
			-5em 0 0 -2.7em #fff,
			-3.5em -3.5em 0 -3em #fff;
	}
</style>
