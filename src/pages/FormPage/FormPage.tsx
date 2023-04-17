import './formPage.scss';
import { useSelector } from 'react-redux/es/exports';
import Form from '../../components/Form/Form';
import FormCard from '../../components/FormCard/FormCard';
import { selectFormData } from '../../components/Form/formSlice';

function FormPage(): JSX.Element {
  const cardsData = useSelector(selectFormData);

  const cards = cardsData.map((el) => {
    return <FormCard card={el} key={el.id} />;
  });
  return (
    <div>
      <Form />
      <div className="form-items">{cards}</div>
    </div>
  );
}

export default FormPage;
