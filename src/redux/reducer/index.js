import { combineReducers } from 'redux';
import gamesceneReducer from './gamesceneReducer.js';

//Add the the other reducer strutures
export default combineReducers({
  gamescene: gamesceneReducer
})
