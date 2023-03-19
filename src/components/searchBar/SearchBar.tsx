import './searchBar.scss';
import Search from '../../assets/search.png';

interface Props {
  title: string;
}

const SearchBar: React.FC<Props> = ({ title }) => {
  return (
    <form
      className="search"
      //   onSubmit={(e) => {
      //     handleAdd(e);
      //     inputRef.current?.blur();
      //   }}
    >
      <input
        type="search"
        placeholder="Enter text"
        // value={todo}
        // onChange={(e) => setTodo(e.target.value)}
        className="products__search"
      />
      <button type="button" className="search__button">
        <img src={Search} alt="Search" />
      </button>
    </form>
  );
};

export default SearchBar;
