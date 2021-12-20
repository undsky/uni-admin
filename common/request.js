import Request from 'luch-request'
import store from '../store/index.js'
import _config from './config.js'

const http = new Request(_config.request)

http.interceptors.request.use(async config => {
	if (config.custom.auth) {
		const token = store.state.auth.token
		if (!token) {
			uni.reLaunch({
				url: '/pages/login/login'
			})
			return Promise.reject(config)
		}
		config.header.Authorization = 'Bearer ' + token
	}
	return config
}, async config => {
	return Promise.reject(config)
})

http.interceptors.response.use(async response => {
	if ('development' === process.env.NODE_ENV) {
		console.log(response)
	}
	const {
		code,
		data
	} = response.data

	if (200 == code) {
		return data
	}

	return Promise.reject(response)
}, async response => {
	if (response.data && ['credentials_required', 'invalid_token', 'revoked_token'].includes(response
			.data.code)) {
		store.commit('clearToken')
		uni.reLaunch({
			url: '/pages/login/login'
		})
	}
	return Promise.reject(response)
})

function get(url, params, options) {
	return http.get(url, Object.assign({}, {
		params
	}, false === options ? {
		custom: {
			auth: false
		}
	} : options))
}

async function post(url, data, options) {
	return await http.post(url, data, false === options ? {
		custom: {
			auth: false
		}
	} : options)
}

function upload(url, options) {
	return http.upload(url, options)
}

function download(url, options) {
	return http.download(url, options)
}

export default {
	get,
	post,
	upload,
	download
}
