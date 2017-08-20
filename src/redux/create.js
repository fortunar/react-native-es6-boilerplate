import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import devTools from 'remote-redux-devtools';

import rootReducer from './modules/reducer';
import clientMiddleware from './middleware/clientMiddleware';
import ApiClient from './../helpers/ApiClient';

export default (data = {}) => {
  const middleware = [thunk, clientMiddleware(new ApiClient())];
  const finalCreateStore = compose(
    applyMiddleware(...middleware),
    devTools()
  );
  const store = createStore(rootReducer, data, finalCreateStore);

  devTools.updateStore(store);
  return store;
}
