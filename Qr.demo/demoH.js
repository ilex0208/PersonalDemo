'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import { PrintQRcode } from 'amos-core';

const values = () => {
  let vs = [];
  const prifix = '123456789000';
  for(let i = 0; i < 100; i++){
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

// TODO: live update demo
class Demo extends React.Component {

  generateQrTags = (value, cdata) => {
    return '<div style="height: 150px; text-align: center; padding: 3px 5px; display: table; width: 100%; margin-top: 20px;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 10px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
  }

  render() {
    const _v = values();
    // return (
    //   <PrintQRcode
    //     values={_v}
    //   />
    // );

    // return (
    //   <PrintQRcode
    //     values={_v}
    //     showQrcode
    //   />
    // );
    // return (
    //   <PrintQRcode
    //     values={_v}
    //     showQrcode
    //     qrcodeOpts={qrcodeOpts}
    //   />
    // );

    return (
      <PrintQRcode
        values={_v}
        showQrcode
        qrcodeOpts={qrcodeOpts}
        printContent={this.generateQrTags}
      />
    );
  }
}

ReactDOM.render(<Demo />, document.getElementById('app'));
