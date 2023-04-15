import './searchBar.scss';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setSearchBarValue } from './searchBarSlice';

import Search from '../../assets/search.png';

// interface MyProps {
//   onSetSearchValue: (value: string) => void;
// }

function SearchBar(): JSX.Element {
  // function SearchBar(props: MyProps): JSX.Element {
  const dispatch = useDispatch();
  // const searchValue = useSelector(selectSearchBarValue);
  let value = '';

  // const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const handleSubmit = () => {
    // const { onSetSearchValue } = props;
    // onSetSearchValue(searchValue);
    dispatch(setSearchBarValue(value));
  };

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchValue', searchValue);
  //   };
  // });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    value = (event.target as HTMLInputElement).value;
  }

  function onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Enter text"
        className="products__search"
        onChange={handleChange}
        onKeyDown={onKeyPressHandler}
        // value={searchValue}
        data-testid="input-search"
      />
      <button
        type="button"
        className="search__button"
        onClick={handleSubmit}
        data-testid="submit-search"
      >
        <img src={Search} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
