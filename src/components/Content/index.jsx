import React, { useCallback, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import Sidebar from '../Sidebar';
import styles from './Content.module.scss';
import { useDispatch, useSelector } from 'react-redux';

const Content = () => {
  const dispatch = useDispatch();
  const { pokes, initialState } = useSelector((state) => state);
  const url = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  const setPokes = useCallback(
    (data) => {
      dispatch({ type: 'ADD_POKES', payload: data });
    },
    [dispatch],
  );

  const setInitialState = useCallback(
    (data) => {
      dispatch({ type: 'INITIAL_POKES', payload: data });
    },
    [dispatch],
  );

  const getAllPokemons = useCallback(async () => {
    const query = await axios.get(url);
    function createPokemonObject(result) {
      result.forEach(async (poke) => {
        const query = await axios.get(`${poke.url}`);
        setPokes(query.data);
        setInitialState(query.data);
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
        <Sidebar initialState={initialState} />
      </div>
      <div className={styles.content_list}>
        {pokes.length >= 1 ? (
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
          <span>😕 sorry, we don't have such Pokemon</span>
        )}
      </div>
    </div>
  );
};

export default Content;
