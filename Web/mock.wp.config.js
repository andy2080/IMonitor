module.exports = require('./webpack.make.config')({
    dir: './mock',
    staticPath: 'static',
    outputHTML: 'view/home/index_index.html',
    publicPath: '/',

    sourcemaps: false,
    //devtool: 'cheap-module-eval-source-map',
    devtool: '',
    minimize: false,
    chunk: true
});