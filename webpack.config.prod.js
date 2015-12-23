'use strict';

let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: [
    './app/app'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, 'app'),
      loaders: [
        'babel'
      ]
    }, { 
      test: /\.css$/, 
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'app.js'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new HtmlWebpackPlugin({
      title: 'Redux Data Table Demo',
      template: './app/app.html'
    }),
    new ExtractTextPlugin("[name].css")
  ]
}; 