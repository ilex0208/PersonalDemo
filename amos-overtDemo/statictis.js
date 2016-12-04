const _aot = require('amos-overt');

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene();
  scene.background = './img/bg/bg.png';

  function node(x, y, img) {
    let node = new _aot.Node();
    node.setImage('./img/statistics/' + img, true);
    node.setLocation(x, y);
    scene.add(node);
    return node;
  }

  function linkNode(nodeA, nodeZ, f) {
    let link;
    if (f) {
      link = new _aot.FoldLink(nodeA, nodeZ);
    } else {
      link = new _aot.Link(nodeA, nodeZ);
    }
    link.direction = 'vertical';
    scene.add(link);
    return link;
  }

  let s1 = node(305, 43, 'server.png');
  s1.alarm = '2 W';
  let s2 = node(365, 43, 'server.png');
  let s3 = node(425, 43, 'server.png');

  let g1 = node(366, 125, 'gather.png');
  linkNode(s1, g1, true);
  linkNode(s2, g1, true);
  linkNode(s3, g1, true);

  let w1 = node(324, 167, 'wanjet.png');
  linkNode(g1, w1);

  let c1 = node(364, 214, 'center.png');
  linkNode(w1, c1);

  let cloud = node(344, 259, 'cloud.png');
  linkNode(c1, cloud);

  let c2 = node(364, 328, 'center.png');
  linkNode(cloud, c2);

  let w2 = node(324, 377, 'wanjet.png');
  linkNode(c2, w2);

  let g2 = node(366, 411, 'gather.png');
  linkNode(w2, g2);

  function hostLink(nodeA, nodeZ) {
    let link = new _aot.FlexionalLink(nodeA, nodeZ);
    link.shadow = false;
    link.offsetGap = 44;
    scene.add(link);
    return link;
  }

  let h1 = node(218, 520, 'host.png');
  h1.alarm = '';
  hostLink(g2, h1);
  let h2 = node(292, 520, 'host.png');
  hostLink(g2, h2);
  let h3 = node(366, 520, 'host.png');
  h3.alarm = '二级告警';
  hostLink(g2, h3);
  let h4 = node(447, 520, 'host.png');
  hostLink(g2, h4);
  let h5 = node(515, 520, 'host.png');
  h5.alarm = '1M';
  hostLink(g2, h5);

  setInterval(function() {
    if (h3.alarm == '二级告警') {
      h3.alarm = null;
    } else {
      h3.alarm = '二级告警';
    }
  }, 600);

  stage.add(scene);
}


render();
