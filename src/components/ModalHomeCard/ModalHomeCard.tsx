import ReactDOM from 'react-dom';
import './modalHomeCard.scss';

interface Tag {
  type: string;
  title: string;
}

interface MyProps {
  onClose: () => void;
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

function ModalHomeCard(props: MyProps): JSX.Element {
  const modalRoot = document.getElementById('modal-root');
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { likes, description, alt_description, created_at, height, width, urls, user, tags } =
    props.card;
  const { small } = urls;
  const { name } = user;
  const event = new Date(created_at);
  const { onClose } = props;

  return ReactDOM.createPortal(
    <div className="overlay">
      <div className="prod">
        <div className="closer" onClick={onClose} onKeyDown={onClose} role="button" tabIndex={0}>
          ×
        </div>
        <div className="prod__title">{alt_description}</div>
        <div className="prod__descript-container">
          <div className="prod__img-container">
            <div className="prod__img-display">
              <img className="prod__img-item" src={small} alt="Product info" />
              <div className="prod__img-scale" />
            </div>
          </div>
          <div className="prod__descript-container">
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Tags:</div>
              <div className="prod__descript-item-content">
                {tags.reduce((sum, item) => {
                  return `${sum} ${item.title},`;
                }, '')}
              </div>
            </div>
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Created at:</div>
              <div className="prod__descript-item-content">{event.toLocaleString()}</div>
            </div>
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Likes:</div>
              <div className="prod__descript-item-content">
                <div className="prod__descript-item-text">{likes}</div>
                <div className="card__rate-icon" />
              </div>
            </div>
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Username:</div>
              <div className="prod__descript-item-content">{name}</div>
            </div>
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Ratio:</div>
              <div className="prod__descript-item-content">{`${width} * ${height}px`}</div>
            </div>
            <div className="prod__descript-item-container">
              <div className="prod__descript-item-title">Description:</div>
              <div className="prod__descript-item-content">
                {description === null ? 'No description' : description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
    modalRoot
  );
}

export default ModalHomeCard;
