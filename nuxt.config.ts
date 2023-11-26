import {sentryVitePlugin} from '@sentry/vite-plugin'

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

	css: ['~/assets/styles/main.css', '@unocss/reset/tailwind.css'],

	modules: [
		'nuxt-icon',
		'@unocss/nuxt',
		'@nuxtjs/color-mode',
		'@nuxtjs/device',
		'nuxt-primevue',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'@nuxt/image',
		'floating-vue/nuxt',
	],

	imports: {
		dirs: ['./stores'],
	},

	pinia: {
		autoImports: ['defineStore', 'acceptHMRUpdate'],
	},

	primevue: {
		options: {
			ripple: true,
			inputStyle: 'filled',
		},
		importPT: {as: 'Tailwind', from: 'primevue/passthrough/tailwind'},
		components: {
			prefix: 'Prime',
			exclude: ['Editor', 'Chart'],
		},
	},

	device: {
		refreshOnResize: true,
	},

	colorMode: {
		classSuffix: '',
		preference: 'light',
	},

	tailwindcss: {
		viewer: false,
	},

	experimental: {
		viewTransition: true,
	},

	build: {
		transpile: ['swiper', 'primevue'],
	},

	vue: {
		compilerOptions: {
			isCustomElement: tag => /swiper-slide|swiper-container/.test(tag),
		},
	},

	runtimeConfig: {
		public: {
			api_url: process.env.NUXT_PUBLIC_API_BASE,
			environment: process.env.NUXT_PUBLIC_ENVIRONMENT,
			sentry: {
				dsn: process.env.NUXT_PUBLIC_SENTRY_DSN,
			},
		},
	},

	vite: {
		build: {
			sourcemap: true,
		},
		plugins: [
			// Sentry Vite plugin needs to be after all other plugins.
			sentryVitePlugin({
				org: 'dev-projects-jh',
				project: 'front',
				authToken: process.env.NUXT_SENTRY_AUTH_TOKEN,
				telemetry: false,
			}),
		],
	},

	sourcemap: {
		server: true,
		client: true,
	},

	devtools: {
		enabled: false,
	},
})
