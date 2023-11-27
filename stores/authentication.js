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
			} catch (error) {
				console.error('[POST] register error => ', error)

				if (error.response.data?.duplicatedField === 'email') {
					toast.warning('E-mail já cadastrado!')
				} else {
					$sentry.captureException(error)

					toast.error('Erro ao realizar cadastro, tente novamente mais tarde!')
				}
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
