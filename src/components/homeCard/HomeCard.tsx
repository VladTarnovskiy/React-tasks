import './homeCard.scss';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import ModalHomeCard from '../ModalHomeCard/ModalHomeCard';

interface Tag {
  type: string;
  title: string;
}

interface MyProps {
  card: {
    id: number;
    alt_description: string;
    description: string;
    created_at: string;
    height: number;
    width: number;
    likes: number;
    urls: {
      small: string;
    };
    user: {
      name: string;
    };
    tags: Tag[];
  };
}

// const modalRoot = document.getElementById('modal-root');

function HomeCard({ card }: MyProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { likes, description, alt_description, created_at, urls, user, tags } = card;
  const { small } = urls;
  const { name } = user;
  const event = new Date(created_at);
  const [modal, setModal] = useState(false);

  const closeModalWindow = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <ModalHomeCard card={card} onClose={closeModalWindow} />}
      <div
        className="home__card"
        onKeyDown={() => {
          setModal(true);
        }}
        onClick={() => {
          setModal(true);
          console.log(modal);
        }}
        role="button"
        style={{
          backgroundImage: `url(${small})`,
        }}
        tabIndex={0}
      >
        <div className="card__title">
          <div>{description === null ? alt_description : description}</div>
        </div>
        <ul className="card__description">
          <li className="card__property">
            Created at:{' '}
            <span className="card__value card__value_category">{event.toLocaleString()}</span>
          </li>
          <li className="card__property">
            Likes: <span className="card__value card__value_brand">{likes}</span>
          </li>
          <li className="card__property">
            Name: <span className="card__value card__value_discount">{name}</span>
          </li>
          <li className="card__property">
            Tags:{' '}
            <span className="card__value card__value_stock">
              {tags.reduce((sum, item) => {
                return `${sum} ${item.title},`;
              }, '')}
            </span>
          </li>
        </ul>
      </div>
    </>
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
  );
}

export default HomeCard;
