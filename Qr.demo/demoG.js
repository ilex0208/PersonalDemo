'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { generateQRcode } from 'amos-core';

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

    this.printQRcode(result.join(''));
  }

  generateQrTags = (value, cdata) => {
    return '<div style="height: 110px; text-align: center; padding: 3px 5px;"><p style="font-size: 10px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div>';
  }

  printQRcode = (result) => {
    let newWindow = window.open('打印二维码', '_blank');
    newWindow.document.write(result);
    newWindow.document.close();
    setTimeout(function(){
      newWindow.print();
      newWindow.close();
    }, 100);
  }

  render() {

    return (
      <button onClick={this.onClick}>生成二维码</button>
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
