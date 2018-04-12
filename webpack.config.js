const webpack = require("webpack");

module.exports = {
  entry: "./src/index.ts",
  output: {
    libraryTarget: "umd",
    library: "uri-parse-lib",
    filename: "./dist/uri-parse-lib.js"
  },
  target: "node",
  devtool: "source-map",
  resolve: {
    extensions: ['s', ".webpack.js", ".web.js", ".ts", ".js"],
    modules: ["src", "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(require("./package.json").version),
    }),
  ]
};