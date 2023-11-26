<script setup>
	const currentYear = ref(null)

	const showPassword = ref(false)
	const showConfirmPassword = ref(false)

	function toggleShowPassword() {
		showPassword.value = !showPassword.value
	}

	function toggleShowConfirmPassword() {
		showConfirmPassword.value = !showConfirmPassword.value
	}

	onMounted(() => {
		currentYear.value = new Date().getFullYear()
	})

	definePageMeta({
		// to not use the default layout
		layout: '',
	})
</script>

<template>
	<div class="bg-white">
		<div class="flex min-h-screen flex-col md:flex-row">
			<!-- Left Side -->
			<div
				class="lt-sm:hidden w-6/10 flex min-h-screen flex-col items-center justify-between bg-indigo-500 p-4 text-white"
			>
				<!-- Placeholder div for alignment -->
				<div></div>
				<NuxtImg src="/images/landing-page/background.svg" class="h-auto w-full max-w-md" />
				<p class="cursor-default text-white">© {{ currentYear }}</p>
			</div>

			<!-- Right Side -->
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
						<div>
							<label class="block text-left text-neutral-500">Nome completo</label>
							<input
								type="text"
								class="w-full rounded-lg border border-gray-200 px-4 py-4 text-neutral-500"
								placeholder="John Doe"
							/>
						</div>
						<div class="lt-sm:flex-col flex gap-4">
							<div class="w-full md:w-1/2">
								<label class="block text-left text-neutral-500">Nome de usuário</label>
								<input
									type="text"
									class="w-full rounded-lg border border-gray-200 px-4 py-4 text-neutral-500"
									placeholder="@john_doe"
								/>
							</div>
							<div class="w-full md:w-1/2">
								<label class="block text-left text-neutral-500">Data de nascimento</label>
								<input
									type="date"
									class="w-full rounded-lg border border-gray-200 px-4 py-4 text-neutral-500"
								/>
							</div>
						</div>
						<div>
							<label class="block text-left text-neutral-500">Email</label>
							<input
								type="email"
								class="w-full rounded-lg border border-gray-200 px-4 py-4 text-neutral-500"
								placeholder="email@abc.com.br"
							/>
						</div>
						<div class="lt-sm:flex-col flex gap-4">
							<div class="relative w-full md:w-1/2">
								<label class="block text-left text-neutral-500">Senha</label>
								<input
									:type="showPassword ? 'text' : 'password'"
									class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 text-neutral-500"
								/>
								<div
									class="absolute right-0 top-1/2 flex transform cursor-pointer items-center pr-3"
									@click="toggleShowPassword"
								>
									<Icon
										:name="showPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
										class="h-6 w-6 text-neutral-500"
									/>
								</div>
							</div>
							<div class="relative w-full md:w-1/2">
								<label class="block text-left text-neutral-500">Confirme sua senha</label>
								<input
									:type="showConfirmPassword ? 'text' : 'password'"
									class="w-full rounded-lg border border-gray-200 px-4 py-2 pr-10 text-neutral-500"
								/>
								<div
									class="absolute right-0 top-1/2 flex transform cursor-pointer items-center pr-3"
									@click="toggleShowConfirmPassword"
								>
									<Icon
										:name="showConfirmPassword ? 'mdi:eye-off-outline' : 'mdi:eye-outline'"
										class="h-6 w-6 text-neutral-500"
									/>
								</div>
							</div>
						</div>

						<div class="flex items-center">
							<input type="checkbox" class="mr-2" />
							<span class="cursor-default text-xs font-semibold text-neutral-500">
								Ao criar uma conta, concordo com a
								<span class="text-indigo-500">Política de Privacidade</span>
								&
								<span class="text-indigo-500">Termos de Uso</span>
								.
							</span>
						</div>
						<button class="w-full rounded-lg bg-indigo-500 py-4 text-white hover:bg-indigo-700">
							Cadastrar
						</button>
					</div>
				</div>

				<div class="lt-sm:mt-8 flex">
					<p class="mr-2 cursor-default text-neutral-500">Já possui uma conta?</p>
					<nuxt-link to="/" class="fw-semibold text-indigo-500">Acesse agora mesmo!</nuxt-link>
				</div>
			</div>
		</div>
	</div>
</template>
