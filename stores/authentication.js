import {defineStore} from 'pinia'

export const useAuthStore = defineStore({
	id: 'auth-store',
	persist: {
		storage: persistedState.localStorage,
	},
	state() {
		return {
			user: null,
		}
	},
	actions: {
		addValueToFilterList(value) {
			this.filterList.push(value)
		},
		async doPostLogin(userData) {
			const {data} = await useFetch('/api/auth/login', {
				method: 'POST',
				body: JSON.stringify(userData),
			})

			this.user = data.value.user ?? null
			this.accessToken = data.value.token ?? null
		},
		async doGetMe() {
			const {data} = await useFetch('/api/auth/me', {
				method: 'GET',
			})

			this.user = data.value.user ?? null
		},
	},
	getters: {
		getUser: state => state.user,
	},
})

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}
