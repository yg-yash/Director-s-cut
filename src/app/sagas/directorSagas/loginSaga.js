/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, delay, takeEvery } from 'redux-saga/effects';

// import loginUser from 'app/api/methods/loginUser';
import { DirectorActions } from '../../store/actions/directorsActions';
import * as types from '../../store/types/directorTypes';

// Our worker Saga that logins the user
function* loginDirectorAsync(value) {
  yield put(DirectorActions.enableLoader());
  yield delay(2000);
  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = { success: true, data: { id: 1 } };

  if (response.success) {
    value.history.push('/');
    yield put(DirectorActions.onLoginResponse(response.data));
    yield put(DirectorActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(DirectorActions.loginFailed());
    yield put(DirectorActions.disableLoader({}));
    setTimeout(() => {
      console.log('error');
    }, 200);
  }
}

//watcher saga
export default function* loginDirector() {
  yield takeEvery(types.LOGIN_REQUEST, loginDirectorAsync);
}
