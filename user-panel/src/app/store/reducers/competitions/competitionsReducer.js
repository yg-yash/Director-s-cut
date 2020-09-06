/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../utils/createReducer';
import * as types from '../../types/competitionTypes';
const initialState = {
  competitionsList: [
    {
      id: 1,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 2,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 3,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 4,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 5,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 6,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 7,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 8,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
    {
      id: 9,
      competitionName: 'Singing',
      age: 5,
      likes: 20,
      image: require('../../../assets/images/competition.jpg'),
    },
  ],
};

export default createReducer(initialState, {
  [types.COMPETITION_REQUEST](state, action) {
    return {
      ...state,
    };
  },
  [types.COMPETITION_LOADING_ENDED](state) {
    return { ...state };
  },
  [types.COMPETITION_RESPONSE](state, action) {
    return {
      ...state,
    };
  },
  [types.COMPETITION_FAILED](state) {
    return {
      ...state,
      competitionsList: [],
    };
  },
});
