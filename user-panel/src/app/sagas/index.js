/**
 *  Redux saga class init
 */
import { takeEvery, all } from 'redux-saga/effects';

import userSagas from './userSagas/loginSaga';
import competitionsSagas from './competitionSagas';

export default function* rootSaga() {
  //yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
  yield all([userSagas(), competitionsSagas()]);
}
