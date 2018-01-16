#! /usr/bin/env node

const webpack = require("webpack");
const config = require("../webpack.config.js");

const argv = require("yargs")
  .default("lang", "en")
  .default("template", "elegant").argv;

const compiler = webpack(config);

new webpack.DefinePlugin({
  LANG: JSON.stringify(argv.lang),
  TEMPLATE: JSON.stringify(argv.template)
}).apply(compiler);

module.exports = compiler;
