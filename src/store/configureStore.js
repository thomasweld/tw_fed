import thunkMiddleware from 'redux-thunk';
import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from './rootReducer';

export default createStore(
  rootReducer,
  {},
  compose(
    applyMiddleware(
      thunkMiddleware,
      routerMiddleware(
        createBrowserHistory(),
      ),
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);
