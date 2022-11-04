import React, { useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import searchImg from '../../assets/svg/search.svg';
import closeImg from '../../assets/svg/close.svg';
import styles from './Search.module.scss';
import { deleteSearchPokes, pokesSelector, searchPokes } from '../../redux/slices/filterSlice';

const Search = () => {
  const dispatch = useDispatch();
  const { searchValue } = useSelector(pokesSelector);
  const inputRef = useRef();

  const updateValues = useCallback(
    (e) => {
      dispatch(searchPokes(e.target.value));
    },
    [dispatch],
  );

  const deleteValues = useCallback(() => {
    dispatch(deleteSearchPokes());
    inputRef.current.focus();
  }, [dispatch]);

  return (
    <div className={styles.search}>
      <img src={searchImg} alt="" className={styles.search_icon} />
      <input
        type="text"
        value={searchValue}
        onChange={updateValues}
        ref={inputRef}
        placeholder="Search Pokemons..."
      />
      {searchValue && (
        <img src={closeImg} alt="" className={styles.search_close} onClick={deleteValues} />
      )}
    </div>
  );
};
export default Search;
