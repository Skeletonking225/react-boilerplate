/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */

import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';
import homeReducer from 'HomePage/reducer';

export default combineReducers({
  routing: routeReducer,
  home: homeReducer
});
