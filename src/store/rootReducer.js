import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import navigation from '../shared/Navigation/NavigationDuck';

const appReducer = combineReducers({
  navigation,
  routing: routerReducer,
});

export default appReducer;
