export default {
	state: {
		token: uni.getStorageSync('token')
	},
	getters: {

	},
	mutations: {
		setToken(state, token) {
			state.token = token
			uni.setStorageSync('token', token)
		},
		clearToken(state) {
			state.token = null
			uni.removeStorageSync('token')
		}
	},
	actions: {

	}
}
