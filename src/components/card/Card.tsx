import './card.scss';

export interface Props {
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
  images?: string[];
  amount?: number;
  totalPrice?: number;
  inBasket?: boolean;
}

const Card: React.FC<Props> = ({
  title,
  thumbnail,
  category,
  brand,
  price,
  discountPercentage,
  rating,
  stock,
}) => {
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
          Raiting:{' '}
          <span className="card__value card__value_raiting">
            {rating}
            <div className="card__rate-icon" />
          </span>
        </li>
        <li className="card__property">
          Stock: <span className="card__value card__value_stock">{stock}</span>
        </li>
      </ul>
      {/* <div className="card__buttons">
        <div className="card__button card__button_add card__button-add_active" data-id="98">
          In cart
        </div>
        <div className="card__button card__button_detail" data-id="98">
          Details
        </div>
      </div> */}
    </div>
  );
};

export default Card;
