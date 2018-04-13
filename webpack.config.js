const webpack = require("webpack");
const client = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: "umd",
    library: "parseURI",
    filename: "uri-parse-lib.node.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: 'node',
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

const server = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: "umd",
    library: "parseURI",
    filename: "uri-parse-lib.js"
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  target: 'web',
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
module.exports = [client, server]