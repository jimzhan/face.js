const webpack = require('webpack')

const settings = {

}

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('develop')
    }
  })
]

module.exports = require('./webpack.config')({ settings, plugins })
