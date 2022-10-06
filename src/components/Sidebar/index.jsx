import React, { useCallback, useState } from 'react';

import styles from './Sidebar.module.scss';

const types = [
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

const Sidebar = () => {
  const [selectedType, setSelectedType] = useState('All');

  const onClickType = useCallback((e) => {
    setSelectedType(e.target.outerText);
  }, []);

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
