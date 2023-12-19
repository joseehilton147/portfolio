<script setup>
	import Bowser from 'bowser'

	const router = useRouter()

	const authStore = useAuthStore()

	const currentYear = ref(new Date().getFullYear())
	const hasAcceptedTerms = ref(false)

	const loading = reactive({
		register: false,
	})

	const user = reactive({
		fullName: null,
		userName: null,
		birthDate: null,
		email: null,
		password: null,
		confirmPassword: null,
	})

	async function handleRegisterUser() {
		loading.register = true

		const response = await authStore.doPostRegister({
			...user,
			// eslint-disable-next-line import/no-named-as-default-member
			device: Bowser.parse(window.navigator.userAgent),
		})

		if (response === 'email') user.email = null
		if (response?.token) router.push('/')

		loading.register = false
	}

	const isFormValid = computed(() => {
		const fieldsAreFilled = Object.values(user).every(field => field)
		const passwordsMatch = user.password === user.confirmPassword

		return fieldsAreFilled && passwordsMatch && hasAcceptedTerms.value
	})

	definePageMeta({
		layout: '',
	})
</script>

<template>
	<div class="bg-white">
		<div class="flex min-h-screen flex-col md:flex-row">
			<div class="md:w-6/10 hidden w-full flex-col justify-between bg-indigo-500 py-6 text-white md:flex">
				<div class="flex flex-grow items-center justify-center">
					<NuxtImg src="/images/landing-page/background.svg" class="mx-auto h-auto max-w-md" />
				</div>
				<p class="mb-2 mt-4 text-center">© {{ currentYear }}</p>
			</div>

			<div class="md:w-4/10 flex min-h-screen flex-col items-center justify-between p-6">
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
						<h1 class="fw-bold mb-2 text-3xl text-indigo-500 md:text-5xl">Crie sua conta</h1>
					</div>
					<div class="grid gap-4">
						<vs-input
							v-model="user.fullName"
							name="fullName"
							label="Nome completo"
							placeholder="John Doe"
						/>
						<div class="grid grid-cols-2 gap-4">
							<vs-input
								v-model="user.userName"
								name="username"
								label="Nome de usuário"
								placeholder="@john_doe"
							/>
							<vs-input
								v-model="user.birthDate"
								name="birthDate"
								label="Data de nascimento"
								type="date"
							/>
						</div>
						<vs-input
							v-model="user.email"
							name="email"
							label="Email"
							placeholder="john_doe@domain.com"
							type="email"
						/>
						<div class="grid grid-cols-2 gap-4">
							<vs-input v-model="user.password" name="password" label="Senha" type="password" />
							<vs-input
								v-model="user.confirmPassword"
								name="confirm_password"
								label="Confirme sua senha"
								type="password"
							/>
						</div>
						<vs-checkbox
							name="terms"
							label="Ao criar uma conta, concordo com a Política de Privacidade & Termos de Uso"
							v-model="hasAcceptedTerms"
						/>
						<vs-button
							:disabled="!isFormValid"
							label="Cadastrar"
							block
							@click="handleRegisterUser"
						/>
							
					</div>
				</div>

				<div class="lt-sm:mt-8 flex">
					<p class="mr-2 cursor-default text-neutral-500">Já possui uma conta?</p>
					<nuxt-link to="/" class="fw-semibold text-indigo-500">Acesse agora mesmo!</nuxt-link>
				</div>
			</div>
		</div>
	</div>
	<loader-component :display-loading="loading.register" />
</template>
