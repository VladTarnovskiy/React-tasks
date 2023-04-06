import './modalHomeCard.scss';

// interface MyProps {
//   card: {
//     id: number;
//     alt_description: string;
//     created_at: string;
//     height: number;
//     weight: number;
//     urls: {
//       regular: string;
//     };
//   };
// }

function ModalHomeCard({ card }: MyProps): JSX.Element {
  const { alt_description, created_at, height, weight, urls } = card;
  const { regular } = urls;
  return (
    <div className="prod">
      <div className="prod__title">iPhone X</div>
      <div className="prod__descript-container">
        <div className="prod__img-container">
          <button type="button" className="prod__img-but prod__img-but_left">
            &lt;
          </button>
          <div className="prod__img-display">
            <img
              className="prod__img-item"
              src="https://i.dummyjson.com/data/products/2/2.jpg"
              alt="Product info"
            />
            <div className="prod__img-scale" />
          </div>
          <button type="button" className="prod__img-but prod__img-but_right">
            &gt;
          </button>
        </div>
        <div className="prod__descript-container">
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Description:</div>
            <div className="prod__descript-item-conent">
              SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12
              Bionic chip with ...
            </div>
          </div>
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Discount Percentage:</div>
            <div className="prod__descript-item-conent">17.94 %</div>
          </div>
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Rating:</div>
            <div className="prod__descript-item-conent">
              <div className="prod__descript-item-text">4.44</div>
              <div className="card__rate-icon" />
            </div>
          </div>
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Stock:</div>
            <div className="prod__descript-item-conent">34</div>
          </div>
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Brand:</div>
            <div className="prod__descript-item-conent">Apple</div>
          </div>
          <div className="prod__descript-item-container">
            <div className="prod__descript-item-title">Category:</div>
            <div className="prod__descript-item-conent">smartphones</div>
          </div>
        </div>
        <div className="prod__buttons-container">
          <div className="prod__price">899 $</div>
          <button type="button" className="prod__but card__button_add">
            Add to cart
          </button>
          <button type="button" className="prod__but prod__but-buy">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalHomeCard;
