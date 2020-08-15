const path = require('path');

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
        contentBase: path.join(__dirname,'dist'),
        port:9000
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'js/', name: '[name].js'}
                    },
                    {
                        loader: 'babel-loader',
                        options:{
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: 'css/', name: '[name].css'}
                    },
                    'sass-loader'
                ]
            }
        ]
    }
};