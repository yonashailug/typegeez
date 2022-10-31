const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = { 
  mode: 'development',
  entry: path.resolve('./src/index.js'),
  output: { path: path.resolve('./public') },
  plugins: [ 
    new HtmlWebpackPlugin({ inject: true, template: path.resolve('./src/index.html') })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /\.module\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
    ]
  },
  devServer: { 
    compress: true,
    static: { directory: path.resolve('./public') },
    historyApiFallback: { index: '/' },
    host: 'localhost',
    port: 4001,
  },
  devtool: 'source-map',
}