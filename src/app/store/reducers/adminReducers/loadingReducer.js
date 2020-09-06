/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/adminTypes';

const initialState = {
  isAdminLoginLoading: false,
};

export default createReducer(initialState, {
  [types.ADMIN_LOGIN_ENABLE_LOADER](state) {
    return { ...state, isAdminLoginLoading: true };
  },
  [types.ADMIN_LOGIN_DISABLE_LOADER](state) {
    return { ...state, isAdminLoginLoading: false };
  },
});

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case types.ADMIN_LOGIN_ENABLE_LOADER:
//       return { ...state, isAdminLoginLoading: true };
//     case types.ADMIN_LOGIN_DISABLE_LOADER:
//       return { ...state, isAdminLoginLoading: false };
//     default:
//       return state;
//   }
// };
