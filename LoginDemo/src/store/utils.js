/**
 * 判断是否是 promise
 */
export const isPromise = (value) => {
  if (value !== null && typeof value === 'object') {
    return value.promise && typeof value.promise.then === 'function';
  }
};

/**
 * 判断是否是amosFetch redux请求
 */
export const isAmosFetch = (value) => {
  if (value !== null && typeof value === 'object') {
    return value.amosFetch && typeof value.amosFetch.then === 'function';
  }
};
