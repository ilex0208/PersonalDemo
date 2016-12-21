import { notification } from 'antd';
import Cookie from 'react-cookie';
import CommonConstants from './../utils/commonConstants';
import {
  LOGIN_SUCCESS,
  RECEIVE_LOGIN,
  RECEIVE_THIRD_AUTH,
  LOGIN_ERROR,
  GET_PERMISSIONS_SUCCESS,
  LOGOUT
} from '../action/constants';

function auth(state = {}, action = {}) {
  console.log('type:', action.type);
  switch (action.type) {
    case RECEIVE_LOGIN:
      return loginFunc(state, action.payload);
    case LOGIN_SUCCESS:
      return loginFunc(state, action.payload);
    case LOGIN_ERROR:
      return loginFunc(state, action.payload);
    case RECEIVE_THIRD_AUTH:
      return loginFunc(state, action.payload);
    case GET_PERMISSIONS_SUCCESS:
      return permissionsFunc(state, action.payload);
    case LOGOUT:
      return logoutFunc(state, action.payload);
    default:
      return state;
  }
}

const loginFunc = (state, payload) => {
  console.log('payload typeof==>', typeof payload);
  console.log('payload=>', payload);
  if(payload.result === 'SUCCESS'){
    showTips('success', '登陆成功');
    // 解析数据
    Cookie.save(CommonConstants.api_key, payload.api_key, {path: '/', 'expires': new Date(Date.now() + (1000 * 60 * 60 * 24 * 365))});
    localStorage.setItem(CommonConstants.userId, payload.user.id);
    localStorage.setItem(CommonConstants.userName, payload.user.userName);
    localStorage.setItem(CommonConstants.token, payload.token);
    return Object.assign({}, state, {user: payload});
  }else if(payload.result === 'ERROR'){
    showTips('error', '登陆失败', '从服务端获取数据失败！');
    return state;
  } else {
    showTips('error', '登陆失败', '用户名/密码不正确！');
    return state;
  }
};

const permissionsFunc = (state, payload) => {
  if(payload.status === 200) {
    localStorage.setItem(CommonConstants.permissions, JSON.stringify(payload.body));
    return { permissions: payload.body };
  } else {
    return state;
  }
};

const logoutFunc = (state, payload) => {
  Cookie.remove(CommonConstants.api_key, { path: '/' });
  localStorage.removeItem(CommonConstants.userId, { path: '/' });
  localStorage.removeItem(CommonConstants.userName, { path: '/' });
  localStorage.removeItem(CommonConstants.permissions);
  localStorage.removeItem(CommonConstants.token);
  return {permissions: null, user: null};
};

const showTips = (type, message, description) => notification[type]({message: message, description: description});
export default auth;
