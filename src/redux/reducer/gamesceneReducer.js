import { 
  GAMESCENE_CREATE_NEW_TOWER,
  GAMESCENE_CREATE_NEW_TOWER_SUCCESS,

  GAMESCENE_CREATE_EXPLOSION,
  GAMESCENE_REMOVE_EXPLOSION
} from "../actions/gamesceneActions";

const initialState = {
  explosions: [],
  spawningTowers: [],
  towers: []
};

export default function reducer(state = initialState, action = {}) {
  const {type, payload} = action;
  switch (type) {
    case GAMESCENE_CREATE_NEW_TOWER: {
      return {
        ...state,
        spawningTowers: [...spawningTowers, payload],
      }
    }

    case GAMESCENE_CREATE_NEW_TOWER_SUCCESS: {
      return {
        ...state,
        towers: [...state.towers, payload],
        spawningTowers: spawningTowers.filter((spawningTower)=>{
          return spawningTower.id === id ? false : true 
        })
      }
    }

    case GAMESCENE_CREATE_EXPLOSION: {
      return {
        ...state,
        explosions: [...state.explosions, payload],
      }
    }

    case GAMESCENE_REMOVE_EXPLOSION: {
      return {
        ...state,
        explosions: state.explosions.filter((spawningTower)=>{
          return spawningTower.id === payload.id ? false : true 
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
