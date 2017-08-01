/**
 *
 * @authors ilex
 * @date    2016-07-18 16:42:35
 * @description 主入口模块
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';

import 'amos-antd/dist/amosantd.css';
import 'amos-core/dist/amoscore.css';
import './src/assets/amosfont/iconfont.css';
import './src/assets/font/iconfont.css';

import routes from './routes';
// 引入主体样式文件
import './index.css';

render((<Router routes={routes} history={hashHistory} />),
  document.getElementById('app'));
