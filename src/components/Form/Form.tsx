/* eslint-disable react/jsx-props-no-spreading */
import './form.scss';
import React, { useRef } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormCardType } from '../../types/types';

interface MyProps {
  addCard: (card: FormCardType) => void;
}

function Form(props: MyProps): JSX.Element {
  // class Form extends React.Component<MyProps> {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isDirty, isSubmitSuccessful },
  } = useForm<FormCardType>();
  // const formRef = React.createRef<HTMLFormElement>();

  // const formMessageRef = React.createRef<HTMLDivElement>();

  // const nameRef = React.createRef<HTMLInputElement>();

  // const birthdayRef = React.createRef<HTMLInputElement>();

  // const countryRef = React.createRef<HTMLSelectElement>();

  // const carRef = React.createRef<HTMLInputElement>();

  // const motorcycleRef = React.createRef<HTMLInputElement>();

  // const bikeRef = React.createRef<HTMLInputElement>();

  // const maleRef = React.createRef<HTMLInputElement>();

  // const femaleRef = React.createRef<HTMLInputElement>();

  // const fileRef = React.createRef<HTMLInputElement>();

  // const rulesRef = React.createRef<HTMLInputElement>();

  // const nameRefMessage = React.createRef<HTMLDivElement>();

  // const birthdayRefMessage = React.createRef<HTMLDivElement>();

  // const countryRefMessage = React.createRef<HTMLDivElement>();

  // const genderRefMessage = React.createRef<HTMLDivElement>();

  // const fileRefMessage = React.createRef<HTMLDivElement>();

  // const rulesRefMessage = React.createRef<HTMLDivElement>();

  // constructor(props: MyProps) {
  //   super(props);

  //   getFileLink = getFileLink.bind(this);
  //   submitForm = submitForm.bind(this);
  //   checkValidity = checkValidity.bind(this);
  // }

  // const getFileLink = (fileObj: FileList) => {
  //   const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
  //   return file;
  // };

  // const submitForm: SubmitHandler<FormCardType> = (props, e: React.ChangeEvent<HTMLFormElement>) => {

  const onSubmit: SubmitHandler<FormCardType> = (propss) => {
    console.log(propss);
    console.log('here');
    // e.preventDefault();
    // const { addCard } = props;
    // const nameRefx = nameRef.current ? nameRef.current?.value : '';
    // const birthdayRef = birthdayRef.current ? birthdayRef.current?.value : '';
    // const countryRef = countryRef.current ? countryRef.current?.value : '';
    // const carRef = carRef.current ? carRef.current?.checked : false;
    // const motorcycleRef = motorcycleRef.current ? motorcycleRef.current?.checked : false;
    // const bikeRef = bikeRef.current ? bikeRef.current?.checked : false;
    // const maleRef = maleRef.current?.value;
    // const femaleRef = femaleRef.current?.value;
    // const fileRef = fileRef.current?.files;
    // const imgRef = getFileLink(fileRef!);
    // const rulesRef = rulesRef.current ? rulesRef.current?.checked : false;
    // const sex = maleRef.current?.checked ? maleRef : femaleRef;
    //   formMessageRef.current?.classList.add('active');
    //   formRef.current?.reset();
    //   const formData = {
    //     name: nameRef,
    //     birthday: birthdayRef,
    //     country: countryRef,
    //     vehicle: {
    //       car: carRef,
    //       motorcycle: motorcycleRef,
    //       bike: bikeRef,
    //     },
    //     gender: sex!,
    //     photo: imgRef,
    //     rules: rulesRef,
    //   };
    //   addCard(formData);
    //   setTimeout(() => {
    //     formMessageRef.current?.classList.remove('active');
    //   }, 3000);
    // };
    // const checkValidity = () => {
    //   const nameRef = nameRef.current;
    //   const birthdayRef = birthdayRef.current;
    //   const countryRef = countryRef.current;
    //   const maleRef = maleRef.current;
    //   const femaleRef = femaleRef.current;
    //   const fileRef = fileRef.current;
    //   const rulesRef = rulesRef.current;
    //   if (nameRef!.validity.valid === false) {
    //     nameRefMessage.current?.classList.add('active');
    //   } else {
    //     nameRefMessage.current?.classList.remove('active');
    //   }
    //   if (birthdayRef!.validity.valid === false) {
    //     birthdayRefMessage.current?.classList.add('active');
    //   } else {
    //     birthdayRefMessage.current?.classList.remove('active');
    //   }
    //   if (countryRef!.validity.valid === false) {
    //     countryRefMessage.current?.classList.add('active');
    //   } else {
    //     countryRefMessage.current?.classList.remove('active');
    //   }
    //   if (maleRef!.validity.valid === false && femaleRef!.validity.valid === false) {
    //     genderRefMessage.current?.classList.add('active');
    //   } else {
    //     genderRefMessage.current?.classList.remove('active');
    //   }
    //   if (fileRef!.validity.valid === false) {
    //     fileRefMessage.current?.classList.add('active');
    //   } else {
    //     fileRefMessage.current?.classList.remove('active');
    //   }
    //   if (rulesRef!.checked === false) {
    //     rulesRefMessage.current?.classList.add('active');
    //   } else {
    //     rulesRefMessage.current?.classList.remove('active');
    //   }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__saved">
        <div className="form__saved-message">Data saved!</div>
      </div>
      <div className="form__title">Personal data</div>
      <div className="input__item">
        <div className="input__item-title">Name:</div>
        <input
          type="text"
          placeholder="Enter name"
          className="form__name"
          {...register('name', {
            required: 'Please enter name!',
            minLength: {
              value: 4,
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
          // pattern="[A-Z][a-z]*"
          // minLength={3}
          // required
        />
      </div>
      {errors.name && <div className="form__error">{errors.name.message}</div>}

      <div className="input__item">
        <div className="input__item-title">Birthday:</div>
        <input
          type="date"
          placeholder="Enter date"
          className="form__date"
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
      {/* <div className="form__error">Enter your birthday</div> */}
      <div className="input__item">
        <div className="input__item-title">Country:</div>
        <select name="country" className="form__country" required>
          <option value="Belarus">Belarus</option>
          <option value="Germany">Germany</option>
          <option value="USA">USA</option>
        </select>
      </div>
      <div className="form__error">Choose your country</div>
      <div className="input__item">
        <span className="input__item-title">Vehicle:</span>
        <div className="form__vehicle">
          <label htmlFor="car">
            <input type="checkbox" id="car" name="vehicle" value="car" /> Car
          </label>
          <label htmlFor="motorcycle">
            <input type="checkbox" id="motorcycle" name="vehicle" value="motorcycle" /> Motorcycle
          </label>
          <label htmlFor="bike">
            <input type="checkbox" id="bike" name="vehicle" value="bike" /> Bike
          </label>
        </div>
      </div>
      <div className="input__item">
        <span className="input__item-title">Gender:</span>
        <div className="form__gender">
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="male" required /> male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="female" required /> female
          </label>
        </div>
      </div>
      <div className="form__error">Choose gender</div>
      <div className="input__item">
        <span className="input__item-title">Your photo:</span>
        <input
          type="file"
          placeholder="Choose file"
          className="form__file"
          accept="image/*"
          required
        />
      </div>
      <div className="form__error">Choose your photo</div>
      <div className="input__item">
        <label htmlFor="rules">
          <input type="checkbox" id="rules" name="rules" value="motorcycle" required /> I agree to
          the processing of personal data
        </label>
      </div>
      <div className="form__error">To continue agree to the processing of your data</div>
      <button
        type="submit"
        className="submit__button"
        value="Submit"
        //  onClick={checkValidity}
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
