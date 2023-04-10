import './home.scss';
import { useEffect, useState } from 'react';
import { Oval } from 'react-loader-spinner';
import HomeCard from '../../components/homeCard/HomeCard';
import SearchBar from '../../components/searchBar/SearchBar';
import { UnsplashCardData } from '../../types/types';

function Home(): JSX.Element {
  const [photosData, setPhotosData] = useState<UnsplashCardData[]>();
  const [searchValue, setSearchValue] = useState(localStorage.getItem('searchValue') || '');
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(12);
  const [sort, setSort] = useState('relevant');
  const [butDisabled, setButDisabled] = useState(false);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsPending(true);
    const getData = async (value: string, pageNum: number, perPageNum: number, imgSort: string) => {
      try {
        const url = `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=${perPageNum}&order_by=${imgSort}&query=${value}&client_id=_G-CEdAh_ell-uiSFlqCmINuadGChAQovi-i-wsPf3Q`;
        const response = await fetch(url);
        if (!response.ok) {
          throw Error('Could not fetch the data for that resource.');
        }
        const results = await response.json();
        const data = await results.results;
        await setPhotosData(data);
        await setIsPending(false);
        setError('');
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      }
    };
    getData(searchValue, page, perPage, sort);
    if (page === 1) {
      setButDisabled(true);
    } else {
      setButDisabled(false);
    }
  }, [searchValue, page, perPage, sort]);

  return (
    <div>
      <div className="search__container">
        <SearchBar onSetSearchValue={setSearchValue} />
        <select
          name="imgSort"
          className="input__sort"
          onChange={(e) => {
            setSort(e.target.value);
          }}
          defaultValue="relevant"
        >
          <option value="relevant">relevant</option>
          <option value="latest">latest</option>
        </select>
      </div>

      <div className="product-items">
        {error && <div className="error__data">{error}</div>}
        {!error && isPending && (
          <div className="loader">
            <Oval
              height={80}
              width={80}
              color="#1063e7e6"
              wrapperStyle={{}}
              wrapperClass="loader"
              visible
              ariaLabel="oval-loading"
              secondaryColor="#9dc2ffe6"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        )}
        {!isPending &&
          photosData &&
          photosData.map((el: UnsplashCardData) => {
            return <HomeCard card={el} key={el.id} />;
          })}
      </div>
      <div className="pagination__container">
        <div className="pagination-page__container">
          <div className="pagination-page__title">Page: </div>
          <div className="pagination-page__control">
            <button
              type="button"
              disabled={butDisabled}
              className="pagination-page__control-but pagination-page__control-left"
              onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
            >
              &lt;
            </button>
            <div className="pagination-page__counter">{page}</div>
            <button
              type="button"
              className="pagination-page__control-but pagination-page__control-right"
              onClick={() => setPage((prev) => prev + 1)}
            >
              &gt;
            </button>
          </div>
        </div>
        <div className="pagination-limit__container">
          <div className="pagination-limit__title">Limit: </div>
          <input
            className="pagination-limit__value"
            type="number"
            defaultValue={12}
            min="1"
            max="20"
            onChange={(e) => {
              setPerPage(Number(e.target.value));
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
