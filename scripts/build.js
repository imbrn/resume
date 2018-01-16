#! /usr/bin/env node

const compiler = require("./compiler");

compiler.run((error, data) => {
  if (!error) {
    console.log("Compiled with success");
  } else {
    console.log("Failed", error);
  }
});