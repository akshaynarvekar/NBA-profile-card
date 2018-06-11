import { FETCH_PLAYERS, FETCH_NEW_PLAYER, DELETE_PLAYER, EDIT_PLAYER } from '../actions/type';

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PLAYERS:
      return {
        ...state,
        items: action.payload
      };
    case FETCH_NEW_PLAYER:
      return {
        ...state,
        item: action.payload
      };
    case DELETE_PLAYER:
      return {
        ...state,
        items: state.items.filter(player => player.id !== action.payload.id)
      };
    case EDIT_PLAYER:
      return {
        ...state,
        items: state.items.map(player => player.id === action.payload.id ? action.payload : player)
      };
    default:
      return state;
  }
}
