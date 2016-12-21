/**
 * 系统所有的redux
 * @author fe-tiangonglei
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './authReducer';

// 结合 react-router-redux
const rootReducers = combineReducers({
  authReducer,
  routing: routerReducer
});

export default rootReducers;

