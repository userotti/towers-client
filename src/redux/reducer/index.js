import { combineReducers } from 'redux';
import gameSceneReducer from './gameSceneReducer.js';

//Add the the other reducer strutures
export default combineReducers({
  gameScene: gameSceneReducer
})
