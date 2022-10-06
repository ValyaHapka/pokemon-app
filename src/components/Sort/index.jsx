import React, { useCallback, useState } from 'react';
import styles from './Sort.module.scss';

const sortTypes = ['Name', 'Age'];

const Sort = () => {
  const [popup, setPopup] = useState(false);
  const [sortType, setSortType] = useState('Name');

  const showPopup = useCallback(() => {
    setPopup(!popup);
  }, [popup]);

  const onClickSort = useCallback((e) => {
    e.stopPropagation();
    setSortType(e.target.outerText);
    setPopup(false);
  }, []);

  return (
    <div className={styles.sort}>
      <img src="" alt="" />
      <b>Sort By:</b>
      <span onClick={showPopup}>{sortType}</span>
      {popup && (
        <div className={styles.sort_popup}>
          <ul>
            {sortTypes.map((type) => {
              return (
                <li
                  key={type}
                  onClick={onClickSort}
                  className={sortType === type ? styles.sort_popup_active : ''}>
                  {type}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
