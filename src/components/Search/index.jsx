import React, { useCallback, useRef, useState, useContext } from 'react';

import searchImg from '../../assets/svg/search.svg';
import closeImg from '../../assets/svg/close.svg';
import styles from './Search.module.scss';
import { SearchContext } from '../../App';

const Search = React.memo(({ initialState, setPokes }) => {
  const inputRef = useRef();
  const [localValue, setLocalValue] = useState('');
  const { searchValue, setSearchValue } = useContext(SearchContext);

  const updateValues = useCallback(
    (e) => {
      setLocalValue(e.target.value);
      setSearchValue(e.target.value);
      const newArr = initialState.filter((p) => p.name.includes(searchValue.toLowerCase()));
      setPokes(newArr);
    },
    [setSearchValue, initialState, searchValue, setPokes],
  );

  const deleteValues = useCallback(() => {
    setLocalValue('');
    setSearchValue('');
    setPokes(initialState);
    inputRef.current.focus();
  }, [setSearchValue, setPokes, initialState]);

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
