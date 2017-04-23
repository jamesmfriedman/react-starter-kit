const webpack = require('webpack');
const path = require('path');
const root = path.normalize(path.join(__dirname, '../'));
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env) {
    const config = {
        entry: {
            'styles': path.join(root, 'src/styles.js'),
            'polyfills': path.join(root, 'src/polyfills.js'),
            'vendors': path.join(root, 'src/vendors.js'),
            'app': path.join(root, 'src/app.js'),
        },
        output: {
            filename: '[name].[hash].js',
            path: path.join(root, 'public'),
            publicPath: '/',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: 'src/index.ejs'
            }),
            new webpack.ProvidePlugin({
                'React': 'react',
                'ReactDOM': 'react-dom'
            })
        ],
        
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
}