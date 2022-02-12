import Vue from 'vue'
import App from './App'

import {
	router,
	RouterMount
} from './router.js'
Vue.use(router)

import i18n from './i18n'

import ElementUI from 'element-ui';
import './element-ui.scss'
Vue.use(ElementUI, {
	i18n: (key, value) => i18n.t(key, value)
})

import utils from './common/utils.js'
Vue.prototype.$utils = utils

import http from './common/request.js'
Vue.prototype.$http = http

import config from './common/config.js'
Vue.prototype.$config = config

import store from './store/index.js'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	i18n,
	...App
})
app.$mount()
