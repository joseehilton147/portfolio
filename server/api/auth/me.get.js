import {route} from '~~/server/routes-dictionary.js'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async () => {
	try {
		const API_URL = runtimeConfig.API_URL_SERVER
		const REQUEST_URL = `${API_URL}/${route.AuthMe}`

		const response = await $fetch(REQUEST_URL)

		return response
	} catch (error) {
		console.error('[GET] auth me error => ', error)
	}
})
