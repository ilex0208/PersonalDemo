import React, { Component } from 'react';
import {render} from 'react-dom';

import VideoUploader from './videouploader';
import {AmosUploader} from 'amos-core';

import './font/iconfont.css';

import './index.scss';

class Demo extends Component {
  render() {
    return (
      <div>
        <VideoUploader />
        <AmosUploader uploadURI='http://172.16.10.102:8080/file-operate/upload-file' />
        <AmosUploader uploadURI='http://localhost:3001/upload' />
        <AmosUploader uploadURI='http://172.16.10.152:8310/dfs/upload/testfile00001/helloupload' />
      </div>
    );
  }
}

render(<Demo />, document.getElementById('app'));
