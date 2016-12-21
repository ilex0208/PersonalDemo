/**
 *
 * @authors ilex
 * @date    2016-07-23 14:41:35
 * @description route
 */
import React from 'react';// 此处需要导入React核心包
// 引入React-Router模块
import { Router, Route, IndexRoute } from 'react-router';
import Cookie from 'react-cookie';

import App from './App';
import Home from 'COMPONENT/home';
import LoginWaves from 'COMPONENT/login/LoginWaves';
const onEnterValidate = (next, replace, callback) => {
  if (!Cookie.load('api_key') && next.location.pathname != '/login') {
    replace('/login');
  }
  callback();
};
export const routes = (history)  => (
  <Router history={history}>
    <Route path='/' onEnter={onEnterValidate}>
      <IndexRoute component={Home} />
      <Route component={App}>
        <Route path='home' component={Home} />
      </Route>
      <Route path='login' component={LoginWaves} />
    </Route>
  </Router>
);
export default routes;
