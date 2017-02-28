var htmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    entry: {
        js: './js.js',
        js2: './js2.js'
    },
    output: {
        path: './dist/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.(png|jpg|gif|svg)$/i, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: 'index.html',
            filename: 'index.html',
            chunks: ['js']
        }),
        new htmlWebpackPlugin({
            template: 'index2.html',
            filename: 'index2.html',
            chunks: ['js2']
        })
    ]
}