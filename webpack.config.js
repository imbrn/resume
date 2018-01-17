const path = require("path");

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
        test: /\.(jpg|svg)$/,
        loader: "file-loader"
      }
    ]
  }
};