import './homeCard.scss';
import { useState } from 'react';
import ModalHomeCard from '../ModalHomeCard/ModalHomeCard';
import { UnsplashCardData } from '../../types/types';
import Modal from '../Modal/Modal';

interface MyProps {
  card: UnsplashCardData;
}

function HomeCard({ card }: MyProps): JSX.Element {
  const {
    likes,
    description,
    alt_description: altDescription,
    created_at: createdAt,
    urls,
    user,
    tags,
  } = card;
  const { small } = urls;
  const { name } = user;
  const event = new Date(createdAt);
  const [modal, setModal] = useState(false);

  const closeModalWindow = () => {
    setModal(false);
  };

  return (
    <>
      {modal && (
        <Modal>
          <ModalHomeCard card={card} onClose={closeModalWindow} />
        </Modal>
      )}
      <div
        className="home__card"
        onKeyDown={() => {
          setModal(true);
        }}
        onClick={() => {
          setModal(true);
        }}
        role="button"
        style={{
          backgroundImage: `url(${small})`,
        }}
        tabIndex={0}
      >
        <div className="card__title">
          <div>{description === null ? altDescription : description}</div>
        </div>
        <ul className="card__description">
          <li className="card__property">
            Created at:{' '}
            <span className="card__value card__value_category">{event.toLocaleString()}</span>
          </li>
          <li className="card__property">
            Likes:{' '}
            <span className="card__value card__value_likes">
              {likes}
              <div className="card__rate-icon" />
            </span>
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
  );
}

export default HomeCard;
