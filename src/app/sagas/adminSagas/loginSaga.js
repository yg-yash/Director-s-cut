/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, delay, takeEvery } from 'redux-saga/effects';

// import loginUser from 'app/api/methods/loginUser';
import { AdminActions } from '../../store/actions/adminActions';
import * as types from '../../store/types/adminTypes';

// Our worker Saga that logins the user
function* loginAdminAsync(value) {
  yield put(AdminActions.enableLoader());
  yield delay(2000);
  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = { success: true, data: { id: 1 } };

  if (response.success) {
    value.history.push('/');
    yield put(AdminActions.onLoginResponse(response.data));
    yield put(AdminActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(AdminActions.loginFailed());
    yield put(AdminActions.disableLoader({}));
    setTimeout(() => {
      console.log('error');
    }, 200);
  }
}

//watcher saga
export default function* loginAdmin() {
  yield takeEvery(types.ADMIN_LOGIN_REQUEST, loginAdminAsync);
}
