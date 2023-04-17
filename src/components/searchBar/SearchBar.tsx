import './searchBar.scss';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { selectSearchBarValue, setSearchBarValue } from './searchBarSlice';
import Search from '../../assets/search.png';

function SearchBar(): JSX.Element {
  const dispatch = useDispatch();
  const searchValueFromStorage = useSelector(selectSearchBarValue);
  const [searchValue, setSearchValue] = useState(searchValueFromStorage);
  const handleSubmit = () => {
    dispatch(setSearchBarValue(searchValue));
  };

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
        data-testid="input-search"
        defaultValue={searchValueFromStorage}
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
