'use strict';

import React from 'react';

import { invokePrint } from 'amos-core';

const values = () => {
  let vs = [];
  const prifix = '123456789000';
  for(let i = 0; i < 10; i++){
    vs.push(prifix + i);
  }
  return vs;
};

const qrcodeOpts = {
  size: 128,
  level: 'H',
  bgColor: '#FFFFFF',
  fgColor: '#000000'
};

const generateQrTags = (value, cdata) => {
  return '<div style="height: 150px; text-align: center; padding: 3px 5px; display: table; width: 100%; margin-top: 20px;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 16px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
};

// TODO: live update demo
class Demo extends React.Component {

  onClick = () => {
    const _v = values();
    invokePrint({
      qrcodeOpts: qrcodeOpts,
      printContent: generateQrTags,
      showQrcode: false,
      showLoading: false,
      valuePrefix: 'ilex'
    }, _v);
  }

  render() {
    return (
      <button onClick={this.onClick}>生成二维码</button>
    );
  }
}

export default Demo;
