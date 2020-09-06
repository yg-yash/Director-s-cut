/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/userTypes';

const initialState = {
  isUserLoginLoading: false,
};

export default createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isUserLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isUserLoginLoading: false };
  },
});
