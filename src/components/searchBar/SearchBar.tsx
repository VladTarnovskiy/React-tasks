import './searchBar.scss';
import React, { useEffect, useState } from 'react';
import Search from '../../assets/search.png';

interface MyState {
  value: string;
}

interface MyProps {
  onSearch: (value: string) => void;
}

// const HomeCard: React.FC<MyProps> = (props) => {
const SearchBar: React.FC<MyProps> = (props) => {
  // constructor(props: MyProps) {
  //   super(props);

  //   this.state = {
  //     value: '',
  //   };

  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  //   this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
  // }
  const [value, setValue] = useState('');
  // const [searchValue, setSearchValue] = useState('');

  // function componentDidMount() {
  //   const searchValue = localStorage.getItem('searchValue');
  //   if (searchValue !== null) {
  //     setValue(searchValue);
  //   }
  // }

  // function componentDidUpdate() {
  //   // const { value } = this.state;
  //   localStorage.setItem('searchValue', value);
  // }
  // useEffect(() => {
  //   function componentDidMount() {
  //     const searchValue = localStorage.getItem('searchValue');
  //     if (searchValue !== null) {
  //       setValue(searchValue);
  //     }
  //   }
  //   componentDidMount();
  //   return () => {
  //     function componentDidUpdate() {
  //       // const { value } = this.state;
  //       localStorage.setItem('searchValue', value);
  //     }
  //     componentDidUpdate();
  //   };
  // });

  // useEffect(() => {
  //   const searchValue = localStorage.getItem('searchValue');
  //   if (searchValue !== null) {
  //     setValue(searchValue);
  //   }
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     localStorage.setItem('searchValue', value);
  //   };
  // });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue((event.target as HTMLInputElement).value);
  }

  function handleSubmit() {
    // const { value } = this.state;
    const { onSearch } = props;
    onSearch(value);
  }

  function onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  }

  // render() {
  // const { value } = this.state;

  return (
    <form
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
        value={value}
      />
      <button type="button" className="search__button" onClick={handleSubmit}>
        <img src={Search} alt="Search" />
      </button>
    </form>
  );
  // }
};

export default SearchBar;
