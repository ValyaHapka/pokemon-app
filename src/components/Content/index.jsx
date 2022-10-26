import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from '../PokemonCard';
import Sidebar from '../Sidebar';
import { getAllPokemons } from '../../redux/asyncActions/initialQuery';
import styles from './Content.module.scss';
import { pokesSelector } from '../../redux/slices/filterSlice';

const Content = () => {
  const dispatch = useDispatch();
  const { pokes, initialState } = useSelector(pokesSelector);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

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
