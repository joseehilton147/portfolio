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
		tracesSampleRate: 1.0,
		replaysSessionSampleRate: 1.0,
		replaysOnErrorSampleRate: 1.0,
	})
	return {
		provide: {
			sentry: Sentry,
		},
	}
})
