#! /usr/bin/env node

const compiler = require("./compiler");
const webpack = require("webpack");

new webpack.DefinePlugin({
  "NODE_ENV": JSON.stringify("production")
}).apply(compiler);

new webpack.optimize.UglifyJsPlugin({
  warnings: false
}).apply(compiler);

compiler.run((error, data) => {
  if (!error) {
    console.log("Compiled with success");
  } else {
    console.log("Failed", error);
  }
});