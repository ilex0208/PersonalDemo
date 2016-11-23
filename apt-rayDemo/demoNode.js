const JTopo = require('apt-ray');

function demo() {
  let box = new JTopo.DataBox('dataBox', document.getElementById('node'));

  let defaultNode = new JTopo.Node('Node');
  defaultNode.setLocation(200, 100);
  defaultNode.rotate = Math.PI / 10;
  box.add(defaultNode);

  let hostNode = new JTopo.Node('Hello');
  hostNode.setType('host');
  hostNode.setLocation(300, 100);
  hostNode.rotate = Math.PI / 10;
  hostNode.scala = 1.5;
  box.add(hostNode);

  let textNode = new JTopo.TextNode('This is a Text node.');
  textNode.setLocation(317, 310);
  box.add(textNode);

  let tipNode = new JTopo.TipNode('a tip.');
  tipNode.setLocation(540, 100);
  box.add(tipNode);

  let peopleNode = new JTopo.Node('people');
  peopleNode.setLocation(500, 200);
  peopleNode.setSize(64, 64);
  peopleNode.setImage('./assets/img/other/person.png');
  box.add(peopleNode);

  let circleNode = new JTopo.CircleNode();
  circleNode.style.fillStyle = '0, 0, 255';
  circleNode.setLocation(390, 90);
  box.add(circleNode);

  let heartNode = new JTopo.HeartNode();
  heartNode.style.fillStyle = '255, 0, 0';
  heartNode.setLocation(300, 170);
  box.add(heartNode);

  let link = new JTopo.FoldLink(peopleNode, heartNode);
  box.add(link);

  box.updateView();
}

module.exports = demo;

