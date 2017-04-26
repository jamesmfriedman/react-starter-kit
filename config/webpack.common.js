const webpack = require('webpack');
const path = require('path');
const root = path.normalize(path.join(__dirname, '../'));
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
	const processEnv = Object.assign({}, env, require('./env.' + env.NODE_ENV));

	// no idea why, but standard serialization wasnt working
	const reactSafeEnv = {};
	for (let key in processEnv) {
		reactSafeEnv[key] = `"${processEnv[key]}"`;
	}

	const config = {
		entry: {
			'styles': [path.join(root, 'src/styles.js')],
			'polyfills': [path.join(root, 'src/polyfills.js')],
			'vendors': [path.join(root, 'src/vendors.js')],
			'app': path.join(root, 'src/app.js')
		},
		output: {
			filename: '[name].[hash].js',
			path: path.join(root, 'public'),
			publicPath: '/'
		},
		module: {
			rules: [{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							['es2015', {'modules': false}],
							'react'
						],
						plugins: ['react-hot-loader/babel']
					}
				}
			}]
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/index.ejs'
			}),
			new webpack.ProvidePlugin({
				'React': 'react',
				'ReactDOM': 'react-dom'
			}),
			new webpack.DefinePlugin({
				'process.env': reactSafeEnv
			})
		]
	};

	return config;
};