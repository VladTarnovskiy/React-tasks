import React from 'react';
import productData from '../../data';
import Card from '../../components/card/Card';
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

class Home extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      productsData: productData.products,
    };

    this.searchProducts = this.searchProducts.bind(this);
  }

  componentDidMount() {
    const { changeTitle } = this.props;
    changeTitle();
  }

  searchProducts(value: string) {
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
    this.setState({ productsData: arrSearch });
  }

  render() {
    const { productsData } = this.state;
    const cards = productsData.map((el) => {
      return (
        <Card
          title={el.title}
          thumbnail={el.thumbnail}
          category={el.category}
          brand={el.brand}
          price={el.price}
          discountPercentage={el.discountPercentage}
          rating={el.rating}
          stock={el.stock}
          key={el.id.toString()}
          id={el.id}
        />
      );
    });
    return (
      <div>
        <SearchBar onSearch={this.searchProducts} />
        <div className="product-items">{cards}</div>
      </div>
    );
  }
}

export default Home;
