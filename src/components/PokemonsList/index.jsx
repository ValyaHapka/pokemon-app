import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import styles from './PokemonsList.module.scss';

const PokemonsList = () => {
  const [pokes, setPokes] = useState([]);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  const getAllPokemons = useCallback(async () => {
    const query = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        setPokes((currentList) => [...currentList, query.data]);
      });
    }
    createPokemonObject(query.data.results);
  }, [url]);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  return (
    <div className={styles.list}>
      {pokes.map((poke) => {
        return (
          <PokemonCard
            key={poke.name}
            img={poke.sprites.front_default}
            name={poke.name}
            type={poke.types[0].type.name}
          />
        );
      })}
    </div>
  );
};

export default PokemonsList;
