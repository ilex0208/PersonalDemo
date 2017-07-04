/**
 * webpack 打包配置文件
 * @author ilex
 */

var simpleConfig = require('amos-build/lib/simpleConfig');

// ------------------------------------------------------
// 添加webpack加载别名,用于导包重定向，优化打包以及代码
// 此处需要自己进行定义
// 👻可修改
// ------------------------------------------------------
var alias = {
  // MODEL: __dirname + '/src/model',
  // UTILS: __dirname + '/src/utils',
  // CONSTS: __dirname + '/src/consts'
};

var config = {
  tpl: './tpl.html',
  toFile: 'index.html',
  port: 3000,
  sourceMap: true,
  alias: alias
};

var defaultConfig = simpleConfig(config);

defaultConfig.name = 'amos-init';

// ------------------------------------
// 入口点
// ------------------------------------
defaultConfig.entry = {
  app: './demo.js'
};

// ------------------------------------
// 设置alias的另一种方式
// ------------------------------------
// if(alias){
//   defaultConfig.resolve.alias = alias;
// }

module.exports = defaultConfig;
