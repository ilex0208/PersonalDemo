/**
 * 系统store
 * @author fe-tiangonglei
 */
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
// 导入中间件
import amosFetchMiddleware from './amosFetchMiddleware';

// 已经合并多个reducers
import rootReducers from './../reducers';

// 创建一个 Redux store 来以存放应用中所有的 state，应用中应有且仅有一个 store。
export const store = createStore(rootReducers);

// 创建一个带中间件的store
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
  amosFetchMiddleware(),
  createLogger()
)(createStore);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(rootReducers, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

