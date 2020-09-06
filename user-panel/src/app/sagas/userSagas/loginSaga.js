/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, delay, takeEvery } from 'redux-saga/effects';

// import loginUser from 'app/api/methods/loginUser';
import { UserActions } from '../../store/actions/userActions';
import * as types from '../../store/types/userTypes';

// Our worker Saga that logins the user
function* loginAdminAsync(value) {
  yield put(UserActions.enableLoader());
  yield delay(2000);
  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = { success: true, data: { id: 1 } };

  if (response.success) {
    value.history.push('/');
    yield put(UserActions.onLoginResponse(response.data));
    yield put(UserActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(UserActions.loginFailed());
    yield put(UserActions.disableLoader({}));
    setTimeout(() => {
      console.log('error');
    }, 200);
  }
}

//watcher saga
export default function* loginAdmin() {
  yield takeEvery(types.LOGIN_REQUEST, loginAdminAsync);
}
