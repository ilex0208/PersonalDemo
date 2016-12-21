import {AmosFetch, asyncRedux} from 'mainUtils';
import CommonConstants from './../utils/commonConstants';
import {loginAuthUrl, thirdAuthUrl, permissionsUrl} from './urlConf';
import Cookie from 'react-cookie';

import {
  LOGIN,
  REQUEST_LOGIN,
  RECEIVE_LOGIN,
  REQUEST_THIRD_AUTH,
  RECEIVE_THIRD_AUTH,
  LOGOUT,
  GET_PERMISSIONS
} from './constants';

/**
 * 普通登陆验证
 * @export
 * @param {any} params
 * @returns
 */
export function loginAuth(params) {
  let {userName, password} = params;
  let url = `${loginAuthUrl}/${userName}/${password}`;
  return {
    type: LOGIN,
    payload: {
      amosFetch: AmosFetch.get(url)
    }
    // payload: {
    //   promise: api.get(UrlConfiger.loginAuth, { data: params })
    // }
  };
}
/**
 * 普通登陆验证,采用自定义异步redux
 * @export
 * @param {any} params
 * @returns
 */
export function loginAsync(params) {
  let {userName, password} = params;
  let url = `${loginAuthUrl}/${userName}/${password}`;
  let fetchOpts = {
    method: 'get',
    url: url
  };
  return (dispatch, getState) => dispatch(asyncRedux(fetchOpts, requestLoginAuth, receiveLoginAuth));
}

const requestLoginAuth = () => {
  return {
    type: REQUEST_LOGIN,
    payload: 'request login'
  };
};

const receiveLoginAuth = (data) => {
  return {
    type: RECEIVE_LOGIN,
    payload: data
  };
};

/**
 * 第三方验证
 * @export
 * @param {any} params
 * @returns
 */
export function thirdAuth(params) {
  let fetchOpts = {
    method: 'post',
    url: thirdAuthUrl,
    data: params
  };
  return (dispatch, getState) => dispatch(asyncRedux(fetchOpts, requestThirdAuth, receiveThirdAuth));
}

const requestThirdAuth = () => {
  return {
    type: REQUEST_THIRD_AUTH,
    payload: 'request third auth'
  };
};

const receiveThirdAuth = (data) => {
  return {
    type: RECEIVE_THIRD_AUTH,
    payload: data
  };
};

/**
 * 获取权限
 * @export
 * @returns
 */
export function getPermissions() {
  return {
    type: GET_PERMISSIONS,
    payload: {
      promise: AmosFetch.get(permissionsUrl)
    }
  };
}

/**
 * 退出操作
 * 因为需要修改getPermissions方法的生成数据，所以需要定义一个actions走reducer来重置数据
 * @export
 * @returns
 */
export function logout() {
  return {
    type: LOGOUT
  };
}

export function user() {
  return {
    api_key: Cookie.load(CommonConstants.api_key),
    userId: localStorage.getItem(CommonConstants.userId),
    userName: localStorage.getItem(CommonConstants.userName)
  };
}

/**
 * 权限检查
 *
 * @export
 * @param {any} controller
 * @param {any} action
 * @returns
 */
export function checkPermissions(controller, action) {
  let permissions = JSON.parse(localStorage.getItem(CommonConstants.permissions)), allow = false;
  if (permissions) {
    permissions.urls.allows.map((item) => {
      if (item.controller === controller && item.action === action) {
        allow = true;
      }
    });
  }
  return allow;
}

