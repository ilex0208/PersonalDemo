// 引入标准Fetch及IE兼容依赖
import 'whatwg-fetch';
import Cookie from 'react-cookie';

/**
 * 支持的所有method
 */
const MethodObj = {
  del: 'DELETE',
  get: 'GET',
  head: 'HEAD',
  options: 'OPTIONS',
  post: 'POST',
  put: 'PUT'
};

const defaultParams = {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'X-Api-Key':  Cookie.load('api_key'),
    'X-Access-Token': window.localStorage.getItem('token')
  }
};

/*
 * 检测对象是否是空对象(不包含任何可读属性)。
 * 方法只既检测对象本身的属性，不检测从原型继承的属性。
 */
const isEmptyObject = obj => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
};

/**
 *
 * 封装所有fetch请求
 * 使用说明:
 *  get：
 *  import {AmosFetch} from 'mainUtils';
 *  // 普通调用
 *  AmosFetch.get('yee.test.com/user',{params:{},data:{}});
 *  // 处理返回
 *  AmosFetch.get('yee.test.com/user',{params:{},data:{}}).then(do something);
 *  // 处理返回需要转json时
 *  AmosFetch.get('yee.test.com/user',{params:{},data:{}}).then((res)=>res.json()).then(do something);
 * @export
 * @class _AmosFetch
 */
export default  class _AmosFetch {
  constructor() {
    let keys = Object.keys(MethodObj) || [];
    keys.forEach(key =>
      this[key] = (url, { params, data } = {}) => {
        let m = {method: MethodObj[key]};
        let _body = isEmptyObject(data) ? {} : {body: JSON.stringify(data)};
        params = Object.assign(defaultParams, m, params, _body);
        // console.log('params==>', params);
        return fetch(url, params);
      }
    );
  }
}

/**
 * 请求后端json数据
 *
 * @export
 * @param {any} url 请求地址
 * @param {any} callback 请求成功回调
* */
export function fetchJson(url, callback) {
  fetch(url)
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    else
    {
      throw new Error('从服务端获取数据失败！');
    }
  })
  .then(callback)
  .catch(e => { console.log(e.message); });
}

/**
 * 将json数据发送给服务器
 *
 * @export
 * @param {any} url 后端url
 * @param {any} data object数据,如:{name:'ilex',pwd:'xxxxxx'}
 */
export function postJson(url,data){
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  });
}

/**
 * 将json数据发送给服务器,采用回调方式
 *
 * @export
 * @param {any} url 后端url
 * @param {any} data object数据,如:{name:'ilex',pwd:'xxxxxx'}
 * @param {any} callback 请求成功回调
 */
export function postJsonCall(url, data, callback){
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    else
    {
      throw new Error('从服务端获取数据失败！');
    }
  }).then(callback)
  .catch(e => { console.log(e.message); });
}

/**
 * 将json数据发送给服务器
 *
 * @export
 * @param {any} url 后端url
 */
export function putJson(url,data){
  return fetch(url,{
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(data)
  });
}

/**
 * get请求,默认分页方式
 *
 * @export
 * @param {any} url 后端url
 * @param {any} data object数据,如:{name:'ilex',pwd:'xxxxxx'} 或者 {page:1, size:10, code:'other'}
 * @param {any} callback 请求成功回调
 */
export function getByParams(url, data, callback){
  let keys  = Object.keys(data);
  let params = '';
  if(keys && keys.length > 0 ){
    keys.map(key => params += `${key}=${data[key]}&`);
    url = (params !== '' && params.length > 0) ? `${url}?${params.substring(0, params.length - 1)}` : url;
  }
  return fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=utf-8',
      'X-Access-Token': window.localStorage.getItem('token')
    }
  }).then(res => {
    if (res.ok) {
      return res.json();
    }
    else
    {
      throw new Error('从服务端获取数据失败！');
    }
  }).then(callback)
  .catch(e => { console.log(e.message); });
}
