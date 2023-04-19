import './formPage.scss';
import Form from '../../components/Form/Form';
import FormCard from '../../components/FormCard/FormCard';
import { selectFormData } from '../../components/Form/formSlice';
import { useAppSelector } from '../../app/hooks';

function FormPage(): JSX.Element {
  const cardsData = useAppSelector(selectFormData);

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
