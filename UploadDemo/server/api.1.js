var express = require('express');
var app = express();
var router = express.Router();
var upload = require('./upload');

//文件上传服务
router.post('/upload', upload.single('avatar'), function(req, res, next) {
  if (req.file) {
    res.send('文件上传成功!');
    console.log(req.file);
    console.log(req.body);
  }
});

//创建服务器
app.listen(3001, function() {
  console.log('请在浏览器中打开：http://localhost:3001/');
});
