// /*
//  * combines all th existing reducers
//  */

import loginReducer from './user/loginReducer';
import loadingReducer from './user/loadingReducer';
import loadingCompetitions from './competitions/loadingCompetitions';
import competitionsReducer from './competitions/competitionsReducer';

export default {
  loginReducer,
  loadingReducer,
  loadingCompetitions,
  competitionsReducer,
};
