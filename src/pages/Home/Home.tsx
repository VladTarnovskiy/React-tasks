import React, { useState, useEffect } from 'react';
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

interface MyState {
  productsData: Products[];
}

const Home: React.FC<MyProps> = (props) => {
  // constructor(props: MyProps) {
  //   super(props);
  //   this.state = {
  //     productsData: productData.products,
  //   };

  //   this.searchProducts = this.searchProducts.bind(this);
  // }

  const [productsData, setProductsData] = useState(productData.products);

  useEffect(() => {
    const { changeTitle } = props;
    changeTitle();
  }, []);

  // componentDidMount() {
  //   const { changeTitle } = this.props;
  //   changeTitle();
  // }

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

  // render() {
  // const { productsData } = this.state;
  const cards = productsData.map((el) => {
    return <HomeCard card={el} key={el.id} />;
  });
  return (
    <div>
      <SearchBar onSearch={searchProducts} />
      <div className="product-items">{cards}</div>
    </div>
  );
  // }
};

export default Home;
