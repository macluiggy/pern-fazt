const path = require("path");
const webpack = require("webpack");
const CURRENT_WORKING_DIR = process.cwd();

//rules
const rulesForJavaScript = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: ["babel-loader"],
};
const rulesForCSS = {
  test: /\.s[ac]ss$/i,
  use: ["style-loader", "css-loader", "sass-loader"],
};
const rulesForTypeScript = {
  test: /\.tsx?$/,
  use: "ts-loader",
  exclude: /node_modules/,
};

const config = {
  name: "browser",
  mode: "development",
  devtool: "eval-source-map",
  entry: [
    "webpack-hot-middleware/client?reload=true",
    path.join(CURRENT_WORKING_DIR, "client/main.js"),
  ],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [rulesForJavaScript, rulesForCSS, rulesForTypeScript],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

module.exports = config;
