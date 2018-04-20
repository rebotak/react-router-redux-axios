import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

export const history = createHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const client = axios.create({
  baseURL: `https://post-method-a9c8d.firebaseio.com`,
  responseType: 'json'
});

const composedEnhancers = compose(
  applyMiddleware(...middleware, axiosMiddleware(client)),
  ...enhancers
);

export default createStore(rootReducer, initialState, composedEnhancers);
