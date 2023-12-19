export default defineNuxtConfig({
	app: {
		head: {
			htmlAttrs: {
				lang: 'pt-br',
			},
			meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width, initial-scale=1'}],
			link: [
				{rel: 'preconnect', href: 'https://fonts.gstatic.com'},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
				},
			],
		},
	},

	css: ['~/assets/styles/main.css', '~/assets/styles/code-block.css', '@unocss/reset/tailwind.css'],

	modules: [
		'nuxt-icon',
		'@unocss/nuxt',
		'@nuxtjs/color-mode',
		'@nuxtjs/device',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxt/image',
		'floating-vue/nuxt',
	],

	pinia: {
		storesDirs: ['./stores', 'composables/**'],
	},

	device: {
		refreshOnResize: true,
	},

	colorMode: {
		classSuffix: '',
		preference: 'light',
	},

	experimental: {
		viewTransition: true,
	},

	build: {
		transpile: ['swiper', 'vue-toastification'],
	},

	vue: {
		compilerOptions: {
			isCustomElement: tag => /swiper-slide|swiper-container/.test(tag),
		},
	},

	runtimeConfig: {
		public: {
			api_url: process.env.NUXT_PUBLIC_API_URL,
			environment: process.env.NUXT_PUBLIC_ENVIRONMENT,
		},
	},

	devtools: {
		timeline: {
			enabled: true,
		},
	},
})
