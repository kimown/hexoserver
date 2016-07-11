'use strict';
var webpack = require('webpack');

const path = require('path');


module.exports = {
    entry: {
        app:buildEntryPoint('./assets/app/index.js')
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "",
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.md$/,
                loader: "html!markdown-hexo-loader"
            },
            {
                test: /\.js$/,
                //exclude: /node_modules/,
                //attention : https://github.com/webpack/webpack/issues/632
                include: path.join(__dirname, "assets"),
                loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react']
            },
            {
                //  https://github.com/webpack/webpack/issues/965
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    },
    resolve: {
        extensions: [ '', '.js']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};


/**
 * rf:http://stackoverflow.com/questions/31844343/how-to-use-webpack-dev-server-multiple-entries-point
 * @param entryPoint
 * @returns {*[]}
 */
function buildEntryPoint(entryPoint){
    return [
        'webpack-dev-server/client?http://localhost:4001',
        'webpack/hot/dev-server',
        entryPoint
    ]
}

