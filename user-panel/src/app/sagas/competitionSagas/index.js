/* Redux saga class
 * logins the user into the app
 * requires username and password.
 * un - username
 * pwd - password
 */
import { put, call, select, delay, takeEvery } from 'redux-saga/effects';

// import loginUser from 'app/api/methods/loginUser';
import { CompetitionsActions } from '../../store/actions/competitions/index';
import * as types from '../../store/types/competitionTypes';

// Our worker Saga that logins the user
function* competitionsAsync(value) {
  yield put(CompetitionsActions.enableLoader());
  // yield delay(2000);
  //how to call api
  //const response = yield call(loginUser, action.username, action.password);
  //mock response
  const response = { success: true, data: { id: 1 } };

  if (response.success) {
    yield put(CompetitionsActions.onCompetitionResponse());
    yield put(CompetitionsActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(CompetitionsActions.competitionsFailed());
    yield put(CompetitionsActions.disableLoader({}));
    setTimeout(() => {
      console.log('error');
    }, 200);
  }
}

//watcher saga
export default function* loginAdmin() {
  yield takeEvery(types.COMPETITION_REQUEST, competitionsAsync);
}
