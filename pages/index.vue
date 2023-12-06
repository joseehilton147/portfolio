<script setup>
	import Bowser from 'bowser'

	const authStore = useAuthStore()

	const currentYear = ref(new Date().getFullYear())

	const user = reactive({
		email: null,
		password: null,
	})

	function scrollTologin() {
		const el = document.getElementById('login')
		el.scrollIntoView({behavior: 'smooth'})
	}

	definePageMeta({
		layout: '',
	})

	async function handleLogin() {
		// eslint-disable-next-line import/no-named-as-default-member
		await authStore.doPostLogin({...user, device: Bowser.parse(window.navigator.userAgent)})
	}
</script>

<template>
	<div class="bg-white">
		<div class="flex min-h-screen flex-col md:flex-row">
			<!-- Left Side -->
			<div
				class="lt-sm:py-20 md:w-6/10 flex min-h-screen flex-col items-center justify-between bg-indigo-500 p-4 text-white"
			>
				<!-- Placeholder div for alignment -->
				<div>
					<div class="cursor-default text-center md:hidden">
						<div class="flex items-center justify-center">
							<Icon name="fluent:person-desktop-20-regular" class="h-10 w-10 md:h-16 md:w-16" />
							<div class="mx-2 h-6 w-px bg-white md:mx-4 md:h-11" />
							<LogoComponent first-word="Sua" text-color="indigo" />
						</div>
					</div>
				</div>
				<NuxtImg src="/images/landing-page/background.svg" class="h-auto w-full max-w-md" />
				<p class="lt-sm:hidden cursor-default text-white">© {{ currentYear }}</p>
				<div class="flex cursor-pointer flex-col items-center text-center md:hidden">
					<p class="fw-semibold lt-sm:text-sm mb-4">
						Comece gratuitamente e destaque-se dos seus concorrentes
					</p>
					<div id="mouse-scroll" @click="scrollTologin">
						<div class="mouse">
							<div class="mouse-in"></div>
						</div>
						<div>
							<span class="down-arrow-1"></span>
							<span class="down-arrow-2"></span>
							<span class="down-arrow-3"></span>
						</div>
					</div>
				</div>
			</div>

			<!-- Right Side -->
			<div id="login" class="md:w-4/10 flex min-h-screen flex-col items-center justify-between p-6">
				<div class="cursor-default text-center">
					<div class="flex items-center justify-center">
						<Icon name="fluent:person-desktop-20-regular" class="h-10 w-10 md:h-16 md:w-16" />
						<div class="mx-2 h-6 w-px bg-neutral-700 md:mx-4 md:h-11" />
						<LogoComponent first-word="Sua" :disable-shadow="true" text-color="neutral" />
					</div>
					<p class="fw-semibold lt-sm:text-sm my-2 text-neutral-700">
						Comece gratuitamente e destaque-se dos seus concorrentes
					</p>
				</div>

				<div class="w-full">
					<div class="cursor-default text-center">
						<h1 class="fw-bold mb-2 text-3xl text-indigo-500 md:text-5xl">Bem vindo</h1>
						<p class="fw-semibold text-neutral-700">Faça login em sua conta</p>
					</div>

					<div class="my-6 flex flex-col gap-4 sm:flex-row">
						<button
							v-tooltip.top="'Em breve'"
							class="fw-bold flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-gray-200 py-3 text-neutral-500"
						>
							<Icon name="devicon:google" class="mr-2 h-6 w-6" />
							com Google
						</button>
						<button
							v-tooltip.top="'Em breve'"
							class="fw-bold flex w-full cursor-not-allowed items-center justify-center rounded-lg border border-gray-200 py-3 text-neutral-500"
						>
							<Icon name="devicon:linkedin" class="mr-2 h-6 w-6" />
							com Linkedin
						</button>
					</div>

					<div class="flex cursor-default items-center justify-center gap-4">
						<div class="flex-grow border-t border-gray-200"></div>
						<span>OU</span>
						<div class="flex-grow border-t border-gray-200"></div>
					</div>

					<div class="grid gap-4">
						<InputComponent
							v-model="user.email"
							name="email"
							label="Email"
							placeholder="john_doe@domain.com"
						/>
						<InputComponent v-model="user.password" name="password" label="Senha" type="password" />
						<div class="flex items-center">
							<input type="checkbox" />
							<span class="fw-semibold ml-1 cursor-default text-xs text-neutral-500">Me lembre</span>
						</div>
						<button
							class="w-full rounded-lg bg-indigo-500 py-3 text-white hover:bg-indigo-700"
							@click="handleLogin"
						>
							Login
						</button>
					</div>
				</div>

				<div class="lt-sm:mt-8 flex">
					<p class="mr-2 cursor-default text-neutral-500">Ainda não possui conta?</p>
					<nuxt-link to="/register" class="fw-semibold text-indigo-500">Crie agora mesmo!</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	#mouse-scroll span {
		display: block;
		width: 5px;
		height: 5px;
		-ms-transform: rotate(45deg);
		-webkit-transform: rotate(45deg);
		transform: rotate(45deg);
		transform: rotate(45deg);
		border-right: 2px solid #fff;
		border-bottom: 2px solid #fff;
		margin: 0 0 3px 5px;
	}
	#mouse-scroll .mouse {
		height: 21px;
		width: 14px;
		border-radius: 10px;
		-webkit-transform: none;
		-ms-transform: none;
		transform: none;
		border: 2px solid #ffffff;
		top: 170px;
	}
	#mouse-scroll .down-arrow-1 {
		margin-top: 6px;
	}
	#mouse-scroll .down-arrow-1,
	#mouse-scroll .down-arrow-2,
	#mouse-scroll .down-arrow-3 {
		animation: mouse-scroll 1s infinite;
		-webkit-animation: mouse-scroll 1s infinite;
		-moz-animation: mouse-scroll 1s infinite;
	}
	#mouse-croll .down-arrow-1 {
		animation-delay: 0.1s;
		-webkit-animation-delay: 0.1s;
		-moz-animation-delay: 0.1s;
		animation-direction: alternate;
		-webkit-animation-direction: alternate;
	}
	#mouse-scroll .down-arrow-2 {
		animation-delay: 0.2s;
		-webkit-animation-delay: 0.2s;
		-moz-animation-delay: 0.2s;
		animation-direction: alternate;
		-webkit-animation-direction: alternate;
	}
	#mouse-scroll .down-arrow-3 {
		animation-delay: 0.3s;
		-webkit-animation-delay: 0.3s;
		-moz-animation-dekay: 0.3s;
		animation-direction: alternate;
		-webkit-animation-direction: alternate;
	}
	#mouse-scroll .mouse-in {
		height: 5px;
		width: 2px;
		display: block;
		margin: 5px auto;
		background: #ffffff;
		position: relative;
	}
	#mouse-scroll .mouse-in {
		animation: animated-mouse 1.2s ease infinite;
		-webkit-animation: animated-mouse 1.2s ease infinite;
		-moz-animation: mouse-animated 1.2s ease infinite;
	}

	@keyframes animated-mouse {
		0% {
			opacity: 1;
			-webkit-transform: translateY(0);
			-ms-transform: translateY(0);
			transform: translateY(0);
		}
		100% {
			opacity: 0;
			-webkit-transform: translateY(6px);
			-ms-transform: translateY(6px);
			transform: translateY(6px);
		}
	}
	@-webkit-keyframes mouse-scroll {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes mouse-scroll {
		0% {
			opacity: 0;
		}
		50% {
			opacity: 0.5;
		}
		100% {
			opacity: 1;
		}
	}
</style>
