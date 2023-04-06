import './searchBar.scss';
import React, { useEffect, useState } from 'react';
import Search from '../../assets/search.png';

interface MyProps {
  onSetSearchValue: (value: string) => void;
}

function SearchBar(props: MyProps): JSX.Element {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  });

  useEffect(() => {
    const value = localStorage.getItem('searchValue');
    if (value !== null) {
      setSearchValue(value);
    }
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue((event.target as HTMLInputElement).value);
  }

  function handleSubmit() {
    const { onSetSearchValue } = props;
    onSetSearchValue(searchValue);
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
        value={searchValue}
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
