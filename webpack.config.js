const dotenv = require('dotenv');
const path = require("path");
const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// load ".env"
dotenv.config();

module.exports = {
  mode: 'development',
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js"
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      rewrites: [
        { from: /^\/scrivito$/, to: '/scrivito/index.html' },
        { from: /^\/scrivito\//, to: '/scrivito/index.html' },
        { from: /./, to: '/index.html' },
      ],
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        include: __dirname + "/src/css",
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
         loader: "source-map-loader"
      }
    ]
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      SCRIVITO_TENANT: '',
    }),
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    }),
    new CopyWebpackPlugin([
      { from: './public' },
      { from: './node_modules/scrivito/scrivito/index.html', to: 'scrivito/index.html' },
    ]),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css"
    })
  ]
};
