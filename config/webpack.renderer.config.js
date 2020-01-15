const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const baseConfig = require('./webpack.base.config');

module.exports = merge.smart(baseConfig, {
    target: 'electron-renderer',
    entry: {
        app: ['@babel/polyfill','./src/renderer/index.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    babelrc: false,
                    presets: [
                        [
                            '@babel/preset-env',
                            { 
                                targets: { 
                                    browsers: 'last 2 versions ' 
                                } 
                            }
                        ],
                        '@babel/preset-typescript',
                        '@babel/preset-react'
                    ],
                    plugins: [
                        [
                            "babel-plugin-styled-components",
                            {
                                "ssr": true,
                                "displayName": true,
                                "preprocess": false
                            }
                        ],
                        '@babel/plugin-proposal-optional-chaining',
                        '@babel/plugin-proposal-nullish-coalescing-operator'
                    ]
                }
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true
                        }
                    }
                ]
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            }
        ]
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            reportFiles: ['src/renderer/**/*']
        }),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        })
    ]
});
