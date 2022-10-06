import React from 'react';
import PokemonsList from '../PokemonsList';

import Sidebar from '../Sidebar';
import Sort from '../Sort';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <div className={styles.content_filters}>
        <Sidebar />
      </div>
      <PokemonsList />
      <Sort />
    </div>
  );
};

export default Content;
