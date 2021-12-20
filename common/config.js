export default {
	cdn: 'https://cdn.cloud.undsky.com',
	request: {
		baseURL: 'development' === process.env.NODE_ENV ? 'http://localhost:7001' : 'https://www.undsky.com',
		custom: {
			auth: true
		}
	}
}
