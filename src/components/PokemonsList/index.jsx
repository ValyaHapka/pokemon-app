import React from 'react';

import PokemonCard from '../PokemonCard';
import styles from './PokemonsList.module.scss';

const PokemonsList = ({ pokes }) => {
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
