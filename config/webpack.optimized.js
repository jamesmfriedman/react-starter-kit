const webpack = require('webpack');

module.exports = function(env) {
	return {
		devtool: false,
		plugins: [
			new webpack.optimize.CommonsChunkPlugin({
				name: 'commons',
				filename: 'commons.js'
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
					screw_ie8: true
				},
				comments: false
			})
		]
	};
};