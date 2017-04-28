const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: path.join(__dirname, 'app.js'),
  output: {
    path: path.join(__dirname, '__build__'),
    filename: 'bundle.js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/__build__/'
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'shared',
      filename: 'shared.js'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]

}
