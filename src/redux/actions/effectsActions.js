export const GAMESCENE_CREATE_EXPLOSION = "GAMESCENE_CREATE_EXPLOSION";
export const GAMESCENE_REMOVE_EXPLOSION = "GAMESCENE_REMOVE_EXPLOSION";

export const GAMESCENE_CREATE_TEXT_NOTIFICATION = "GAMESCENE_CREATE_TEXT_NOTIFICATION";
export const GAMESCENE_REMOVE_TEXT_NOTIFICATION = "GAMESCENE_REMOVE_TEXT_NOTIFICATION";


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

export const createTextNotification = (payload) => {
  return ({
    type: GAMESCENE_CREATE_TEXT_NOTIFICATION,
    payload: payload
  });
}

export const removeTextNotification = (payload) => {
  return ({
    type: GAMESCENE_REMOVE_TEXT_NOTIFICATION,
    payload: payload
  });
}