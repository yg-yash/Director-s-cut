/*
 * Reducer actions related with login
 */
import * as types from '../../types/competitionTypes';

export function requestCompetitions() {
  return {
    type: types.COMPETITION_REQUEST,
  };
}

export function competitionsFailed() {
  return {
    type: types.COMPETITION_FAILED,
  };
}

export function onCompetitionResponse(response) {
  return {
    type: types.COMPETITION_RESPONSE,
    response,
  };
}

export function enableLoader() {
  return {
    type: types.COMPETITION_ENABLE_LOADER,
  };
}

export function disableLoader() {
  return {
    type: types.COMPETITION_DISABLE_LOADER,
  };
}
