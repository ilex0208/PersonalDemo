var datas = [
  {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
  {href: 'container.html',src: './img/teach/container.png',text: '容器分组'},
  {href: 'performance.html',src: './img/teach/performance.png', text: '性能测试'},
  {href: 'statictis.html',src: './img/teach/statictis.png',text: '设备关系'}, 
  {href: 'mix.html',src: './img/teach/mix.png',text: '混合布局'},
  {href: 'animate.html',src: './img/teach/animate.png',text: '动画'}
  // {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
  // {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
  // {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
  // {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
  // {href: 'pstn.html',src: './img/teach/pstn.png',text: 'PSTN'},
];

function render() {
  var ul = document.getElementById('itemList');
  datas.map(function(data) {
    var _li = createLi(data);
    ul.appendChild(_li);
  });
}

function createLi(item) {
  var li = document.createElement('li');
  var _a = createA(item);
  var _h3 = document.createElement('h3');
  _h3.innerHTML = item.text;
  li.appendChild(_a);
  li.appendChild(_h3);
  return li;
}

function createA(item) {
  var a = document.createElement('a');
  a.setAttribute('href', item.href);
  var img = document.createElement('img');
  img.setAttribute('src', item.src);
  img.setAttribute('width', '90%');
  img.setAttribute('height', '70%');
  a.appendChild(img);
  return a;
}

render();
