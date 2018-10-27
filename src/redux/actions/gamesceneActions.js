export const GAMESCENE_CREATE_NEW_TOWER = "GAMESCENE_CREATE_NEW_TOWER";
export const GAMESCENE_CREATE_NEW_TOWER_SUCCESS = "GAMESCENE_CREATE_NEW_TOWER_SUCCESS";

export const GAMESCENE_CREATE_EXPLOSION = "GAMESCENE_CREATE_EXPLOSION";
export const GAMESCENE_REMOVE_EXPLOSION = "GAMESCENE_REMOVE_EXPLOSION";


export const createNewTower = (payload) => {
  return ({
    type: GAMESCENE_CREATE_NEW_TOWER,
    payload: payload
  });
};

export const createExplosion = (payload) => {
  return ({
    type: GAMESCENE_CREATE_EXPLOSION,
    payload: payload
  });
};

export const removeExplosion = (payload) => {
  return ({
    type: GAMESCENE_REMOVE_EXPLOSION,
    payload: payload
  });
};