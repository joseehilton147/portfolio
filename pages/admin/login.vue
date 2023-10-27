<script setup>
	import Bowser from 'bowser'

	const authStore = useAuthStore()

	const user = reactive({
		email: '',
		password: '',
	})

	async function handleLogin() {
		// eslint-disable-next-line import/no-named-as-default-member
		await authStore.doPostLogin({...user, device: Bowser.parse(window.navigator.userAgent)})
	}
</script>

<template>
	<div class="flex min-h-full flex-col justify-center">
		<h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
		<div class="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
			<form class="space-y-6" action="#" method="POST">
				<div>
					<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
					<div class="mt-2">
						<input
							id="email"
							v-model="user.email"
							name="email"
							type="email"
							autocomplete="email"
							required
							class="block w-full rounded-lg border-0 px-6 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 duration-500 placeholder:text-gray-400 focus:ring-indigo-500 focus-visible:outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
					<div class="mt-2">
						<input
							id="password"
							v-model="user.password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-lg border-0 px-6 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 duration-500 placeholder:text-gray-400 focus:ring-indigo-500 focus-visible:outline-none sm:text-sm sm:leading-6"
						/>
					</div>
				</div>

				<div>
					<PrimeButton
						label="Sign in"
						class="w-full rounded-md border-0 bg-indigo-500 py-2 font-medium text-white duration-300 hover:bg-indigo-600 focus:outline-none"
						size="large"
						@click="handleLogin"
					>
						<template #icon>
							<Icon name="line-md:account" class="h-8 w-8" />
						</template>
					</PrimeButton>
				</div>
			</form>
		</div>
	</div>
</template>
