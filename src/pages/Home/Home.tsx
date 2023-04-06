import './home.scss';
import React, { useEffect, useState } from 'react';
import HomeCard from '../../components/homeCard/HomeCard';
import SearchBar from '../../components/searchBar/SearchBar';

interface Tag {
  type: string;
  title: string;
}

interface PhotoCard {
  id: number;
  alt_description: string;
  description: string;
  created_at: string;
  height: number;
  weight: number;
  likes: number;
  urls: {
    small: string;
  };
  user: {
    name: string;
  };
  tags: Tag[];
}

function Home(): JSX.Element {
  const [photosData, setPhotosData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
  const [butDisabled, setButDisabled] = useState(false);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    const getData = async (value: string, pageNum: number) => {
      const url = `https://api.unsplash.com/search/photos?page=${pageNum}&per_page=12&query=${value}&client_id=_G-CEdAh_ell-uiSFlqCmINuadGChAQovi-i-wsPf3Q`;
      const response = await fetch(url);
      const results = await response.json();
      const data = await results.results;
      await setPhotosData(data);
      await setIsPending(false);

      console.log(data);
    };
    getData(searchValue, page);
    if (page === 1) {
      setButDisabled(true);
    } else {
      setButDisabled(false);
    }
  }, [searchValue, page]);

  return (
    <div>
      <SearchBar onSetSearchValue={setSearchValue} />
      <div className="product-items">
        {isPending && <div>Loading...</div>}
        {photosData &&
          photosData.map((el: PhotoCard) => {
            return <HomeCard card={el} key={el.id} />;
          })}
      </div>
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
  );
}

export default Home;
