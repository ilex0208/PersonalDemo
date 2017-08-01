/**
 * webpack 打包配置文件
 * @author ilex
 */
const {OpenUrlPlugins, browser} = require('ray-plugins');
var amosConfig = require('amos-build/lib/amosConfig');

var _ENV_ = process.env.NODE_ENV || 'development';

amosConfig.name = 'intelligentDespatch';

// ------------------------------------
// 入口点
// ------------------------------------
amosConfig.entry = {
  index: './entry.js'
};

// ------------------------------------
// 添加externals
// ------------------------------------
amosConfig.externals = {};

if('development' === _ENV_){
  amosConfig.devServer = {
    colors: true,
    contentBase: '.',
    historyApiFallback: true,
    inline: true,
    progress: true,
    hot: true,
    port: 9900,
    host: '0.0.0.0'
  };
  amosConfig.plugins.push(
    new OpenUrlPlugins({url: 'http://localhost:9900', browser: browser.chrome}) // browser.chrome | browser.firefox
  );
}

module.exports = amosConfig;
