const { resolve } = require("path");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  entry: resolve(__dirname, "src", "index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  loader: {
    rules: []
  },
  serve: {
    open: true,
    port: 8080,
    content: resolve(__dirname, "dist")
  }
};
