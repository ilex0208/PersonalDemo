import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Export2Pdf, Stream2Excel } from 'amos-core';

// function dataUrlToBlob(dataUrl) {
//   var text = atob(dataUrl.split(',')[1]);
//   var abuffer = new ArrayBuffer(text.length);
//   var ubuffer = new Uint8Array(abuffer);

//   for (var i = 0; i < text.length; i++) {
//     ubuffer[i] = text.charCodeAt(i);
//   }

//   return abuffer;
// }

class ToPdf extends Component {

  componentDidMount() {
    this.renderCanvas();
  }

  onClick = () => {
    const canvas = findDOMNode(this.refs.canvas);
    // const data = canvas.toDataURL('image/png');
    // console.log(Stream2Excel());
    // var _Export2Pdf = new Export2Pdf();
    // _Export2Pdf.prototype.saveFileByCanvas('demo.png', canvas, {type: "application/pdf"});
    // _Export2Pdf.prototype.saveFileByData('demo.pdf', dataUrlToBlob(data), {type: "application/pdf"});
    // Export2Pdf().saveFileByCanvas('demo.png', canvas);
    Export2Pdf().saveAsPdf('demo.pdf', canvas, {
      imgType: 'image/jpeg',
      pdfImgType: 'JPEG'
    });
  }

  renderCanvas = () => {
    const canvas = findDOMNode(this.refs.canvas);
    const ctx=canvas.getContext('2d');
    ctx.fillStyle='#FF0000';
    ctx.fillRect(0,0,500,500);
  }

  render() {
    return (
      <div style={{width: 500, height: 600}}>
        <button onClick={this.onClick}>ExportPdf</button>
        <canvas ref="canvas"></canvas>
      </div>
    );
  }
}

export default ToPdf;
