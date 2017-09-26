const path = require('path')
const lodash = require('lodash')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (profile = {}) => {
  const settings = lodash.merge({
    devtool: 'eval',
    entry: {
      app: './src/index.js'
    },
    devServer: {
      hot: true,
      inline: true,
      host: '0.0.0.0',
      port: process.env.PORT || 3000,
      publicPath: '/',
      disableHostCheck: true,
      historyApiFallback: true,
      contentBase: path.resolve(__dirname, 'dist')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      filename: 'app.[hash].js'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: [
              'env',
              'stage-0',
              'react'
            ],
            plugins: [
              'transform-async-to-generator',
              'transform-decorators-legacy'
            ]
          }
        }
      ]
    },
    plugins: [
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({ hash: false, template: './index.hbs' })
    ]
  }, profile.settings)
  // ------------------------------------------------------------
  // plugins & loaders further configurations.
  // ------------------------------------------------------------
  return settings
}
