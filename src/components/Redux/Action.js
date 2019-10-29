// action type
export const ADD_PLAYER = 'ADD_PLAYER';

// action creator
// action which we call in Tab1 and Tab2 to grab player name

export const addPlayer = value => {
  return {
    type: ADD_PLAYER,
    payload: value,
  };
};
