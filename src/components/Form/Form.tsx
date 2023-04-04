/* eslint-disable react/jsx-props-no-spreading */
import './form.scss';
import { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { CardData, FormData } from '../../types/types';

interface MyProps {
  addCard: (card: CardData) => void;
}

function Form(props: MyProps): JSX.Element {
  const formMessageRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'onSubmit',
  });

  const getFileLink = (fileObj: FileList) => {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  };

  const onSubmit: SubmitHandler<FormData> = (data: FormData) => {
    const { addCard } = props;
    const link = getFileLink(data.photo);
    const formData = {
      name: data.name,
      birthday: data.birthday,
      country: data.country,
      vehicle: data.vehicle,
      gender: data.gender,
      photo: link,
      rules: data.rules,
    };
    getFileLink(data.photo);
    addCard(formData);
    formMessageRef.current?.classList.add('active');
    reset();
    setTimeout(() => {
      formMessageRef.current?.classList.remove('active');
    }, 3000);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} data-testid="form">
      <div className="form__saved" ref={formMessageRef}>
        <div className="form__saved-message">Data saved!</div>
      </div>
      <div className="form__title">Personal data</div>
      <div className="input__item">
        <div className="input__item-title">Name:</div>
        <input
          type="text"
          placeholder="Enter name"
          className="form__name"
          data-testid="input-name"
          {...register('name', {
            required: 'Please enter name!',
            minLength: {
              value: 3,
              message: 'Your name must be more than 4 letters!',
            },
            pattern: {
              value: /^[A-Za-z ]+$/,
              message: 'Your name should only english letters!',
            },
            validate: (value) =>
              value[0] === value[0].toUpperCase()
                ? true
                : 'Your name should start with a capital letter!',
          })}
        />
      </div>
      {errors.name && <div className="form__error">{errors.name.message}</div>}
      <div className="input__item">
        <div className="input__item-title">Birthday:</div>
        <input
          type="date"
          placeholder="Enter date"
          className="form__date"
          data-testid="input-date"
          {...register('birthday', {
            required: 'Enter your birthday!',
            max: {
              value: new Date().toISOString().split('T')[0],
              message: 'Please enter a date not in the future',
            },
          })}
        />
      </div>
      {errors.birthday && <div className="form__error">{errors.birthday.message}</div>}
      <div className="input__item">
        <div className="input__item-title">Country:</div>
        <select
          className="form__country"
          {...register('country', {
            required: 'Choose country!',
          })}
          data-testid="input-country"
        >
          <option value="Belarus">Belarus</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
        </select>
      </div>
      {errors.country && <div className="form__error">{errors.country.message}</div>}
      <div className="input__item">
        <span className="input__item-title">Vehicle:</span>
        <div className="form__vehicle">
          <label htmlFor="car">
            <input
              type="checkbox"
              id="car"
              value="car"
              {...register('vehicle')}
              data-testid="input-vehicle"
            />{' '}
            Car
          </label>
          <label htmlFor="motorcycle">
            <input type="checkbox" id="motorcycle" value="motorcycle" {...register('vehicle')} />{' '}
            Motorcycle
          </label>
          <label htmlFor="bike">
            <input type="checkbox" id="bike" value="bike" {...register('vehicle')} /> Bike
          </label>
        </div>
      </div>
      <div className="input__item">
        <span className="input__item-title">Gender:</span>
        <div className="form__gender">
          <label htmlFor="male">
            <input
              type="radio"
              id="male"
              value="male"
              {...register('gender', {
                required: 'Choose gender!',
              })}
              data-testid="input-gender"
            />{' '}
            male
          </label>
          <label htmlFor="female">
            <input
              type="radio"
              id="female"
              value="female"
              {...register('gender', {
                required: 'Choose gender!',
              })}
            />{' '}
            female
          </label>
        </div>
      </div>
      {errors.gender && <div className="form__error">{errors.gender.message}</div>}
      <div className="input__item">
        <span className="input__item-title">Your photo:</span>
        <input
          type="file"
          placeholder="Choose file"
          className="form__file"
          accept="image/*"
          {...register('photo', {
            required: 'Choose your photo!',
          })}
          data-testid="input-file"
        />
      </div>
      {errors.photo && <div className="form__error">{errors.photo.message}</div>}
      <div className="input__item">
        <label htmlFor="rules">
          <input
            type="checkbox"
            id="rules"
            value="rule"
            data-testid="input-rule"
            {...register('rules', {
              required: 'To continue agree to the processing of your data!',
            })}
          />{' '}
          I agree to the processing of personal data
        </label>
      </div>
      {errors.rules && <div className="form__error">{errors.rules.message}</div>}
      <button type="submit" className="submit__button" value="Submit" data-testid="submit">
        Submit
      </button>
    </form>
  );
}

export default Form;
