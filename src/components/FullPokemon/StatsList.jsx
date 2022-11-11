import React from 'react';

import styles from './FullPokemon.module.scss';

const StatsList = ({ pokemon }) => {
  return (
    <ul className={styles.wrapper_info_stats}>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>HP</h4>
        <span>{pokemon.stats[0].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[0].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>Attack</h4>
        <span>{pokemon.stats[1].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[1].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>Defense</h4>
        <span>{pokemon.stats[2].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[2].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>Sp. Attack</h4>
        <span>{pokemon.stats[3].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[3].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>Sp. Defense</h4>
        <span>{pokemon.stats[4].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[4].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
      <hr />
      <li className={styles.wrapper_info_stats_element}>
        <h4>Speed</h4>
        <span>{pokemon.stats[5].base_stat}</span>
        <div className={styles.wrapper_info_stats_element_line}>
          <div
            className={styles.wrapper_info_stats_element_line_fill}
            style={{
              width: `${pokemon.stats[5].base_stat}%`,
              height: `100%`,
              backgroundColor: `green`,
            }}
          />
        </div>
      </li>
    </ul>
  );
};

export default StatsList;
