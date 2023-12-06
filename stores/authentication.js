import {defineStore} from 'pinia'
import {useToast} from 'vue-toastification'
import api from '@/stores/axios'
import {route} from '@/stores/routes-dictionary'
import {useApiUrl} from '@/composables/useApiUrl'

const toast = useToast()

export const useAuthStore = defineStore({
	id: 'auth-store',
	persist: {
		storage: persistedState.localStorage,
	},
	state() {
		return {
			user: null,
			accessToken: null,
		}
	},
	actions: {
		addValueToFilterList(value) {
			this.filterList.push(value)
		},
		async doPostLogin(userData) {
			const response = await api.post(`${API_URL}/${route.AuthLogin}`, userData).then(res => res.data)

			this.user = response.user ?? null
			this.accessToken = response.token ?? null
		},
		async doGetMe() {
			const response = await api.get(`${API_URL}/${route.AuthMe}`).then(res => res.data)

			this.user = response.user ?? null
		},
		async doPostRegister(userData) {
			const {$sentry} = useNuxtApp()

			try {
				const API_URL = useApiUrl()

				const response = await api.post(`${API_URL}/${route.AuthRegister}`, userData).then(res => res.data)

				this.user = response.user ?? null
				this.accessToken = response.token ?? null

				toast.success('Cadastro realizado com sucesso!')

				// @TODO: Auto login user after successful register
				return response
			} catch (error) {
				const duplicatedField = error.response?.data?.duplicatedField

				if (duplicatedField) {
					const warningMessage =
						duplicatedField === 'email'
							? 'E-mail já cadastrado!'
							: duplicatedField === 'username'
							  ? 'Nome de usuário já cadastrado!'
							  : null

					if (warningMessage) {
						toast.warning(warningMessage)

						return duplicatedField
					}
				}

				toast.error('Erro ao realizar cadastro, tente novamente mais tarde!')

				console.error('[POST] register error => ', error)

				$sentry.captureException(error)
			}
		},
	},
	getters: {
		getUser: state => state.user,
		getAccessToken: state => state.accessToken,
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
