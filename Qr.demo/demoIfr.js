'use strict';

import React from 'react';

import { PrintByIframe } from 'amos-core';

const values = () => {
  let vs = [];
  const prifix = '123456789000';
  for(let i = 0; i < 9; i++){
    vs.push(prifix + i);
  }
  return vs;
};

const qrcodeOpts = {
  size: 90,
  level: 'H',
  bgColor: '#FFFFFF',
  fgColor: '#000000'
};

// TODO: live update demo
class Demo extends React.Component {

  generateQrTags = (value, cdata) => {
    // return '<div style="height: 170px; width: 100%;text-align: center; padding: 3px 5px; display: table; width: 100%; background: black;"><div style="height: 100%; width: 100%;">asdasdfasdf</div></div>';
    // return '<div style="height: 170px; text-align: center; padding: 3px 5px; display: table; width: 100%;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 16px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
    // return '<div style="height: 150px; text-align: center; padding: 3px 5px; display: table; width: 100%; margin-top: 20px;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 16px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
    return '<div style="height: 130px; text-align: center; padding: 3px 5px; display: table; width: 100%; margin-top: 20px;"><div style="display: table-cell; vertical-align: middle;"><p style="font-size: 10px; text-align: center; margin: 0; padding:0;">'+ value +'</p><img src="'+ cdata +'"/></div></div>';
  }

  render() {
    const _v = values();
    // return (
    //   <PrintByIframe
    //     values={_v}
    //   />
    // );

    // return (
    //   <PrintByIframe
    //     values={_v}
    //     showQrcode
    //   />
    // );
    // return (
    //   <PrintByIframe
    //     values={_v}
    //     showQrcode
    //     qrcodeOpts={qrcodeOpts}
    //   />
    // );

    return (
      <PrintByIframe
        values={_v}
        showQrcode
        qrcodeOpts={qrcodeOpts}
        printContent={this.generateQrTags}
      />
    );
  }
}

export default Demo;
