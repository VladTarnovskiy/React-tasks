import './formPage.scss';
import React from 'react';
import Form from '../../components/Form/Form';
import { FormCardType } from '../../types/types';
import FormCard from '../../components/FormCard/FormCard';

interface MyState {
  cardsData: Array<FormCardType>;
}

interface MyProps {
  changeTitle: () => void;
}

class FormPage extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      cardsData: [],
    };

    this.addCard = this.addCard.bind(this);
  }

  componentDidMount() {
    const { changeTitle } = this.props;
    changeTitle();
  }

  addCard(card: FormCardType) {
    const { cardsData } = this.state;
    const id = cardsData.length + 1;
    this.setState((prevState) => {
      return { cardsData: [...prevState.cardsData, { id, ...card }] };
    });
  }

  render() {
    const { cardsData } = this.state;
    const cards = cardsData.map((el) => {
      return <FormCard card={el} key={el.id} />;
    });
    return (
      <div>
        <Form addCard={this.addCard} />
        <div className="form-items">{cards}</div>
      </div>
    );
  }
}

export default FormPage;
