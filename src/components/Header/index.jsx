import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import pokelogo from '../../assets/png/pokelogo.png';
import Search from '../Search';
import styles from './Header.module.scss';

const Header = () => {
  const location = useLocation();
  return (
    <header className={styles.header}>
      <div className={styles.header_wrapper}>
        <Link to="/">
          <img src={pokelogo} alt="pokelogo" className={styles.header_wrapper_logo} />
        </Link>
        {location.pathname === '/' && <Search />}
      </div>
    </header>
  );
};
export default Header;
