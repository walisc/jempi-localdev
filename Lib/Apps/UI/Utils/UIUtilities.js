const baseConfig = require('../webpack.config')
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');


const UIUtils = {
    GetWebpackConfig: (extraConfig) => {
        return {...baseConfig, ...extraConfig}
    },

    GetWebpackDevServer: (compiler, devServerOptions) => {
        return new webpackDevServer(devServerOptions, compiler); 
    },

    GetCompilier: (config) => {
        return webpack(config);
    }
}

module.exports = UIUtils