import React, { useState } from 'react';

import styles from './Sidebar.module.scss';

export const types = [
  'All',
  'normal',
  'fighting',
  'flying',
  'poison',
  'ground',
  'rock',
  'bug',
  'ghost',
  'water',
  'fire',
  'grass',
  'electric',
  'psychic',
  'ice',
  'dragon',
  'dark',
  'fairy',
  'unknown',
  'shadow',
];

const Sidebar = ({ initialState, setPokes }) => {
  const [selectedType, setSelectedType] = useState('All');

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
    <div className={styles.sidebar}>
      <h2>Types:</h2>
      <ul>
        {types.map((t) => {
          return (
            <li
              key={t}
              className={selectedType === t ? styles.sidebar_active : ''}
              onClick={onClickType}>
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
