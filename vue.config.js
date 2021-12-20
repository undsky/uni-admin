const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TransformPages = require('uni-read-pages')
const {
	webpack
} = new TransformPages()

module.exports = {
	configureWebpack: {
		plugins: [
			new webpack.DefinePlugin({
				ROUTES: webpack.DefinePlugin.runtimeValue(() => {
					const tfPages = new TransformPages({
						includes: ['path', 'name', 'aliasPath']
					});
					return JSON.stringify(tfPages.routes)
				}, true)
			}),
			new CompressionWebpackPlugin({
				filename: "[path][base].gz",
				algorithm: "gzip",
				test: /\.js$/,
				threshold: 512000,
				minRatio: 0.8,
				exclude: /node_modules/,
			})
		]
	}
}
