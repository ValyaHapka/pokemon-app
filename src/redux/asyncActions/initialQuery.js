import axios from 'axios';

import { clearPokes, setInitialPokes, setIsLoaded, setPokes } from '../slices/filterSlice';

export const getAllPokemons = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  return async (dispatch) => {
    dispatch(setIsLoaded(false));
    dispatch(clearPokes());
    const firstQuery = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        dispatch(setInitialPokes(query.data));
        dispatch(setPokes(query.data));
      });
      dispatch(setIsLoaded(true));
    }
    createPokemonObject(firstQuery.data.results);
  };
};
