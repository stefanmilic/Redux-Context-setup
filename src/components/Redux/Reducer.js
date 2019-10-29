import { ADD_PLAYER } from './Action';

export const initialState = {
  players: [],
};

// for particular action in this case ADD_PLAYER we change our state

export const reducer = (state = initialState, action) => {
  // action === { type, payload }
  switch (action.type) {
    case ADD_PLAYER:
      return {
        ...state, // state must be immutable
        // add new player
        players: [...state.players, action.payload],
      };
    default:
      return state;
  }
};
