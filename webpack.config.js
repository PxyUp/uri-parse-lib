const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: "umd",
    library: "parseURI",
    filename: "uri-parse-lib.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  }
};