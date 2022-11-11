import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DataList from './DataList';
import styles from './FullPokemon.module.scss';
import StatsList from './StatsList';

const FullPokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState([]);
  const [isLoadingPoke, setIsLoadingPoke] = useState(true);

  useEffect(() => {
    const queryFunc = async () => {
      const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
      const { data } = await axios.get(url);
      setPokemon(data);
      setIsLoadingPoke(false);
    };
    queryFunc();
  }, [name]);

  return (
    <>
      {isLoadingPoke === false && (
        <div className={styles.wrapper}>
          <h1>{name}</h1>
          <div className={styles.wrapper_info}>
            <div className={styles.wrapper_info_data}>
              <img src={pokemon.sprites.front_default} alt="Pokemon" />
              <DataList pokemon={pokemon} />
            </div>
            <StatsList pokemon={pokemon} />
          </div>
        </div>
      )}
    </>
  );
};

export default FullPokemon;
