// 页面工具栏
function showJTopoToobar(stage) {
  var toobarDiv = $('<div class="jtopo-toolbar">').html(''
    + '<img src="./img/logo.png" id="logo" ondragstart="return false;">'
    + '<input type="radio" name="modeRadio" value="normal" checked id="r1"/>'
    + '<label for="r1"> 默认</label>'
    + '&nbsp;<input type="radio" name="modeRadio" value="select" id="r2"/><label for="r2"> 框选</label>'
    + '&nbsp;<input type="radio" name="modeRadio" value="drag" id="r3"/><label for="r3"> 平移</label>'
    + '&nbsp;<input type="radio" name="modeRadio" value="edit" id="r4"/><label for="r4"> 编辑</label>'
    + '&nbsp;&nbsp;<div class="img-div"><img class="img-btn" src="./img/center.png" id="centerButton" alt="居中显示" ondragstart="return false;"/>'
    + '<img class="img-btn" src="./img/fullscreen.png" id="fullScreenButton" alt="全屏显示" ondragstart="return false;"/>'
    + '<img class="img-btn" src="./img/zoomIn.png" id="zoomOutButton" alt=" 放 大 " ondragstart="return false;"/>'
    + '<img class="img-btn" src="./img/zoomOut.png" id="zoomInButton" alt=" 缩 小 " ondragstart="return false;"/>'
    + '</div>&nbsp;&nbsp;<input type="checkbox" id="zoomCheckbox"/><label for="zoomCheckbox">鼠标缩放</label>'
    + '&nbsp;&nbsp;<input type="text" id="findText" value="" onkeydown="findButton.click()">'
    + '<input type="button" id="findButton" value=" 查 询 ">'
    + '&nbsp;&nbsp;<input type="button" id="exportButton" value="导出PNG">');

  $('#content').prepend(toobarDiv);

  // 工具栏按钮处理
  $('input[name=\'modeRadio\']').click(function() {
    stage.mode = $('input[name=\'modeRadio\']:checked').val();
  });
  $('#centerButton').click(function() {
    stage.centerAndZoom(); //缩放并居中显示
  });
  $('#zoomOutButton').click(function() {
    stage.zoomOut();
  });
  $('#zoomInButton').click(function() {
    stage.zoomIn();
  });
  $('#exportButton').click(function() {
    stage.saveImageInfo();
  });
  $('#zoomCheckbox').click(function() {
    if ($('#zoomCheckbox').attr('checked')) {
      stage.wheelZoom = 0.85; // 设置鼠标缩放比例
    } else {
      stage.wheelZoom = null; // 取消鼠标缩放比例
    }
  });
  $('#fullScreenButton').click(function() {
    runPrefixMethod(stage.canvas, 'RequestFullScreen');
  });

  // 查询
  $('#findButton').click(function() {
    var text = $('#findText').val().trim();
    var nodes = stage.find('node[text="' + text + '"]');
    if (nodes.length > 0) {
      var node = nodes[0];
      node.selected = true;
      var location = node.getCenterLocation();
      // 查询到的节点居中显示
      stage.setCenter(location.x, location.y);



      // 闪烁几下
      nodeFlash(node, 6);
    }
  });
}

function nodeFlash(node, n) {
  if (n == 0) {
    node.selected = false;
    return;
  }
  node.selected = !node.selected;
  setTimeout(function() {
    nodeFlash(node, n - 1);
  }, 300);
}

var runPrefixMethod = function(element, method) {
  var usablePrefixMethod;
  ['webkit', 'moz', 'ms', 'o', ''].forEach(function(prefix) {
    if (usablePrefixMethod) {return;}
    if (prefix === '') {
      // 无前缀，方法首字母小写
      method = method.slice(0, 1).toLowerCase() + method.slice(1);
    }
    var typePrefixMethod = typeof element[prefix + method];
    if (typePrefixMethod + '' !== 'undefined') {
      if (typePrefixMethod === 'function') {
        usablePrefixMethod = element[prefix + method]();
      } else {
        usablePrefixMethod = element[prefix + method];
      }
    }
  }
  );

  return usablePrefixMethod;
};
