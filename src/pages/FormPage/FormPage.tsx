import './formPage.scss';
import { useState } from 'react';
import Form from '../../components/Form/Form';
import { CardData } from '../../types/types';
import FormCard from '../../components/FormCard/FormCard';

function FormPage(): JSX.Element {
  const [cardsData, setCardsData] = useState(Array<CardData>);
  const addCard = (card: CardData) => {
    const id = cardsData.length + 1;
    setCardsData([...cardsData, { id, ...card }]);
  };

  const cards = cardsData.map((el) => {
    return <FormCard card={el} key={el.id} />;
  });
  return (
    <div>
      <Form addCard={addCard} />
      <div className="form-items">{cards}</div>
    </div>
  );
}

export default FormPage;
