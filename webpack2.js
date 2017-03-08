/**
 * Created by liut on 2017/2/22.
 */
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: './src/main.es6',
    output: {
        path: "bin",
        filename: 'main.js'
    },
    resolve: {
        //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
        extensions: [".tsx", ".ts", '.es6',".js", ".json", ".jsx", ".css" ],
        //模块别名定义，方便后续直接引用别名，无须多写长长的地址
        alias: {
            // img: path.join(__dirname, './web/public/zsm/img/'),
            // web: path.join(__dirname, "./web/public"),
        },
        modules: [
            path.resolve(__dirname, "src")
        ],
    },

    module: {
        rules: [
            {
                test: /\.(es6)$/,
                exclude: /node_modules/,
                loader: 'babel-loader?presets[]=es2015',
                /*options: {
                 'presets': ['es2015'],
                 }*/
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',

            },
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.(png|jpg|gif|mp3)$/, loader: 'url-loader?limit=2024000000'}
        ]
    },
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({ sourceMap: true, warnings: true, minimize: true}),
    ]
};

module.exports = config;