import React, { useState } from 'react';

import SearchIcon from '@mui/icons-material/Search';
import RecommendListItem from './RecommendListItem';

import './SearchBar.scss';

function SearchBar({ name, value, onChange }) {
  const [searchKeyword, setSearchKeyword] = useState(value);

  /**
   * 엔터키나 검색 버튼을 눌렀을 때 동작
   */
  const onSubmitHandler = e => {
    onChange({
      target: {
        name,
        value: searchKeyword
      }
    });
  };

  /**
   * 검색 input의 값이 변경될 때 동작
   */
  const onChangeHandler = e => {
    setSearchKeyword(e.target.value);
  };

  return (
    <div className="SearchBar">
      <input
        type="text"
        className="inputArea"
        onKeyDown={e => e.key == 'Enter' && onSubmitHandler(e)}
        value={searchKeyword}
        onChange={onChangeHandler}
        placeholder="검색"
      />
      <div className="searchBarRecommendedList">
        <RecommendListItem />
      </div>
      <button className="submitButton" onClick={onSubmitHandler}>
        <SearchIcon />
      </button>
    </div>
  );
}

export default SearchBar;
