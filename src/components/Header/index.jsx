import React from 'react';
import { Link } from 'react-router-dom';

import pokelogo from '../../assets/png/pokelogo.png';

import Search from '../Search';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/">
          <img src={pokelogo} alt="pokelogo" className={styles.header_wrapper_logo} />
        </Link>
        <Search />
      </div>
    </header>
  );
};
export default Header;
