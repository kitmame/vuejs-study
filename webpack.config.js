'use strict';

var webpack = require('webpack');

module.exports = {

  entry: './main.js',

  output: {
    path: './assets',
    // publicPath は webpack-dev-server で自動コンパイルするために必要（URLにおけるJSファイルへのパスを書く）
    publicPath: '/assets/',
    filename: 'app.js',
    //filename: 'app-[chunkhash].js',
  },

  devtool: 'source-map',

  module: {
    loaders: [
      { test: /\.vue$/, loader: 'vue' },
    ]
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      comments: false,
    }),
  ]
};
