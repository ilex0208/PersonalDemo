/**
 * webpack 打包配置文件
 * @author ilex
 */
const { OpenUrlPlugins, browser, tools } = require('ray-plugins');
var simpleConfig = require('amos-build/lib/simpleConfig');

var _ENV_ = process.env.NODE_ENV || 'development';

// 启动端口
const port = 3008;

var config = {
  tpl: './tpl.html',
  toFile: 'index.html',
  port: port,
  sourceMap: true
};

var defaultConfig = simpleConfig(config);

defaultConfig.name = 'intelligentDespatch';

// ------------------------------------
// 入口点
// ------------------------------------
defaultConfig.entry = {
  index: './index.js'
};

if('development' === _ENV_){
  defaultConfig.devServer = {
    colors: true,
    contentBase: '.',
    historyApiFallback: true,
    inline: true,
    progress: true,
    hot: true,
    port: port,
    host: '0.0.0.0'
  };
  defaultConfig.plugins.push(
    new OpenUrlPlugins({url: 'http://localhost:' + port, browser: browser.chrome}) // browser.chrome | browser.firefox
  );
}

module.exports = defaultConfig;
