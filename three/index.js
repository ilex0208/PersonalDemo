const amosThree = require('amos-three');
function render(){
  amosThree.initWaves(document.getElementById('stage-three'));
  amosThree.enableAnimate();
}

render();
