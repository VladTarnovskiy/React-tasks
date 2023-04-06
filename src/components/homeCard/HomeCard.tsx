import './homeCard.scss';

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
    weight: number;
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

function HomeCard({ card }: MyProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  const { likes, description, alt_description, created_at, height, weight, urls, user, tags } =
    card;
  const { small } = urls;
  const { name } = user;
  const event = new Date(created_at);


  return (
    <div
      className="card"
      style={{
        backgroundImage: `url(${small})`,
      }}
    >
      <div className="card__title">
        <div>{description === null ? 'No title' : description}</div>
      </div>
      <ul className="card__description">
        <li className="card__property">
          Created at: <span className="card__value card__value_category">{event.toLocaleString()}</span>
        </li>
        <li className="card__property">
          Likes: <span className="card__value card__value_brand">{likes}</span>
        </li>
        {/* <li className="card__property">
          Price:{' '}
          <span className="card__value card__value_price">
            {created_at}
            <span> $</span>
          </span>
        </li> */}
        <li className="card__property">
          Name: <span className="card__value card__value_discount">{name}</span>
        </li>
        {/* <li className="card__property">
          Rating:{' '}
          <span className="card__value card__value_rating">
            {weight}
            <div className="card__rate-icon" />
          </span>
        </li> */}
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
  );
}

export default HomeCard;
