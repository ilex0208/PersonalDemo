'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { generateQRcode } from 'amos-core';
import p from './pj/js/init';

const printJS = p.init;

// TODO: live update demo
class Demo extends React.Component {
  state = {
    value: 'ilex.h',
    size: 90,
    fgColor: '#000000',
    bgColor: '#ffffff',
    level: 'L',
    showQrValue: false
  };

  onClick = () => {

    let values = [];
    const prifix = '123456789000';
    for(let i = 0; i < 10; i++){
      values.push(prifix + i);
    }
    const options = {
      size: 90,
      fgColor: '#000000',
      bgColor: '#ffffff',
      level: 'H'
    };

    values.forEach((v) => {
      options.value = v;
      const data = generateQRcode(options);
      printJS(data, 'image');
    });

  }

  render() {

    return (
      <button onClick={this.onClick}>生成二维码</button>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
