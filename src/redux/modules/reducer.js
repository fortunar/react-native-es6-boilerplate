import { combineReducers } from 'redux';

import routerReducer from './router';

export default combineReducers({
  router: routerReducer
});
