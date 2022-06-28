const TerserWebpackPlugin = require('terser-webpack-plugin')
module.exports = {
	mode: "none",
	entry: {
		"index": "./src/index.js",
		'index.min': './src/index.js'
	},
	output: {
		clean: true,
		filename: '[name].js',
		library: 'xytils',
		libraryTarget: 'umd',
		libraryExport: 'default'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				// use: ['babel-loader'],
				loader: 'babel-loader',
				include: /src/
			}
		]
	},
  optimization: {
    minimize: true,
    minimizer: [
			new TerserWebpackPlugin({
				test: /min\.js$/
			})
		],
  },
};
