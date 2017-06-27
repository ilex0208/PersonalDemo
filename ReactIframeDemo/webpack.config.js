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
  index: './index.js'
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
    port: 9001,
    host: '0.0.0.0'
  };
  amosConfig.plugins.push(
    new OpenUrlPlugins({url: 'http://localhost:9001', browser: browser.chrome}) // browser.chrome | browser.firefox
  );
}

module.exports = amosConfig;
