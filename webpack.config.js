var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode:"development",
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  module: {
    rules:[
      {
        test: /\.js/,
        use: ['babel-loader?cacheDirectory'],
        exclude: /node_modules/,
      }
    ]
  }
}
