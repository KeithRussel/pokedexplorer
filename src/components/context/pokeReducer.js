import {
  SEARCH_POKEMONS,
  SET_LOADING,
  CLEAR_POKEMON,
  GET_POKEMON,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_POKEMONS:
      return {
        ...state,
        pokeurls: action.payload,
        loading: false,
      };
    case GET_POKEMON:
      return {
        ...state,
        pokemon: action.payload,
        loading: false,
      };
    case CLEAR_POKEMON:
      return {
        ...state,
        pokeurls: {},
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
