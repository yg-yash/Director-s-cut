/**
 * Loading reducer made seperate for easy blacklisting
 * Avoid data persist
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/competitionTypes';

const initialState = {
  isCompetitionsLoading: false,
};

export default createReducer(initialState, {
  [types.COMPETITION_ENABLE_LOADER](state) {
    return { ...state, isCompetitionsLoading: true };
  },
  [types.COMPETITION_DISABLE_LOADER](state) {
    return { ...state, isCompetitionsLoading: false };
  },
});
