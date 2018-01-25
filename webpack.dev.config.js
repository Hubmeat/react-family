const path = require('path');

module.exports = {
    // 入口文件
    entry: [
        'react-hot-loader/patch',
        path.join(__dirname, 'src/index.js')
    ],
    // 出口文件，bundle.js
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            // component: path.join(__dirname, 'src/component'),
            // router: path.join(__dirname, 'src/router')
        }
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader?cacheDirectory=true'],
            include: path.join(__dirname, 'src')
        }]
    },
    devServer: {
        port: 9090,
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        host: '0.0.0.0'
    },
    plugins: [

    ]
}