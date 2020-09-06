/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/directorTypes';
const initialState = {
  isLoggedIn: false,
  id: 0,
  username: '',
  password: '',
};

export default createReducer(initialState, {
  [types.LOGIN_REQUEST](state, action) {
    return {
      ...state,
      username: action.username,
      password: action.password,
    };
  },
  [types.LOGIN_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.LOGIN_RESPONSE](state, action) {
    return {
      ...state,
      id: action.response.id,
      isLoggedIn: true,
    };
  },
  [types.LOGIN_FAILED](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
  [types.LOG_OUT](state) {
    return {
      ...state,
      isLoggedIn: false,
    };
  },
});

// export default (state = initialState, action) => {
//   switch (action.type) {
//     case types.LOGIN_REQUEST:
//       return {
//         ...state,
//         username: action.username,
//         password: action.password,
//       };
//     case types.LOGIN_LOADING_ENDED:
//       return { ...state };
//     case types.LOGIN_RESPONSE:
//       return {
//         ...state,
//         id: action.response.id,
//         isLoggedIn: true,
//       };
//     case types.LOGIN_FAILED:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };
//     case types.LOG_OUT:
//       return {
//         ...state,
//         isLoggedIn: false,
//       };

//     default:
//       return state;
//   }
// };
