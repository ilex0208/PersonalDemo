const _aot = require('amos-overt');

function render() {
  let canvas = document.getElementById('canvas');
  let stage = new _aot.Stage(canvas);

  let scene = new _aot.Scene();
  scene.background = './img/bg/bg.png';
  stage.add(scene);

  // 不指定布局的时候，容器的布局为自动(容器边界随元素变化）
  let container = new _aot.Container('边界自动变化');
  container.textPosition = 'Middle_Center';
  container.fontColor = '100,255,0';
  container.font = '18pt 微软雅黑';
  container.borderColor = '255,0,0';
  container.borderRadius = 30; // 圆角
  scene.add(container);

  for (let i = 0; i < 5; i++) {
    let node = new _aot.Node('A_' + i);
    node.textPosition = 'Middle_Center';
    node.setLocation(300 + Math.random() * 300, 200 + Math.random() * 200);
    node.setImage('./img/os/pcImage.png', true);
    scene.add(node);
    container.add(node);
  }
  scene.add(new _aot.Link(container.childs[0], container.childs[1]));
  scene.add(new _aot.Link(container.childs[2], container.childs[3]));

  // 流式布局（水平、垂直间隔均为10)
  let flowLayout = _aot.layout.FlowLayout(10, 10);

  // 网格布局(4行3列)
  let gridLayout = _aot.layout.GridLayout(4, 3);

  let container2 = new _aot.Container('点击切换布局');
  container2.layout = flowLayout;
  container2.fillColor = '10,10,100';
  container2.setBound(10, 10, 300, 200);
  scene.add(container2);

  for (let i = 0; i < 12; i++) {
    let node = new _aot.Node('F_' + i);
    node.textPosition = 'Middle_Center';
    node.setImage('./img/os/pcImage.png', true);
    scene.add(node);
    container2.add(node);
  }

  container2.click(function() {
    if (container2.layout === flowLayout) {
      container2.layout = gridLayout;
    } else {
      container2.layout = flowLayout;
    }
  });
}


render();
