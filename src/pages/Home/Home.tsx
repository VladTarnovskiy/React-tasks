import React, { useState, useLayoutEffect } from 'react';
import productData from '../../data';
import HomeCard from '../../components/homeCard/HomeCard';
import SearchBar from '../../components/searchBar/SearchBar';

interface MyProps {
  changeTitle: () => void;
}

interface Products {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
function Home(props: MyProps): JSX.Element {
  const [productsData, setProductsData] = useState(productData.products);
  const { changeTitle } = props;

  useLayoutEffect(() => {
    changeTitle();
  });

  const searchProducts = (value: string) => {
    const arrSearch: Products[] = [];
    const data = Array.from(productData.products);
    data.forEach((item) => {
      const itemTitle = item.title.toLowerCase().split(' ');
      const itemDescription = item.description.toLowerCase().split(' ');
      const categoryDescription = item.category.toLowerCase().split(' ');
      const brandDescription = item.brand.toLowerCase().split(' ');
      const arrSearchData = itemTitle.concat(
        itemDescription,
        categoryDescription,
        brandDescription
      );
      const regex = new RegExp(`${value.toLowerCase()}`, 'gi');
      if (arrSearchData.join('').match(regex) && !arrSearch.includes(item)) {
        arrSearch.push(item);
      }
    });
    setProductsData(arrSearch);
  };

  const cards = productsData.map((el) => {
    return <HomeCard card={el} key={el.id} />;
  });
  return (
    <div>
      <SearchBar onSearch={searchProducts} />
      <div className="product-items">{cards}</div>
    </div>
  );
}

export default Home;
