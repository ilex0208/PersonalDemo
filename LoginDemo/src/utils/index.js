/**
 * 所有的工具类,全由index进行导出
 */
import _AmosFetch, {fetchJson, postJson, postJsonCall, putJson, getByParams} from './fetchPost';
const AmosFetch = new _AmosFetch();
export {AmosFetch, fetchJson, postJson, postJsonCall, putJson, getByParams};

export const getCookie = (name) => {
  let value = '; ' + document.cookie;
  let parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

/**
 * 判断对象是不是Json
 * @param {object} obj
 * @returns boolean true 是 false不是
 */
export const isJson = (obj) => typeof(obj) == 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length;

/**
 * 判断对象是不是数组
 * @param {object} arr
 * @returns boolean true 是 false不是
 */
export const isArray = (arr) => Object.prototype.toString.call(arr).toLowerCase() === '[object array]';

/**
 * 合并对象属性
 */
export const merged = (...args) => {
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    for (let key in args[i]) {
      let curObj = args[i][key];
      if (isJson(curObj)) {
        if (isJson(obj[key])) {
          obj[key] = merged(obj[key], curObj); // obj 此属性已经是对象，则和该对象原来的属性合并
        } else {
          obj[key] = merged(curObj); // obj 此属性不是对象，则和该对象原来的属性合并
        }
      } else {
        obj[key] = curObj; //属性不是obj
      }
    }
  }
};

/**
 * 将对象按指定部分进行拆分
 * @param {object} obj
 * @param {array} parts 数组,需要拆分出来的属性
 * @doc
 *  obj = {name:'111',style:'color:red'};parts =['name']
 *  splitObject(obj, parts) 结果: [{name: '111'},{style: 'color:red'} ]
 *  接收：
 *  const [{name}, rest] = splitObject(obj, parts);则可直接获取name数据
 */
export const splitObject = (obj, parts) => {
  let left = {};
  let right = {};
  Object.keys(obj).forEach((k) => {
    if (parts.indexOf(k) !== -1) {
      left[k] = obj[k];
    } else {
      right[k] = obj[k];
    }
  });
  return [left, right];
};

/**
 * 将对象的某一个属性当做共享,剩余属性分别与其组成新数组,实现重组对象
 * @param {object} obj
 * @param {string} targetKey 目标属性
 * @returns {array} parts 数组,需要重组的属性
 * @doc
 *  obj = {time:'12:23:15', B:'222', B:'222', C:'333'}; targetKey ='time', parts = ['A', 'B', 'C']
 *  regroupObject(obj, targetKey, parts) 结果: {A:{time:'12:23:15', A: '111'}, B:{time:'12:23:15', B: '222'}, C:{time:'12:23:15', C: '333'}}
 *  接收：
 *  const results = regroupObject(obj, targetKey, ['A', 'B', 'C']);
 *  results.map(result => let {A, B, C} = result);
 */
export const regroupObject = (obj, targetKey, parts) => {
  let result = {};
  Object.keys(obj).map(key => {
    parts.map(part => {
      let tempObj = {};
      key === part && (
        tempObj[targetKey] = obj[targetKey],
        tempObj[part] = obj[part],
        result[part] = tempObj
      );
    });
  });
  return result;
};

/**
 * 异步redux封装
 * @param {object} fetchOpts
 * @param {function} requestAction 请求action 可以为null
 * @param {function} receiveAction 接收数据action
 */
export const asyncRedux = (fetchOpts, requestAction, receiveAction) => {
  let {method, url, params = {}, data = {}} = fetchOpts;
  return dispatch => {
    requestAction && dispatch(requestAction());
    return AmosFetch[method](url, { params: params, data: data } )
      .then(
        res => {
          if (res.ok) { return res.json(); }
          else { throw new Error('从服务端获取数据失败！'); }
        }
      )
      .then(json => dispatch(receiveAction(json)));
  };
};
