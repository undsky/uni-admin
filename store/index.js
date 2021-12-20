import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth.js'
import i18n from './modules/i18n.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		auth,
		i18n
	}
})

export default store
