/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */
import React, {Component} from 'react';
import { render } from 'react-dom';

import App1 from './App';
import App2 from './Test';
import App3 from './AppAmosTab';
import App4 from './DragModal';
import App5 from './table';
import App6 from './InputDemo';
import App7 from './DatePickerDemo';

import App8 from './select/index';

// 引入主体样式文件
import './index.css';

class Root extends Component {
  render() {
    return (
      <div>
        <App1 />
        <App2 />
        <App3 />
        <App4 />
        <App5 />
        <App6 />
        <App7 />
        <App8 />
      </div>
    );
  }
}

Root.propTypes = {

};

render(<Root />, document.getElementById('app'));
