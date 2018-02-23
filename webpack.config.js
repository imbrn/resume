const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "dist/"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      },
      {
        test: /\.svg$/,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        },
        resourceQuery: /(ext|external)/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      GITHUB_LINK: JSON.stringify("https://github.com/bruno02221/resume")
    })
  ]
};