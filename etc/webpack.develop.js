const webpack = require('webpack');
const merge   = require('webpack-merge');
const chalk   = require('chalk');
const resolve = require('path').resolve;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressPlugin = require('webpack-simple-progress-plugin');
const config = require('./webpack.base');
const root = resolve(__dirname, '..');

module.exports = merge(config, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    hot: true,
    inline: true,
    port: 3000,
    open: true,
    openPage: '',   // fix for `undefined` page.
    contentBase: resolve(root, 'dist'),
    publicPath: '/',
  },
  plugins: [
    new ProgressPlugin({
      messageTemplate: [':bar', chalk.blue(':percent'), ':msg'].join(' '),
      progressOptions: {
        complete: chalk.bgBlue(' '),
        incomplete: chalk.bgWhite(' '),
        width: 40,
        total: 100,
        clear: false
      },
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: '"develop"' }
    }),
    new HtmlWebpackPlugin({
      template: resolve(root, 'src/index.html'),
      inject: true
    }),
  ]
});
