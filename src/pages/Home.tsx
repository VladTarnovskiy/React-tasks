import productData from '../data';
import Card from '../components/card/Card';
import SearchBar from '../components/searchBar/SearchBar';

function Home() {
  const cards = productData.products.map((el) => {
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
      <SearchBar title="Bar" />
      <div className="product-items">{cards}</div>
    </div>
  );
}

export default Home;
