import React from 'react';
import styles from './PokemonCard.module.scss';
const PokemonCard = React.memo(({ img, name, type }) => {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
      <h2>{name}</h2>
      <h3>Type: {type}</h3>
    </div>
  );
});

export default PokemonCard;
