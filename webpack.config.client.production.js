const path = require("path");
const CURRENT_WORKING_DIR = process.cwd();

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
  mode: "production",
  entry: [path.join(CURRENT_WORKING_DIR, "client/main.tsx")],
  output: {
    path: path.join(CURRENT_WORKING_DIR, "/dist"),
    filename: "bundle.js",
    publicPath: "/dist/",
  },
  module: {
    rules: [rulesForJavaScript, rulesForCSS, rulesForTypeScript],
  },
  resolve: {
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};

module.exports = config;
