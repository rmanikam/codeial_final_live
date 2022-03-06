import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers/index.js';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

let store;

export function configureStore() {
  // note createStore will be coming from redux
  store = createStore(reducer, applyMiddleware(thunk));

  return store;
}

// combineReducers({ posts, users }) was suppose to be inside createStore
// method above but we are exporting it by  creating index.js inside store folder
//we now know that root state is an object and for that we will use combine reducer
//because createStore method only receives one reducer so we combine all the reducers
// together to form 1 reducer and insert it in combineReducer method
