const _aot = require('amos-overt');

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene();
  scene.background = './img/bg/bg.png';
  stage.add(scene);

  let cloudNode = new _aot.Node('root');
  cloudNode.setSize(30, 26);
  cloudNode.setLocation(460, 280);
  cloudNode.setImage('./img/pstn/wdm.png', true);
  cloudNode.layout = {
    type: 'circle',
    radius: 160
  };

  scene.add(cloudNode);

  for (let i = 0; i < 3; i++) {
    let node = new _aot.Node('host' + i);
    node.fillStyle = '200,255,0';
    node.radius = 15;
    node.setLocation(scene.width * Math.random(), scene.height * Math.random());
    node.setImage('./img/pstn/host.png', true);
    if (i == 2) {
      node.layout = {
        type: 'tree',
        direction: 'top',
        width: 50,
        height: 90
      };
    } else if (i == 1) {
      node.layout = {
        type: 'tree',
        direction: 'left',
        width: 50,
        height: 90
      };
    } else {
      node.layout = {
        type: 'circle',
        radius: 60
      };
    }


    scene.add(node);
    let link = new _aot.Link(cloudNode, node);
    scene.add(link);

    for (let j = 0; j < 6; j++) {
      let vmNode = new _aot.CircleNode('demo-' + i + '-' + j);
      vmNode.radius = 10;
      vmNode.fillStyle = '255,255,0';
      vmNode.setLocation(scene.width * Math.random(), scene.height * Math.random());
      scene.add(vmNode);
      scene.add(new _aot.Link(node, vmNode));
    }
  }

  _aot.layout.layoutNode(scene, cloudNode, true);

  scene.addEventListener('mouseup', function(e) {
    if (e.target && e.target.layout) {
      _aot.layout.layoutNode(scene, e.target, true);
    }
  });
}


render();
