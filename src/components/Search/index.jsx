import React, { useCallback, useRef, useState } from 'react';

import searchImg from '../../assets/svg/search.svg';
import closeImg from '../../assets/svg/close.svg';
import styles from './Search.module.scss';

const Search = React.memo((props) => {
  const inputRef = useRef();
  const [localValue, setLocalValue] = useState('');

  const updateValues = useCallback((e) => setLocalValue(e.target.value), []);

  const deleteValues = useCallback(() => {
    setLocalValue('');
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.search}>
      <img src={searchImg} alt="" className={styles.search_icon} />
      <input
        type="text"
        value={localValue}
        onChange={updateValues}
        ref={inputRef}
        placeholder="Search Pokemons..."
      />
      {localValue && (
        <img src={closeImg} alt="" className={styles.search_close} onClick={deleteValues} />
      )}
    </div>
  );
});
export default Search;
