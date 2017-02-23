var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        'react-hot-loader/patch',
        './src'
    ],
    output: {
        filename: "build/bundle.js",
        sourceMapFilename: "build/bundle.map"
    },
    devtool: "#source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'react-hmre'],
                }
            }
        ]
    },
    plugins: [
	   new webpack.HotModuleReplacementPlugin()
	]
}