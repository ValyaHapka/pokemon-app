import React, { useCallback, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import searchImg from '../../assets/svg/search.svg';
import closeImg from '../../assets/svg/close.svg';
import styles from './Search.module.scss';

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [localValue, setLocalValue] = useState('');

  const updateValues = useCallback(
    (e) => {
      setLocalValue(e.target.value);
      dispatch({ type: 'SEARCH_POKES', payload: e.target.value });
    },
    [dispatch],
  );

  const deleteValues = useCallback(() => {
    setLocalValue('');
    dispatch({ type: 'DELETE_SEARCH_POKES' });
    inputRef.current.focus();
  }, [dispatch]);

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
};
export default Search;
