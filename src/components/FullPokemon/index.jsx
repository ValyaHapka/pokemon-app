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
          <img src={pokemon.sprites.front_default} alt="Pokemon" />
        </div>
      )}
    </>
  );
};

export default FullPokemon;
