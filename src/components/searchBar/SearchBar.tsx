import './searchBar.scss';
import React, { useEffect, useState } from 'react';
import Search from '../../assets/search.png';

interface MyProps {
  onSearch: (value: string) => void;
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
    const { onSearch } = props;
    onSearch(searchValue);
  }

  function onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  return (
    <div
      className="search"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        type="search"
        placeholder="Enter text"
        className="products__search"
        onChange={handleChange}
        onKeyDown={onKeyPressHandler}
        value={searchValue}
      />
      <button type="button" className="search__button" onClick={handleSubmit}>
        <img src={Search} alt="Search" />
      </button>
    </div>
  );
}

export default SearchBar;
