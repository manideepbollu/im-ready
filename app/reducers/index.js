import { combineReducers } from 'redux';
import * as userDataReducer from './user-data';

export default combineReducers(Object.assign(
  userDataReducer
));