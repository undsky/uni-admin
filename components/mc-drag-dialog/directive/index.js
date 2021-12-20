import Vue from 'vue'
import drag from './drag'

const install = function(Vue) {
	Vue.directive('drag-dialog', drag)
}

window['drag-dialog'] = drag
Vue.use(install); // eslint-disable-line

drag.install = install
export default drag
