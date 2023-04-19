import './modalHomeCard.scss';
import { UnsplashCardData } from '../../types/types';

interface MyProps {
  onClose: () => void;
  card: UnsplashCardData;
}

function ModalHomeCard(props: MyProps): JSX.Element {
  const { card } = props;
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { likes, description, alt_description, created_at, height, width, urls, user, tags } = card;
  const { regular } = urls;
  const { name } = user;
  const event = new Date(created_at);
  const { onClose } = props;

  return (
    <div className="prod">
      <div className="closer" onClick={onClose} onKeyDown={onClose} role="button" tabIndex={0}>
        ×
      </div>
      <div className="prod__title">{alt_description}</div>
      <div className="prod__description-container">
        <div className="prod__img-container">
          <div className="prod__img-display">
            <img className="prod__img-item" src={regular} alt="Product info" />
          </div>
        </div>
        <div className="prod__description-container">
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Tags:</div>
            <div className="prod__description-item-content">
              {tags.reduce((sum, item) => {
                return `${sum} ${item.title},`;
              }, '')}
            </div>
          </div>
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Created at:</div>
            <div className="prod__description-item-content">{event.toLocaleString()}</div>
          </div>
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Likes:</div>
            <div className="prod__description-item-content">
              <div className="prod__description-item-text">{likes}</div>
              <div className="card__rate-icon" />
            </div>
          </div>
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Username:</div>
            <div className="prod__description-item-content">{name}</div>
          </div>
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Ratio:</div>
            <div className="prod__description-item-content">{`${width} * ${height}px`}</div>
          </div>
          <div className="prod__description-item-container">
            <div className="prod__description-item-title">Description:</div>
            <div className="prod__description-item-content">
              {description === null ? 'No description' : description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalHomeCard;
