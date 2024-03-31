const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, './public'),
    // filename: 'bundle.js',
    filename: '[name].[contenthash].js',
    clean: true,
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ 
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      hash: true,
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    port: 3000,
    compress: true,
    hot: true,
    open: true,
    historyApiFallback: true,

    proxy: [
      {
        context: ["/users/**"],
        target: 'http://localhost:8000',
        secure: false,
        changeOrigin: true,
      },
    ],
  }
};