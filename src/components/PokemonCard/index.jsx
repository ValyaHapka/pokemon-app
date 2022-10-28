import React from 'react';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.module.scss';
const PokemonCard = React.memo(({ img, name, type }) => {
  const path = `pokemon/${name}`;
  return (
    <Link to={path}>
      <div className={styles.card}>
        <img src={img} alt="" />
        <h2>{name}</h2>
        <h3>Type: {type}</h3>
      </div>
    </Link>
  );
});

export default PokemonCard;
