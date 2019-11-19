const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: './src/html/index.html',
        hot: true,
        port: 3000
    }
})