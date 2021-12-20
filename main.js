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

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import VXETablePluginElement from 'vxe-table-plugin-element'
import 'vxe-table-plugin-element/dist/style.css'
VXETable.use(VXETablePluginElement)

VXETable.setup({
	i18n: (key, args) => i18n.t(key, args)
})

// 自定义全局的格式化处理函数
VXETable.formats.mixin({
	formatSex({
		cellValue
	}) {
		return 1 == cellValue ? '男' : 2 == cellValue ? '女' : '未知'
	},
	formatDateTime({
		cellValue
	}) {
		return utils.toDateString(cellValue, 'yyyy-MM-dd HH:mm:ss')
	},
	formatDate({
		cellValue
	}) {
		return utils.toDateString(cellValue, 'yyyy-MM-dd')
	},
	formatTime({
		cellValue
	}) {
		return utils.toDateString(cellValue, 'HH:mm:ss')
	},
})

Vue.use(VXETable)

Vue.prototype.$print = VXETable.print
Vue.prototype.$readFile = VXETable.readFile
Vue.prototype.$saveFile = VXETable.saveFile

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
