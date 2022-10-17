import React, { useCallback, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import Sidebar from '../Sidebar';
import styles from './Content.module.scss';

const Content = React.memo(({ pokes, setPokes, initialState, setInitialState }) => {
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  const getAllPokemons = useCallback(async () => {
    const query = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        setPokes((currentList) => [...currentList, query.data]);
        setInitialState((currentList) => [...currentList, query.data]);
      });
    }
    createPokemonObject(query.data.results);
  }, [url, setPokes, setInitialState]);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  return (
    <div className={styles.content}>
      <div className={styles.content_filters}>
        <Sidebar initialState={initialState} setPokes={setPokes} />
      </div>
      <div className={styles.content_list}>
        {pokes.length > 1 ? (
          pokes.map((poke) => {
            return (
              <PokemonCard
                key={poke.name}
                img={poke.sprites.front_default}
                name={poke.name}
                type={poke.types[0].type.name}
              />
            );
          })
        ) : (
          <span>sorry, we don't have such Pokemon</span>
        )}
      </div>
    </div>
  );
});

export default Content;
