import webpack, { Configuration } from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.client.js";

const compile = (app) => {
  let config = webpackConfig as Configuration;
  if (process.env.NODE_ENV == "development") {
    const compiler = webpack(config) as any;
    const middleware = webpackMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
    });
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
  }
};

export default {
  compile,
};
