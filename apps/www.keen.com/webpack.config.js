/* eslint-disable no-undef */
const HtmlWebPackPlugin = require("html-webpack-plugin");
const InterpolateHtmlPlugin = require("interpolate-html-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: "./src/index.jsx",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
    new InterpolateHtmlPlugin({
      PUBLIC_URL: "./public",
    }),
  ],
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
