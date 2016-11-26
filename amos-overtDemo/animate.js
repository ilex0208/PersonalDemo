const _aot = require('amos-overt');

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene(stage);
  scene.background = './img/bg/bg.png';
  stage.frames = 24;
  let animates = [
    {rotate: 2 * Math.PI},
    {scaleX: 2},
    {height: 130,y: 180},
    {alpha: 0.1},
    {alpha: 0.2,y: 90},
    {rotate: -4 * Math.PI,scaleX: 2.5,scaleY: 2.5},
    {x: 300,y: 400,width: 10,height: 10,rotate: 2 * Math.PI}
  ];

  for (let i = 0; i < animates.length; i++) {
    let node = new _aot.Node('node');
    node.setCenterLocation(100 + i * 90, 300);
    let color = _aot.Util.randomColor();
    node.fillColor = color; // 颜色
    scene.add(node);

    _aot.Animate.stepByStep(node, animates[i], 3000, true).start();
  }

  function myNode(text, x, y) {
    let node = new _aot.Node(text);
    node.percent = 0.8;
    node.beginDegree = 0;
    node.width = node.height = 70;
    node.setLocation(x, y);
    node.textPosition = 'Middle_Center';
    node.paint = function(g) {
      g.save();
      g.beginPath();
      g.moveTo(0, 0);
      g.fillStyle = 'rgba(0,255,0,' + this.alpha + ')';
      g.arc(0, 0, this.width / 2, this.beginDegree, this.beginDegree + 2 * Math.PI * this.percent);
      g.fill();
      g.closePath();

      g.beginPath();
      g.fillStyle = 'rgba(0,0,255,' + this.alpha + ')';
      g.moveTo(0, 0);
      g.arc(0, 0, this.width / 2 - 8, this.beginDegree, this.beginDegree + 2 * Math.PI);
      g.fill();
      g.closePath();
      g.restore();
      this.paintText(g);
    };
    scene.add(node);
    return node;
  }
  let node1 = myNode('自定义', 355, 151);
  node1.percent = 0.1;
  _aot.Animate.stepByStep(node1, {
    percent: 1
  }, 5000, true).start();

  let node2 = myNode('自定义', 155, 151);
  _aot.Animate.stepByStep(node2, {
    beginDegree: 2 * Math.PI
  }, 3000, true).start();

}

render();
