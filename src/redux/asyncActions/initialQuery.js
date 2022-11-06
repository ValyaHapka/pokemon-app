import axios from 'axios';

import {
  clearInitial,
  clearPokes,
  setInitialPokes,
  setIsLoading,
  setPokes,
} from '../slices/filterSlice';

export const getAllPokemons = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  return async (dispatch) => {
    dispatch(setIsLoading(true));
    dispatch(clearPokes());
    dispatch(clearInitial());
    const firstQuery = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        dispatch(setInitialPokes(query.data));
        dispatch(setPokes(query.data));
      });
      dispatch(setIsLoading(false));
    }
    createPokemonObject(firstQuery.data.results);
  };
};
