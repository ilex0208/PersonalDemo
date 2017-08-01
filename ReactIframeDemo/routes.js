/**
 *
 * @authors ilex
 * @date    2016-07-23 14:41:35
 * @description route
 */

import React from 'react';// 此处需要导入React核心包
// 引入React-Router模块
import { Route, IndexRoute } from 'react-router';
import Root from './Root';

import Home from './Home';
import IframeDemo from './IframeDemo';

import DragDemo from './DragDemo';
import DragContent from './DragContent';
import AmosDymTab from './AmosDymTab';
import DragModal from './DragModal';
import AmosTableDemo from './AmosTableDemo';
import InputDemo from './InputDemo';
import DatePickerDemo from './DatePickerDemo';

import SelectDemo from './select/index';
import TableCombineColDemo from './TableCombineColDemo';
import TableColumnGroupDemo from './TableColumnGroupDemo';
import CustomeColTableDemo from './CustomeColTableDemo';
import BasiTableDemo from './BasiTableDemo';
import CheckBoxDemo from './amoscheck';


// 配置路由
const routes = (
  <Route path='/' component={Root}>
    <IndexRoute component={Home} />
    <Route path='home' component={Home} />
    <Route path='iframe' component={IframeDemo} />
    <Route path='drag' component={DragDemo} />
    <Route path='dragcontent' component={DragContent} />
    <Route path='dymtab' component={AmosDymTab} />
    <Route path='dragmodal' component={DragModal} />
    <Route path='atd' component={AmosTableDemo} />
    <Route path='input' component={InputDemo} />
    <Route path='dpd' component={DatePickerDemo} />
    <Route path='sd' component={SelectDemo} />
    <Route path='tccd' component={TableCombineColDemo} />
    <Route path='tcgd' component={TableColumnGroupDemo} />
    <Route path='cctd' component={CustomeColTableDemo} />
    <Route path='btd' component={BasiTableDemo} />
    <Route path='cbd' component={CheckBoxDemo} />
  </Route>
);

export default routes;


