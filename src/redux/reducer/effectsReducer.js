
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

  return reuseableIndex

}


export default function reducer(state = initialState, action = {}) {
  const {type, payload} = action;
  switch (type) {

    case GAMESCENE_CREATE_EXPLOSION: {


      return {
        ...state,
        explosions: [...state.explosions, payload],
      }
    }

    case GAMESCENE_REMOVE_EXPLOSION: {
      return {
        ...state,
        explosions: state.explosions.filter((explosion)=>{
          return explosion.id === payload.id ? false : true 
        })
      }
    }

    case GAMESCENE_CREATE_TEXT_NOTIFICATION: {
      return {
        ...state,
        textNotifications: [...state.textNotifications, payload],
      }
    }

    case GAMESCENE_REMOVE_TEXT_NOTIFICATION: {
      return {
        ...state,
        textNotifications: state.textNotifications.filter((notification)=>{
          return notification.id === payload.id ? false : true 
        })
      }
    }

    case GAMESCENE_CREATE_HIT_SPARKS: {

      //find a reuseable effect
      let reuseableIndex = undefined
      reuseableIndex = findReusableEffectIndex(state.hitSparks);
      if (reuseableIndex != undefined){

        //swop it out  
        state.hitSparks[reuseableIndex] = Object.assign({}, {
          ...payload,
          id: state.hitSparks[reuseableIndex].id,
          isReset: true,
        });

        //console.log("found one to reuse "+ reuseableIndex);
        return {
          ...state,
          hitSparks: [...state.hitSparks]
        }

      } else {

        //console.log("made a new one");
        //add new
        return {
          ...state,
          hitSparks: [...state.hitSparks, {...payload, isReset: true}]
        }

      }

    }

    case GAMESCENE_REMOVE_HIT_SPARKS: {

      for (let i = 0; i < state.hitSparks.length; i++){
        if (state.hitSparks[i].id == payload.id){
          state.hitSparks[i] = Object.assign({}, {
            ...state.hitSparks[i],
            isReset: false,
            resetTime: Date.now()
          })
        }
      }

      
      return {
        ...state,
        hitSparks: [...state.hitSparks]
      }

    }

    
    default: {
      return {
        ...state
      }
    }
  } 
}
