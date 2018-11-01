
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
      return {
        ...state,
        hitSparks: [...state.hitSparks, payload],
      }
    }

    case GAMESCENE_REMOVE_HIT_SPARKS: {
      return {
        ...state,
        hitSparks: state.hitSparks.filter((spark)=>{
          return spark.id === payload.id ? false : true 
        })
      }
    }

    
    default: {
      return {
        ...state
      }
    }
  } 
}
