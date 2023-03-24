import './searchBar.scss';
import React from 'react';
import Search from '../../assets/search.png';

interface MyState {
  value: string;
}

interface MyProps {
  onSearch: (value: string) => void;
}

class SearchBar extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyPressHandler = this.onKeyPressHandler.bind(this);
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue !== null) {
      this.setState({ value: searchValue });
    }
  }

  componentDidUpdate() {
    const { value } = this.state;
    localStorage.setItem('searchValue', value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: (event.target as HTMLInputElement).value });
  }

  handleSubmit() {
    const { value } = this.state;
    const { onSearch } = this.props;
    onSearch(value);
  }

  onKeyPressHandler(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      this.handleSubmit();
    }
  }

  render() {
    const { value } = this.state;
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
          onChange={this.handleChange}
          onKeyDown={this.onKeyPressHandler}
          value={value}
        />
        <button type="button" className="search__button" onClick={this.handleSubmit}>
          <img src={Search} alt="Search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
