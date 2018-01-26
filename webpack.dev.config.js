const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 入口文件
    entry: [
        'react-hot-loader/patch', path.join(__dirname, 'src/index.js')
    ],
    // 出口文件，bundle.js
    output: {
        path: path.join(__dirname, './dist'),
        // filename: '[name].[hash].js', chunkFilename: '[name].[chunkhash].js'
        filename: '[name].js',
        chunkFilename: '[name].js'
    },
    resolve: {
        alias: {
            // component: path.join(__dirname, 'src/component'), router:
            // path.join(__dirname, 'src/router')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, 'src')
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }, {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 小于8k的图片被转成base64图片，直接嵌入到Html当中
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        port: 4100,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    devtool: 'inline-source-map',
    plugins: [     
        new HtmlWebpackPlugin({         
            filename: 'index.html',
            template: path.join(__dirname, 'src/index.html')     
        }) 
    ]
}