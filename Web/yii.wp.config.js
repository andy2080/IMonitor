module.exports = require('./webpack.make.config')({
  dir: './yii',
  staticPath: 'static',
  outputHTML: 'views/index.html',
  //publicPath: '',

  sourcemaps: false,
  //devtool: 'cheap-module-eval-source-map',
  devtool: '',
  minimize: false,
  chunk: true
});