'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import { QRcode } from 'amos-core';

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

  update = () => {
    this.setState({
      value: this.refs.value.value || '',
      size: parseInt(this.refs.size.value) || 0,
      bgColor: this.refs.bgColor.value,
      fgColor: this.refs.fgColor.value,
      level: this.refs.level.value,
      showQrValue: this.refs.showQrcodeValue.checked
    });
  };

  printQRcode = () => {
    let cdata = ReactDOM.findDOMNode(this.refs['printqrcode']);
    const srcImg = cdata.toDataURL('image/png');
    let newWindow = window.open('打印二维码', '_blank');
    let result = [];
    for(let i =0; i < 3; i++){
      // result.push('<img style="margin-top: 20px;" src="'+ srcImg +'"/>');
      result.push('<div style="height: 110px; text-align: center; padding: 3px 5px;"><p style="font-size: 10px; text-align: center; margin: 0; padding:0;">1234567891230</p><img src="'+ srcImg +'"/></div>');
    }
    newWindow.document.write(result.join(''));
    newWindow.document.close();
    setTimeout(function(){
      newWindow.print();
      newWindow.close();
    }, 100);
  }

  renderValue = (show, value) => {
    return show ? <div>{value}</div> : null;
  }


  render() {

    const {
      showQrValue,
      value,
      size,
      fgColor,
      bgColor,
      level
    } = this.state;

    var code = `<QRcode
      value={"${value}"}
      size={${size}}
      bgColor={"${bgColor}"}
      fgColor={"${fgColor}"}
      level={"${level}"}
    />`;

    return (
      <div>
        <div>
          Size(大小)(px): <input ref="size" type="number" onChange={this.update} value={size} style={{width: 100}} />
        </div>
        <div>
          Background Color(背景色):<input ref="bgColor" type="color" onChange={this.update} value={bgColor} style={{width: 100}} />
        </div>
        <div>
          Foreground Color(前景色):<input ref="fgColor" type="color" onChange={this.update} value={fgColor} style={{width: 100}} />
        </div>
        <div>
          Show QRcode value(是否展示二维码值):<input ref="showQrcodeValue" type="checkbox" onChange={this.update} defaultChecked={showQrValue} style={{width: 100}} />
        </div>
        <div>
          Complexity Level(复杂度级别):
          <select ref="level" onChange={this.update} value={level} style={{width: 100}}>
            <option value="L">L</option>
            <option value="M">M</option>
            <option value="Q">Q</option>
            <option value="H">H</option>
          </select>
        </div>
        <div>
          Value:<br /><textarea rows="6" cols="80" ref="value" onChange={this.update} value={this.state.value} />
        </div>

        <div>
          The React code is: <br /><textarea rows="10" cols="80" disabled value={code} />
        </div>

        <div>
          <button onClick={this.printQRcode}>Print</button>
        </div>

        <div>
          {
            this.renderValue(showQrValue, value)
          }
          <QRcode
            ref="printqrcode"
            value={value}
            size={size}
            fgColor={fgColor}
            bgColor={bgColor}
            level={level}
          />
        </div>
      </div>
    );
  }
}

export default Demo;
