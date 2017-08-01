'use strict';

import React from 'react';
import { findDOMNode } from 'react-dom';
import { SimpleTable, html2image, commonPrint } from 'amos-core';
import 'amos-core/dist/amos.css';
import 'amos-antd/dist/amosantd.css';

const cols = [
  {key: '1', dataIndex: 'name', title: 'name'},
  {key: '2', dataIndex: 'age', title: 'age'},
  {key: '3', dataIndex: 'sex', title: 'sex'}
];

const datas = [
  {key: '1', name: 'ilex', age: 20, sex: 'f'},
  {key: '2', name: 'ilex1', age: 21, sex: 'f'},
  {key: '3', name: 'ilex2', age: 22, sex: 'f'},
  {key: '4', name: 'ilex3', age: 23, sex: 'f'}
];

// TODO: live update demo
class Demo extends React.Component {

  onClick = () => {
    const _self = this;
    const target = findDOMNode(_self.refs.content);

    html2image({
      target,
      onlydata: true
    }).then(
      img =>
        commonPrint(_self.generateQrTags(img))
        // commonPrint(img)
        // commonPrint(_self.generateQrTags(img), {
        //   showModal: true,
        //   type: 'html'
        // })
    );
    // printJS({
    //   printable: _self.generateTags(target.innerHTML),
    //   showModal: true,
    //   type: 'html'
    // });
  }

  generateTags = (cdata) => {
    return '<div>' + cdata + '</div>';
  }

  generateQrTags = (cdata) => {
    return '<img src="'+ cdata +'"/>';
  }

  render() {

    return (
      <div className="content" ref="content">
        <table style={{ border: 1 }} cellSpacing="0">
          <tbody>
            <tr>
              <th>Month</th>
              <th>Savings</th>
            </tr>
            <tr>
              <td>January</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>
        <SimpleTable
          tableColumns={cols}
          tableSize="small"
          dataList={datas}
        />
        <button onClick={this.onClick}>打印</button>
      </div>
    );
  }
}

export default Demo;
