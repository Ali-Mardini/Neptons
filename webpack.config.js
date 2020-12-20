const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: 'development',
    entry: [
        './src/index.js',
        './src/scss/main.scss'
    ],
    output:{
        filename: 'main.js',
        path: path.resolve(__dirname,'dist')
    },
    devServer:{
        contentBase: path.join(__dirname,'dist')
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:[
                    'file-loader'
                ]
            },
            {
                test: /\.(eot|otf|woff|woff2|ttf)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'fonts/',
                        name: '[name].[hash].[ext]',
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    {                    
                        loader: 'file-loader',
                        options: {outputPath: 'css/', name: '[name].css'}
                    },
                    'sass-loader'
                ]
            }
            
        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ]
}