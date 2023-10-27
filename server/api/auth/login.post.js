import {route} from '~~/server/routes-dictionary.js'
const runtimeConfig = useRuntimeConfig()

export default defineEventHandler(async event => {
	try {
		const API_URL = runtimeConfig.API_URL_SERVER
		const userData = await readBody(event)
		const REQUEST_URL = `${API_URL}/${route.AuthLogin}`

		const response = await $fetch(REQUEST_URL, {
			method: 'POST',
			body: JSON.stringify(userData),
		})

		return response
	} catch (error) {
		console.error('[POST] login error => ', error)
	}
})
