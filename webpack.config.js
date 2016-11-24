'use strict';

const webpack = require("webpack");
const path = require("path");

module.exports = {
  //context: __dirname,
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: "bundle.js"
  },
  devServer: {
    contentBase: __dirname,
  },
  resolve: {
    alias: {vue: 'vue/dist/vue.js'},
    extensions: ['.js', '.scss', '.vue'],
    modules: [
      path.join(__dirname, "src"), 
      "node_modules"
    ],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /.vue$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["latest"] }
          }
        ],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader", 
          "css-loader",
          "sass-loader"
        ],
      }
    ]
  },
};