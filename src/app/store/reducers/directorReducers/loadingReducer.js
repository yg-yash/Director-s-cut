/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/directorTypes';

const initialState = {
  isLoginLoading: false,
};

export default createReducer(initialState, {
  [types.LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [types.LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
});

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case types.LOGIN_ENABLE_LOADER:
//       return { ...state, isLoginLoading: true };
//     case types.LOGIN_DISABLE_LOADER:
//       return { ...state, isLoginLoading: true };
//     default:
//       return state;
//   }
// };
