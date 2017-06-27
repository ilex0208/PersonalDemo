var express = require('express');
var app = express();

//设置静态文件目录
app.use(express.static(__dirname + '/'));

//设置任意路由都返回html
app.get('*', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

//创建服务器
app.listen(3100, function() {
  console.log('请在浏览器中打开：http://localhost:3100/');
});
