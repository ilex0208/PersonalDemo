//拖拽节点的初始化，以及拖拽拖拽操作
$(function() {
  init('dev_a');    //云主机
  init('dev_b'); //交换机
});

function init(id) {
  var canvasSrc = document.getElementById(id);
  var contextSrc = canvasSrc.getContext('2d');
  var image = new Image();
  image.src = 'img/' + id + '.png';
  image.onload = function() {
    contextSrc.drawImage(image, 0, 0);
  };
}

function allowDrop(ev) {
  ev.preventDefault();
}

//拖拽开始
function drag(ev) {
  console.log('dragStart==>',ev);
  ev.dataTransfer.setData('Text', ev.target.id);
}

//拖拽结束
function drop(ev) {
  stopEvent(ev);
  var data = ev.dataTransfer.getData('Text');
  //ev.target.appendChild(document.getElementById(data));
  draw(ev, data);
}

function stopEvent(e) {
  e = e || window.event;
  // 阻止事件冒泡
  e.stopPropagation();
  e.cancelBubble = true;// 兼容IE
  // 阻止默认事件
  e.preventDefault();
  e.returnValue = false; // 兼容IE
}
