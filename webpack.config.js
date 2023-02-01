const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|browser_components)/,
                loader: 'babel-loader',
                options: { presets: ['@babel/env'] }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.(png|jpg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /.svg/,
                type: 'asset/inline'
            }
        ]
    },
    resolve: { extensions: ['*', '.js', '.jsx'] },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    devServer: {
        open: true,
        port: 3000,
        compress: true,
        static: {
            directory: path.join(__dirname, 'public'),
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
            }
        }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
};
