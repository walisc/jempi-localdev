const baseConfig = require('../Templates/webpack.config')
const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

const UIUtils = {
    GetWebpackConfig: (extraConfig) => {
        return {...baseConfig, ...extraConfig}
    },

    GetWebpackDevServer: (compiler, devServerOptions) => {
        return new webpackDevServer(devServerOptions, compiler); 
    },

    GetCompilier: (config) => {
        return webpack(config);
    },
    GetUiEnv: () => {
        return  dotenv.parse(fs.readFileSync(path.join(__dirname, "../uiEnv.env")))
    }
}

module.exports = UIUtils