#! /usr/bin/env node

const compiler = require("./compiler");
const server = require("live-server");

let serverStarted = false;

compiler.watch({
  devtool: "inline-source-map"
}, (error, data) => {
  if (!serverStarted) {
    startServer();
  }
});

function startServer() {
  // Serve the application
  server.start({
    watch: ["build", "dist", "index.html"]
  });
  serverStarted = true;
}
