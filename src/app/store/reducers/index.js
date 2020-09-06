// /*
//  * combines all th existing reducers
//  */

import { combineReducers } from 'redux';
import loginReducer from './directorReducers/loginReducer';
import loadingReducer from './directorReducers/loadingReducer';
import adminLoading from './adminReducers/loadingReducer';
import adminLogin from './adminReducers/loginReducer';

export default {
  loginReducer,
  loadingReducer,
  adminLoading,
  adminLogin,
};
