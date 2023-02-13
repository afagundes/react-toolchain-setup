const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin()],
    devServer: {
        port: 3000,
        hot: true,
        compress: true,
        static: path.join(__dirname, 'dist'),
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    },
});
