const webpack = require('webpack');
const path = require('path');
const root = path.normalize(path.join(__dirname, '../'));

module.exports = function(env) {
	const config = {
		entry: {
			'app': [
				'react-hot-loader/patch',
				path.join(root, 'src/app.js')
			]
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NamedModulesPlugin()
		],
		devtool: 'inline-source-map',
		devServer: {
			hot: true,
			inline: true,
			historyApiFallback: true,
			compress: true,
			noInfo: true,
			contentBase: path.join(root, 'public'),
			publicPath: '/'
		}
	};


	return config;
};