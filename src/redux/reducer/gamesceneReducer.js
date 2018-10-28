import { combineReducers } from 'redux';
import effectsReducer from './effectsReducer.js';

//Add the the other reducer strutures
export default combineReducers({
  effects: effectsReducer
})

