const _aot = require('amos-overt');

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene(stage);
  scene.background = './img/bg/bg.png';
  var routerNode = new _aot.Node('router');
  routerNode.setSize(30, 26);
  routerNode.setImage('./img/pstn/router.png', true);
  routerNode.setLocation(360, 130);
  routerNode.layout = {
    type: 'tree',
    width: 230,
    height: 100
  };

  scene.add(routerNode);

  for (var i = 1; i < 4; i++) {
    var node = new _aot.CircleNode('host' + i);
    node.fillStyle = '200,255,0';
    node.radius = 15;
    node.setLocation(scene.width * Math.random(), scene.height * Math.random());
    node.layout = {
      type: 'tree',
      width: 50,
      height: 100
    };

    scene.add(node);
    var link = new _aot.Link(routerNode, node);
    scene.add(link);

    for (var j = 0; j < 5; j++) {
      var vmNode = new _aot.CircleNode('vm-' + i + '-' + j);
      vmNode.radius = 10;
      vmNode.fillStyle = '255,255,0';
      vmNode.setLocation(scene.width * Math.random(), scene.height * Math.random());
      scene.add(vmNode);
      scene.add(new _aot.Link(node, vmNode));
    }
  }

  _aot.layout.layoutNode(scene, routerNode, true);

  scene.addEventListener('mouseup', function(e) {
    if (e.target && e.target.layout) {
      _aot.layout.layoutNode(scene, e.target, true);
    }
  });
}

render();
