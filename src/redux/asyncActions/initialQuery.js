import axios from 'axios';

import { setInitialPokes, setPokes } from '../slices/filterSlice';

export const getAllPokemons = () => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';
  return async (dispatch) => {
    const firstQuery = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        dispatch(setPokes(query.data));
        dispatch(setInitialPokes(query.data));
      });
    }
    createPokemonObject(firstQuery.data.results);
  };
};
