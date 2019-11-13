webpack = require("webpack");
const MODE = "development";
const enabledSourceMap = MODE === "development";
const path = require("path");

module.exports = {
  mode: MODE,

  entry: ["./src/index.js"],

  devServer: {
    contentBase: path.join(__dirname, "dist"),
    watchContentBase: true,
    open: true
  }
};
