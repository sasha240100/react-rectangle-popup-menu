import path from 'path';
import express from 'express';
import webpack from 'webpack';

export default {
  entry: {
    index: './src/index.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build/')
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [ 'url-loader' ]
      }
    ]
  },

  externals: {
    'react-rectangle-popup-menu': 'window.ReactRectanglePopupMenu'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  devServer: {
    contentBase: './',
    publicPath: '/build',
    port: 8080,
    before(app, server) {
      app.use('/library', express.static(path.resolve(__dirname, '../build/')))
    }
  }
};
