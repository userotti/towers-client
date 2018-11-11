
import {
  GAMESCENE_CREATE_EXPLOSION,
  GAMESCENE_REMOVE_EXPLOSION,
  GAMESCENE_CREATE_TEXT_NOTIFICATION,
  GAMESCENE_REMOVE_TEXT_NOTIFICATION,
  GAMESCENE_CREATE_HIT_SPARKS,
  GAMESCENE_REMOVE_HIT_SPARKS
} from "../actions/effectsActions";

const initialState = {
  explosions: [],
  textNotifications: [],
  hitSparks: [],
};

const findReusableEffectIndex = (effects) => {
  let reuseableIndex;
  for (let i = 0; i < effects.length; i++){
    if (effects[i].isReset == false) {
      reuseableIndex = i;
      return i;
      
    }  
  }
  return reuseableIndex;
}

const reuseOrMakeNew = (array, payload) =>{
  let reuseableIndex = findReusableEffectIndex(array);
  if (reuseableIndex != undefined){
    array[reuseableIndex] = Object.assign({}, {
      ...payload,
      id: array[reuseableIndex].id,
      isReset: true,
    });
  }
  return reuseableIndex != undefined ? [...array] : [...array, {...payload, isReset: true}];
}

const markEffectAsReset = (array, payload)=>{
  for (let i = 0; i < array.length; i++){
    if (array[i].id == payload.id){
      array[i] = Object.assign({}, {
        ...array[i],
        isReset: false
      })
    }
  }
  return array;
}


export default function reducer(state = initialState, action = {}) {
  const {type, payload} = action;
  switch (type) {

    case GAMESCENE_CREATE_EXPLOSION: {
      return {
        ...state,
        explosions: reuseOrMakeNew(state.explosions, payload)
      }
    }

    case GAMESCENE_REMOVE_EXPLOSION: {
      return {
        ...state,
        explosions: markEffectAsReset(state.explosions, payload)
      }
    }

    case GAMESCENE_CREATE_TEXT_NOTIFICATION: {
      return {
        ...state,
        textNotifications: reuseOrMakeNew(state.textNotifications, payload)
      }
    }

    case GAMESCENE_REMOVE_TEXT_NOTIFICATION: {
      return {
        ...state,
        textNotifications: markEffectAsReset(state.textNotifications, payload)
      }
    }

    case GAMESCENE_CREATE_HIT_SPARKS: {
      return {
        ...state,
        hitSparks: reuseOrMakeNew(state.hitSparks, payload)
      }
    }

    case GAMESCENE_REMOVE_HIT_SPARKS: {
      return {
        ...state,
        hitSparks: markEffectAsReset(state.hitSparks, payload)
      }
    }
    
    default: {
      return {
        ...state
      }
    }
  } 
}
