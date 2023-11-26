import * as Sentry from '@sentry/vue'

export default defineNuxtPlugin(nuxtApp => {
	const router = useRouter()
	const runtimeConfig = useRuntimeConfig()

	if (!runtimeConfig.public.sentry.dsn) {
		return
	}

	Sentry.init({
		app: nuxtApp.vueApp,
		dsn: runtimeConfig.public.sentry.dsn,
		environment: runtimeConfig.public.environment,
		integrations: [
			new Sentry.BrowserTracing({
				routingInstrumentation: Sentry.vueRouterInstrumentation(router),
			}),
			new Sentry.Replay(),
		],

		// Configure this whole part as you need it!

		tracesSampleRate: 1.0, // Change in prod

		// Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
		tracePropagationTargets: ['localhost'],

		replaysSessionSampleRate: 1.0, // Change in prod
		replaysOnErrorSampleRate: 1.0, // Change in prod if necessary
	})
})
