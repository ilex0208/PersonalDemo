/**
 * 采用amosFetch实现redux时的一种中间件,将异步处理放在该中间件进行处理
 * @author ilex
 * @description one fetch middleware
 */

import { isAmosFetch } from './utils';

const promiseTypeSuffixes = ['PENDING', 'SUCCESS', 'ERROR'];

/**
 * 采用Promise实现的中间件
 * @export
 * @param {any} [config={}]
 * @returns
 */
export default function amosFetchMiddleware() {
  return (_ref) => {
    const dispatch = _ref.dispatch;

    return next => action => {
      if (!isAmosFetch(action.payload)) {
        return next(action);
      }

      const { type, payload } = action;
      const { amosFetch, data } = payload;
      // 正在执行/完成了/拒绝(执行错误)
      const [ PENDING, FULFILLED, REJECTED ] = promiseTypeSuffixes;

      /**
       * 触发异步redux. 告诉reducer 异步redux已经开始发起.
       */
      next({
        type: `${type}_${PENDING}`,
        ...data ? { payload: data } : {}
      });

      /**
       * 重新执行的dispatch 是一下之一:
       * 1. success
       * 2. failure
       */
      action.payload.amosFetch = amosFetch.then(res => res.json())
        .then((data) => {
          console.log('amosFetch=>', data);
          // Request success, dispatch the response data
          dispatch({ type: `${type}_${FULFILLED}`, payload: data });
        })
        .catch((Exception) => {
          // Request failure, dispatch the error, set result ERROR
          let error = {result: REJECTED, Exception};
          dispatch({ type: `${type}_${REJECTED}`,payload: error });
        });
      return action;
    };
  };
}
