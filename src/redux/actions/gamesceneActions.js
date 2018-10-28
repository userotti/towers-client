export const GAMESCENE_CREATE_NEW_TOWER = "GAMESCENE_CREATE_NEW_TOWER";
export const GAMESCENE_CREATE_NEW_TOWER_SUCCESS = "GAMESCENE_CREATE_NEW_TOWER_SUCCESS";



export const createNewTower = (payload) => {
  return ({
    type: GAMESCENE_CREATE_NEW_TOWER,
    payload: payload
  });
};

