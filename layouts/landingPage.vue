<template>
	<div class="grid grid-flow-col grid-rows-4 gap-4">
		<div class="bg-lavender row-span-4 flex min-h-screen flex-col items-center justify-between p-8">
			<LogoComponent first-word="Your" color="lavender" />
			<NuxtImg src="/images/landing-page/background.svg" />
			<p class="color-white">© {{ new Date().getFullYear() }}</p>
		</div>
		<div class="col-span-2">02</div>
		<div class="col-span-2 row-span-3">
			<slot />
		</div>
	</div>
</template>
