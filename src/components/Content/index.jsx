import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import PokemonCard from '../PokemonCard';
import Sidebar from '../Sidebar';
import Sort from '../Sort';
import styles from './Content.module.scss';

const Content = () => {
  const [initialState, setInitialState] = useState([]);
  const [selectedType, setSelectedType] = useState('All');
  const [pokes, setPokes] = useState([]);
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
  }, [url]);

  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  const onClickType = (e) => {
    const pokesArr = initialState.filter((poke) => {
      if (e.target.outerText === 'All') {
        return initialState;
      }
      if (poke.types.length > 1) {
        return (
          poke.types[0].type.name === e.target.outerText ||
          poke.types[1].type.name === e.target.outerText
        );
      } else {
        return poke.types[0].type.name === e.target.outerText;
      }
    });
    setSelectedType(e.target.outerText);
    setPokes(pokesArr);
  };
  return (
    <div className={styles.content}>
      <div className={styles.content_filters}>
        <Sidebar selectedType={selectedType} onClickType={onClickType} />
      </div>
      <div className={styles.content_list}>
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
      <Sort />
    </div>
  );
};

export default Content;
