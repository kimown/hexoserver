/**
 * Created by kimown on 4/23/16.
 *
 * doc:  https://webpack.github.io/docs/webpack-dev-server.html
 */

'use strict';

const path = require('path');

let webpack = require('webpack');
let WebpackDevServer = require('webpack-dev-server');
let config = require('./webpack.config');




function devServer (base) {
    let customConfig = _customConfig(config,base);
    let contentBase = path.join(base,'public');

    let server = new WebpackDevServer(webpack(customConfig), {

        //serve static file in public directory
        contentBase: contentBase,

        //todo  delete??
        publicPath: '',

        // hot module replacement
        hot: true,

        //unknown
        historyApiFallback: true,

        //noInfo: true
        stats: { colors: true },

        headers:{
            'Access-Control-Allow-Origin':'*'
        },
        proxy: {
            '/*': {
                target: 'http://localhost:4001',
                bypass: function(req,res) {
                    //by pass static file,eg :.js .css .md
                    //todo  check static files
                    //todo inject js to html.
                    if(req.url=="/js/script.js"){
                        return "/app.js";
                    }else if(req.url.includes('.')){
                        return req.url;
                    }else{
                        return req.url+'/index.html';
                    }
                }
            }
        }


    });

    server.listen(4001, 'localhost', function (err, result) {
        if (err) console.log(err);
        console.log('Listening at localhost:4001');
    });

}



function _customConfig (config, base) {
    //set absolute path for assets
    config.entry.app[2] = path.join(base, "node_modules", "hexoserver",config.entry.app[2]);

    config.resolve.root = [base];

    return config;
}



module.exports = devServer;




