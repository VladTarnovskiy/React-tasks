import './homeCard.scss';
import React from 'react';

interface MyProps {
  card: {
    id: number;
    title: string;
    description?: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
  };
}

const HomeCard: React.FC<MyProps> = (props) => {
  const { card } = props;
  const { title, thumbnail, category, brand, price, discountPercentage, rating, stock } = card;
  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${thumbnail})`,
      }}
    >
      <div className="card__title">
        <div>{title}</div>
      </div>
      <ul className="card__description">
        <li className="card__property">
          Category: <span className="card__value card__value_category">{category}</span>
        </li>
        <li className="card__property">
          Brand: <span className="card__value card__value_brand">{brand}</span>
        </li>
        <li className="card__property">
          Price:{' '}
          <span className="card__value card__value_price">
            {price}
            <span> $</span>
          </span>
        </li>
        <li className="card__property">
          Discount: <span className="card__value card__value_discount">{discountPercentage} %</span>
        </li>
        <li className="card__property">
          Rating:{' '}
          <span className="card__value card__value_rating">
            {rating}
            <div className="card__rate-icon" />
          </span>
        </li>
        <li className="card__property">
          Stock: <span className="card__value card__value_stock">{stock}</span>
        </li>
      </ul>
    </div>
  );
};

export default HomeCard;
