import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByType, pokesSelector } from '../../redux/slices/filterSlice';

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

const Sidebar = () => {
  const dispatch = useDispatch();
  const { selectedType } = useSelector(pokesSelector);

  const filterPokes = (e) => {
    dispatch(filterByType(e.target.outerText));
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
              onClick={filterPokes}>
              {t}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
