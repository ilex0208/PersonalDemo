const _aot = require('amos-overt');

// 生成随机坐标
function randomCoor(range) {
  return Math.random() * range - Math.random() * range;
}

function createNode(x, y, text, scene) {
  let node = new _aot.CircleNode();
  node.radius = 10;
  node.shadow = false;
  node.tip = text;
  node.mouseover(function() {
    this.text = this.tip;
  });
  node.mouseout(function() {
    this.text = '';
  });
  node.setSize(20, 20);
  node.setLocation(x, y);
  node.fillColor = _aot.Util.randomColor();
  scene.add(node);
  return node;
}

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene();
  scene.background = './img/bg/bg.png';
  stage.add(scene);

  // 节点数量( 10万 5万条连线）
  let nodeCount = 10000;

  let beginTime = (new Date()).getTime();
  // 每次循环创建两个节点、一条连线
  for (let i = 0; i < nodeCount / 2; i++) {
    let x = randomCoor(3000);
    let y = randomCoor(3000);
    let nodeFrom = createNode(x, y, 'From_' + i, scene);

    let x2 = x + randomCoor(1000);
    let y2 = y + randomCoor(1000);
    let nodeTo = createNode(x2, y2, 'To_' + i, scene);

    let link = new _aot.Link(nodeFrom, nodeTo);
    link.shadow = false;
    link.lineWidth = 1;
    scene.add(link);
  }

  let usedTime = ((new Date()).getTime() - beginTime) / 1000;
  document.getElementById('time').innerHTML = '随机生成1万个节点、5000条连线, 用时：' + usedTime + ' 秒.';
}

render();
