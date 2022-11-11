import React from 'react';
import styles from './FullPokemon.module.scss';

const DataList = React.memo(({ pokemon }) => {
  return (
    <div className={styles.data_block}>
      <h2>Pokedex data</h2>
      <ul className={styles.wrapper_info_data_list}>
        <hr />
        <li className={styles.wrapper_info_data_list_element}>
          <h4>National ID</h4>
          <span>{pokemon.id}</span>
        </li>
        <hr />
        <li className={styles.wrapper_info_data_list_element}>
          <h4>Type</h4>
          <div className={styles.wrapper_info_data_list_element_types}>
            {pokemon.types.map((t) => {
              return <span key={t.type.url}>{t.type.name}</span>;
            })}
          </div>
        </li>
        <hr />
        <li className={styles.wrapper_info_data_list_element}>
          <h4>Height</h4>
          <span>{pokemon.height}</span>
        </li>
        <hr />
        <li className={styles.wrapper_info_data_list_element}>
          <h4>Weight</h4>
          <span>{pokemon.weight}</span>
        </li>
      </ul>
    </div>
  );
});

export default DataList;
