'use strict';

import React from 'react';
import { generateQRcode } from 'amos-core';
import p from './pj/js/init';

const printJS = p.init;

import './pj/css/print.css';

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
    let _self = this;

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

    let result = [];

    values.forEach((v) => {
      options.value = v;
      const data = generateQRcode(options);
      result.push(_self.generateQrTags(v, data));
    });

    printJS({
      printable: result.join(''),
      showModal: true,
      type: 'html'
    });

  }

  generateQrTags = (value, cdata) => {
    return '<div style="height: 150px; text-align: center; padding: 3px 5px; display: table; width: 100%; margin-top: 20px;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 10px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
  }

  render() {

    return (
      <button onClick={this.onClick}>生成二维码</button>
    );
  }
}

export default Demo;
