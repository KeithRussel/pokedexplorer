import React, { useReducer } from 'react';
import axios from 'axios';
import PokeContext from './pokeContext';
import PokeReducer from './pokeReducer';
import {
  SEARCH_POKEMONS,
  SET_LOADING,
  CLEAR_POKEMON,
  // CLEAR_POKEMONS,
  // GET_POKEMON,
} from './types';

const PokeState = (props) => {
  const initialState = {
    pokeurls: {},
    pokemons: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(PokeReducer, initialState);

  // Search Pokemons
  const searchPokemons = async (text) => {
    setLoading(true);

    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${text}`);

    dispatch({
      type: SEARCH_POKEMONS,
      payload: res.data,
    });
  };

  // Clear Pokemon
  const clearPokemon = () => dispatch({ type: CLEAR_POKEMON });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PokeContext.Provider
      value={{
        pokeurls: state.pokeurls,
        pokemons: state.pokemons,
        loading: state.loading,
        searchPokemons,
        clearPokemon,
      }}
    >
      {props.children}
    </PokeContext.Provider>
  );
};

// const pokeState = () => {
//   return <div></div>;
// };

export default PokeState;
