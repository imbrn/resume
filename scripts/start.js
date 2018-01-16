#! /usr/bin/env node

const compiler = require("./compiler");
const server = require("live-server");

let serverStarted = false;

compiler.watch({}, (error, data) => {
  if (!serverStarted) {
    startServer();
  }
});

function startServer() {
  // Serve the application
  server.start({
    watch: ["build", "index.html"]
  });
  serverStarted = true;
}
