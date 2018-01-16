const path = require("path");

module.exports = {
  entry: "./main.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js"
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
        exclude: /(node_modules)/,
        loader: ["style-loader", "css-loader", "postcss-loader"]
      }
    ]
  },
  devtool: "inline-source-map"
};