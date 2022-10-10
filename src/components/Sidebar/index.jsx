import React from 'react';

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

const Sidebar = ({ selectedType, onClickType }) => {
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
