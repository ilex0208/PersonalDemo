'use strict';

import React from 'react';
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
    showQrValue: false,
    content: []
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

    values.forEach((v, i) => {
      options.value = v;
      const data = generateQRcode(options);
      result.push(_self.generateQrTags(i, v, data));
    });

    this.setState({
      content: result
    }, () => printJS({
      printable: 'printNow',
      type: 'html'
    }));

  }

  generateQrTags = (i, value, cdata) => {
    return (
      <div key={`content-${i}`} style={{height: '150px', textAlign: 'center', padding: '3px 5px', display: 'table', width: '100%', marginTop: '20px'}}>
        <div style={{display: 'table-cell', verticalAlign: 'middle'}}>
          <p style={{fontSize: '10px', textAlign: 'center', margin: 0, padding: 0}}>{value}</p>
          <img src={cdata} alt="" />
        </div>
      </div>);
  }

  render() {

    return (
      <div>
        <button onClick={this.onClick}>生成二维码</button>
        <div id="printNow" style={{display: 'block'}}>
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default Demo;
