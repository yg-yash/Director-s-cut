/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';

import directorLoginSaga from './directorSagas/loginSaga';
import adminLoginSaga from './adminSagas/loginSaga';

export default function* rootSaga() {
  //yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([directorLoginSaga(), adminLoginSaga()]);
}
