/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/adminTypes';
const initialState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export default createReducer(initialState, {
  [types.ADMIN_LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.ADMIN_LOGIN_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.ADMIN_LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response.id,
      isLoggedIn: true,
    };
  },
  [types.ADMIN_LOGIN_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.ADMIN_LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});
