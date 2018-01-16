#! /usr/bin/env node

const webpack = require("webpack");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const config = require("../webpack.config.js");

const argv = require("yargs")
  .default("lang", "en")
  .default("template", "clean").argv;

const compiler = webpack(config);

// Define global variables
new webpack.DefinePlugin({
  LANG: JSON.stringify(argv.lang),
  TEMPLATE: JSON.stringify(argv.template)
}).apply(compiler);

// Clean build folders
new CleanWebpackPlugin(
  [
    path.join(__dirname, "../dist"),
    path.join(__dirname, "../build")
  ],
  {
    allowExternal: true
  }
).apply(compiler);

module.exports = compiler;
