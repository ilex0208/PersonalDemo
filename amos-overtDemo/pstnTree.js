const _aot = require('amos-overt');

const datas = {};

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene(stage);
  scene.background = './img/bg/bg-white.png';

  function createNode(x, y, img, name) {
    let node = new _aot.Node(name);
    node.setImage('./img/pstn/' + img, true);
    node.setIcon('./img/leaf.gif', true);
    node.setLocation(x, y);
    node.fontColor = '0,0,255';
    scene.add(node);
    return node;
  }

  function linkNode(nodeA, nodeZ) {
    let link = new _aot.FoldLink(nodeA, nodeZ);
    link.lineWidth = 3;
    link.strokeColor = '255,255,0';
    scene.add(link);
    return link;
  }

  let r1 = createNode(143, 43, 'router.png');
  let r2 = createNode(143, 63, 'router.png');
  r2.alarm = '2 W';
  let r3 = createNode(143, 83, 'router.png');
  let r4 = createNode(143, 103, 'router.png');
  let r5 = createNode(143, 123, 'router.png', 'Encoder');

  let r6 = createNode(243, 123, 'router.png', 'Scrambler');
  linkNode(r1, r6);
  linkNode(r2, r6);
  linkNode(r3, r6);
  linkNode(r4, r6);
  linkNode(r5, r6);

  let r7 = createNode(143, 180, 'router.png');
  let r8 = createNode(143, 200, 'router.png');
  linkNode(r7, r6);
  linkNode(r8, r6);

  let dataCloud = createNode(316, 113, 'cloud.png');
  scene.add(new _aot.Link(dataCloud, r6));

  let tw130 = createNode(436, 107, 'tw130.png');
  scene.add(new _aot.Link(tw130, dataCloud));

  let pstn = createNode(316, 176, 'cloud.png');
  linkNode(pstn, tw130);

  let wdm = createNode(525, 114, 'wdm.png', 'WDM');
  scene.add(new _aot.Link(wdm, tw130));

  let testing = createNode(568, 128, 'testing.png');
  testing.alarm = '1 C';
  testing.alarmColor = '255,0,0';
  scene.add(new _aot.Link(testing, wdm));

  let wdm2 = createNode(607, 114, 'wdm.png', 'WDM');
  scene.add(new _aot.Link(wdm2, testing));

  let mainframe = createNode(654, 152, 'mainframe.png');
  linkNode(mainframe, wdm2);

  let phone = createNode(738, 173, 'phone.png', 'Phone');
  linkNode(phone, mainframe);

  let host = createNode(730, 225, 'host.png', 'Pc');
  linkNode(host, mainframe);

  let router2 = createNode(706, 282, 'router2.png', 'STB');
  router2.alarm = '1 W';
  router2.alarmColor = '0,255,0';
  linkNode(router2, mainframe);

  let terminal = createNode(669, 326, 'terminal.png', 'IPTV/SDV');
  linkNode(terminal, router2);

  let modem = createNode(623, 49, 'modem.png', 'Modem');
  let pc = createNode(742, 7, 'host.png');
  let router3 = createNode(671, 73, 'router2.png');
  let terminal3 = createNode(736, 100, 'terminal.png');

  linkNode(pc, modem);
  linkNode(router3, modem);
  linkNode(terminal3, router3);

  stage.add(scene);
  renderTree(scene);
  // renderThirdTree(scene);
}

function renderTree(_scene){
  let rootDom = document.getElementById('tree');
  let treeName = 'amos-tree';
  let treePane = new _aot.TreePane();
  let tree = new _aot.Tree(treePane.getTreeView(), _scene, treeName, './img/tree/category.png');
  tree.initTreeView(rootDom, {top: 8, left: 8});
}

function renderThirdTree(_scene){
  let box = new _aot.third.ElementBox();
  let tree = new _aot.third.Tree(box);
  var dummy = new _aot.third.Dummy({ id: name, name: name });
  this.box.add(dummy);

  for (var i = 1; i <= 5; i++) {
    var tnode = new _aot.third.Tnode({ name: 'ilexNode_' + i, clients: { 'MAPPINGID': i } });
    tnode.setLocation(i * 100, 50);
    tnode.setImage('c_olt');
    tnode.setIcon('c_leaf');
    tnode.setParent(dummy);
    this.box.add(tnode);
  }
  this.tree.expandAll();
  let rootDom = document.getElementById('tree');
  rootDom.appendChild(tree);
}
render();
