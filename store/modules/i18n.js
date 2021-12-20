import {
	getLanguage
} from '@/i18n/index'

export default {
	state: {
		language: getLanguage()
	},
	getters: {

	},
	mutations: {
		setLanguage(state, language) {
			state.language = language
			uni.setStorageSync('language', language)
		}
	},
	actions: {

	}
}
