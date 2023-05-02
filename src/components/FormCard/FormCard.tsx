import './formCard.scss';
import React from 'react';
import { CardData } from '../../types/types';

interface MyProps {
  card: CardData;
}

function FormCard(props: MyProps): JSX.Element {
  const { card } = props;
  const { name, birthday, country, vehicle, gender, photo } = card;

  return (
    <div
      className="form__card"
      style={{
        backgroundImage: `url(${photo})`,
      }}
    >
      <div className="card__name">
        <div>{name}</div>
      </div>
      <ul className="card__description">
        <li className="card__property">
          Birthday: <span className="card__value">{birthday}</span>
        </li>
        <li className="card__property">
          Country: <span className="card__value">{country}</span>
        </li>
        <li className="card__property">
          Vehicle: <span className="card__value">{vehicle.join(', ')}</span>
        </li>
        <li className="card__property">
          Gender: <span className="card__value">{gender}</span>
        </li>
      </ul>
    </div>
  );
}

export default FormCard;
