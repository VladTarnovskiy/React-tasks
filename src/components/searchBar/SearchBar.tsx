import './searchBar.scss';
import React, { useEffect, useState } from 'react';
import Search from '../../assets/search.png';

interface MyProps {
  onSetSearchValue: (value: string) => void;
}

function SearchBar(props: MyProps): JSX.Element {
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');

  const handleSubmit = () => {
    const { onSetSearchValue } = props;
    onSetSearchValue(searchValue);
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('searchValue', searchValue);
    };
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue((event.target as HTMLInputElement).value);
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
