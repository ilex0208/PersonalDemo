$(function() {
  var canvas = document.getElementById('canvas');
  stage = new JTopo.Stage(canvas); // 创建一个舞台对象
  scene = new JTopo.Scene(stage); // 创建一个场景对象
  //显示工具栏
  showJTopoToobar(stage);
  stage.addEventListener('mouseover', function(event) {
    console.log('鼠标进入');
  });
  stage.addEventListener('mousedrag', function(event) {
    console.log('拖拽');
  });
  stage.addEventListener('mouseup', function(event) {
    if (event.button == 2) {
      console.log('松开右键');
    } else if (event.button == 1) {
      console.log = ('松开中键');
    } else if (event.button == 0) {
      console.log('松开左键');
    }
  });
  stage.addEventListener('mousemove', function(event) {

  });
});

//打印鼠标指针坐标
function writeMessage(oGetMousePos, message) {
  var oContext = oGetMousePos.getContext('2d');
  oContext.clearRect(0, 0, oGetMousePos.width, oGetMousePos.height);
  oContext.font = '20pt Microsoft JhengHei';
  oContext.fillStyle = 'tomato';
  oContext.fillText(message, 10, 60);
}

//获取画布中鼠标的位置
function getMousePos(canvas, evt, scene) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left * (canvas.width / rect.width) - (scene ? scene.translateX : 0),
    y: evt.clientY - rect.top * (canvas.height / rect.height) - (scene ? scene.translateY : 0)
  };
}

//绘制节点
function draw(ev, data) {
  var mousePos = getMousePos(stage.canvas, ev, scene);
  var message = 'x:' + mousePos.x + ',y:' + mousePos.y;
  console.log(message, data);
  addNode(data, mousePos);
  //防止创建节点后连线
  nodelist = [];
}

//添加节点
function addNode(name, mousePos) {
  var node = new JTopo.Node(name);
  node.setLocation(mousePos.x, mousePos.y);
  node.setImage('img/' + name + '.png');
  node.shadow = 'true';
  //node.showSelected = "false";
  scene.add(node);
  node.dbclick(function(ev) {
    console.log(node.text + '被点双击了');
  });
  node.mouseup(function(ev) {
    console.log(node.text + '鼠标离开');
    //是否连线
    if (islink) {
      nodelist.push(node);
      if (nodelist.length >= 2 && nodelist[nodelist.length - 1] != nodelist[nodelist.length - 2]) {
        console.log('11');
        linkNode(nodelist[nodelist.length - 1], nodelist[nodelist.length - 2]);
        nodelist = [];

      }
    }
  });
}

//增加连线
function linkNode(nodeFrom, nodeTo) {
  var link = new JTopo.Link(nodeFrom, nodeTo);
  link.click(function(ev) {
    console.log('点击了连线');
  });
  link.click(function(ev) {
    console.log('点击了连线');
  });
  scene.add(link);
}

//删除节点或者连线
function delNode(node) {
  scene.remove(node);
}
