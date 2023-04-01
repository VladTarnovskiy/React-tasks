import './formPage.scss';
import React, { useState, useLayoutEffect } from 'react';
import Form from '../../components/Form/Form';
import { FormCardType } from '../../types/types';
import FormCard from '../../components/FormCard/FormCard';

interface MyProps {
  changeTitle: () => void;
}
function FormPage(props: MyProps): JSX.Element {
  const { changeTitle } = props;

  useLayoutEffect(() => {
    changeTitle();
  });

  const [cardsData, setCardsData] = useState(Array<FormCardType>);
  const addCard = (card: FormCardType) => {
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
