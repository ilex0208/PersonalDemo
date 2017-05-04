/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */
import React from 'react';
import { render } from 'react-dom';
// import App from './App';
// import App from './Test';
// import App from './AppAmosTab';
import App from './DragModal';
// import App from './table';

// 引入主体样式文件
import './index.css';

render(<App />, document.getElementById('app'));
