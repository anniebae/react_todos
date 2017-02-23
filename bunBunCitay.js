var webpack = require("webpack");
var webpackDevServer = require("webpack-dev-server");
var config = require("./webpack.config.js");
config.entry.unshift("webpack-dev-server/client?http://localhost:5080/", "webpack/hot/dev-server");
var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  hot: true,
  port: 5080
});
server.listen(5080);