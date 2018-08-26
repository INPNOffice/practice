const { resolve } = require('path')

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  loader: {
    rules: []
  },
  devServer: {
    port: 8080,
    contentBase: resolve(__dirname, 'dist')
  }
}