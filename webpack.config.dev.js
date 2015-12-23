'use strict';
// Hot reloading doesn't work right now due to the fact that 
// React v0.14's stateless components [1] aren't supported yet [2]
// Wasted wayyyy too much time trying to debug this...
// [1] https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html#stateless-functional-components
// [2] https://github.com/gaearon/babel-plugin-react-transform/issues/57
let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
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
    path: path.join(__dirname, 'www'),
    filename: 'app.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'Redux Data Table Demo',
      template: './app/app.html'
    }),
    new ExtractTextPlugin("[name].css")
  ]
}; 