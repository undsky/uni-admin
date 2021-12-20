import Vue from 'vue'
import VueI18n from 'vue-i18n'
import elementEn from 'element-ui/lib/locale/lang/en'
import elementZh from 'element-ui/lib/locale/lang/zh-CN'
import VXETableEn from 'vxe-table/lib/locale/lang/en-US'
import VXETableZh from 'vxe-table/lib/locale/lang/zh-CN'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const messages = {
	en: {
		...en,
		...elementEn,
		...VXETableEn
	},
	zh: {
		...zh,
		...elementZh,
		...VXETableZh
	}
}

export function getLanguage() {
	const chooseLanguage = uni.getStorageSync('language')
	if (chooseLanguage) return chooseLanguage

	const language = (navigator.language || navigator.browserLanguage).toLowerCase()
	const locales = Object.keys(messages)
	for (const locale of locales) {
		if (language.indexOf(locale) > -1) {
			return locale
		}
	}
	return 'zh'
}

const i18n = new VueI18n({
	locale: getLanguage(),
	messages
})

export default i18n
