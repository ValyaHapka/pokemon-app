import React from 'react';

import pokelogo from '../../assets/png/pokelogo.png';
import Search from '../Search';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <img src={pokelogo} alt="pokelogo" className={styles.header_wrapper_logo} />
        <Search />
      </div>
    </header>
  );
}
