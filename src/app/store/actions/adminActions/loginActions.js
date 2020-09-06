/*
 * Reducer actions related with login
 */
import * as types from '../../types/adminTypes';

export function requestLogin(username, password, history) {
  return {
    type: types.ADMIN_LOGIN_REQUEST,
    username,
    password,
    history,
  };
}

export function loginFailed() {
  return {
    type: types.ADMIN_LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  return {
    type: types.ADMIN_LOGIN_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.ADMIN_LOGIN_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.ADMIN_LOGIN_DISABLE_LOADER,
  };
}

export function logOut() {
  return {
    type: types.ADMIN_LOG_OUT,
  };
}
