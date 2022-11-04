import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './FullPokemon.module.scss';

const FullPokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const queryFunc = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const { data } = await axios.get(url);
      setPokemon(data);
      setIsLoaded(true);
    };
    queryFunc();
  }, [name]);
  return (
    <>
      {isLoaded && (
        <div className={styles.wrapper}>
          <h1>{name}</h1>
          <div className={styles.wrapper_info}>
            <img src={pokemon.sprites.front_default} alt="Pokemon" />
            <ul className={styles.wrapper_info_data}>
              <li className={styles.wrapper_info_data_element}>
                <h4>Type</h4>
              </li>
              <li className={styles.wrapper_info_data_element}>
                <h4>Type</h4>
              </li>
              <li className={styles.wrapper_info_data_element}>
                <h4>Type</h4>
              </li>
              <li className={styles.wrapper_info_data_element}>
                <h4>Type</h4>
              </li>
            </ul>
            <ul className={styles.wrapper_info_stats}>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default FullPokemon;
