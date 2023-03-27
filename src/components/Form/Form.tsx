import './form.scss';
import React from 'react';
import { FormCardType } from '../../types/types';

interface MyProps {
  addCard: (card: FormCardType) => void;
}

class Form extends React.Component<MyProps> {
  private formRef = React.createRef<HTMLFormElement>();

  private formMessageRef = React.createRef<HTMLDivElement>();

  private nameRef = React.createRef<HTMLInputElement>();

  private birthdayRef = React.createRef<HTMLInputElement>();

  private countryRef = React.createRef<HTMLSelectElement>();

  private carRef = React.createRef<HTMLInputElement>();

  private motorcycleRef = React.createRef<HTMLInputElement>();

  private bikeRef = React.createRef<HTMLInputElement>();

  private maleRef = React.createRef<HTMLInputElement>();

  private femaleRef = React.createRef<HTMLInputElement>();

  private fileRef = React.createRef<HTMLInputElement>();

  private rulesRef = React.createRef<HTMLInputElement>();

  private nameRefMessage = React.createRef<HTMLDivElement>();

  private birthdayRefMessage = React.createRef<HTMLDivElement>();

  private countryRefMessage = React.createRef<HTMLDivElement>();

  private genderRefMessage = React.createRef<HTMLDivElement>();

  private fileRefMessage = React.createRef<HTMLDivElement>();

  private rulesRefMessage = React.createRef<HTMLDivElement>();

  constructor(props: MyProps) {
    super(props);

    this.getFileLink = this.getFileLink.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.checkValidity = this.checkValidity.bind(this);
  }

  getFileLink(fileObj: FileList) {
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    return file;
  }

  submitForm(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const { addCard } = this.props;

    const nameRef = this.nameRef.current ? this.nameRef.current?.value : '';

    const birthdayRef = this.birthdayRef.current ? this.birthdayRef.current?.value : '';

    const countryRef = this.countryRef.current ? this.countryRef.current?.value : '';

    const carRef = this.carRef.current ? this.carRef.current?.checked : false;

    const motorcycleRef = this.motorcycleRef.current ? this.motorcycleRef.current?.checked : false;

    const bikeRef = this.bikeRef.current ? this.bikeRef.current?.checked : false;

    const maleRef = this.maleRef.current?.value;

    const femaleRef = this.femaleRef.current?.value;

    const fileRef = this.fileRef.current?.files;
    const imgRef = this.getFileLink(fileRef!);
    const rulesRef = this.rulesRef.current ? this.rulesRef.current?.checked : false;

    const sex = this.maleRef.current?.checked ? maleRef : femaleRef;

    this.formMessageRef.current?.classList.add('active');
    this.formRef.current?.reset();
    const formData = {
      name: nameRef,
      birthday: birthdayRef,
      country: countryRef,
      vehicle: {
        car: carRef,
        motorcycle: motorcycleRef,
        bike: bikeRef,
      },
      gender: sex!,
      photo: imgRef,
      rules: rulesRef,
    };
    addCard(formData);
    setTimeout(() => {
      this.formMessageRef.current?.classList.remove('active');
    }, 3000);
  }

  checkValidity() {
    const nameRef = this.nameRef.current;

    const birthdayRef = this.birthdayRef.current;

    const countryRef = this.countryRef.current;

    const maleRef = this.maleRef.current;

    const femaleRef = this.femaleRef.current;

    const fileRef = this.fileRef.current;

    const rulesRef = this.rulesRef.current;

    if (nameRef!.validity.valid === false) {
      this.nameRefMessage.current?.classList.add('active');
    } else {
      this.nameRefMessage.current?.classList.remove('active');
    }

    if (birthdayRef!.validity.valid === false) {
      this.birthdayRefMessage.current?.classList.add('active');
    } else {
      this.birthdayRefMessage.current?.classList.remove('active');
    }

    if (countryRef!.validity.valid === false) {
      this.countryRefMessage.current?.classList.add('active');
    } else {
      this.countryRefMessage.current?.classList.remove('active');
    }

    if (maleRef!.validity.valid === false && femaleRef!.validity.valid === false) {
      this.genderRefMessage.current?.classList.add('active');
    } else {
      this.genderRefMessage.current?.classList.remove('active');
    }

    if (fileRef!.validity.valid === false) {
      this.fileRefMessage.current?.classList.add('active');
    } else {
      this.fileRefMessage.current?.classList.remove('active');
    }

    if (rulesRef!.checked === false) {
      this.rulesRefMessage.current?.classList.add('active');
    } else {
      this.rulesRefMessage.current?.classList.remove('active');
    }
  }

  render() {
    return (
      <form className="form" name="PersonalDataForm" ref={this.formRef} onSubmit={this.submitForm}>
        <div className="form__saved" ref={this.formMessageRef}>
          <div className="form__saved-message">Data saved!</div>
        </div>
        <div className="form__title">Personal data</div>
        <div className="input__item">
          <div className="input__item-title">Name:</div>
          <input
            type="text"
            placeholder="Enter name"
            className="form__name"
            name="name"
            ref={this.nameRef}
            pattern="[A-Z][a-z]*"
            minLength={3}
            required
          />
        </div>
        <div className="form__error" ref={this.nameRefMessage}>
          The first name should start from capital letter, min length 3
        </div>
        <div className="input__item">
          <div className="input__item-title">Birthday:</div>
          <input
            type="date"
            placeholder="Enter date"
            className="form__date"
            name="birthday"
            ref={this.birthdayRef}
            required
          />
        </div>
        <div className="form__error" ref={this.birthdayRefMessage}>
          Enter your birthday
        </div>
        <div className="input__item">
          <div className="input__item-title">Country:</div>
          <select name="country" className="form__country" required ref={this.countryRef}>
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="form__error" ref={this.countryRefMessage}>
          Choose your country
        </div>
        <div className="input__item">
          <span className="input__item-title">Vehicle:</span>
          <div className="form__vehicle">
            <label htmlFor="car">
              <input type="checkbox" id="car" name="vehicle" value="car" ref={this.carRef} /> Car
            </label>
            <label htmlFor="motorcycle">
              <input
                type="checkbox"
                id="motorcycle"
                name="vehicle"
                value="motorcycle"
                ref={this.motorcycleRef}
              />{' '}
              Motorcycle
            </label>
            <label htmlFor="bike">
              <input type="checkbox" id="bike" name="vehicle" value="bike" ref={this.bikeRef} />{' '}
              Bike
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
                name="gender"
                value="male"
                required
                ref={this.maleRef}
              />{' '}
              male
            </label>
            <label htmlFor="female">
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                required
                ref={this.femaleRef}
              />{' '}
              female
            </label>
          </div>
        </div>
        <div className="form__error" ref={this.genderRefMessage}>
          Choose gender
        </div>
        <div className="input__item">
          <span className="input__item-title">Your photo:</span>
          <input
            type="file"
            placeholder="Choose file"
            className="form__file"
            accept="image/*"
            required
            ref={this.fileRef}
          />
        </div>
        <div className="form__error" ref={this.fileRefMessage}>
          Choose your photo
        </div>
        <div className="input__item">
          <label htmlFor="rules">
            <input
              type="checkbox"
              id="rules"
              name="rules"
              value="motorcycle"
              required
              ref={this.rulesRef}
            />{' '}
            I agree to the processing of personal data
          </label>
        </div>
        <div className="form__error" ref={this.rulesRefMessage}>
          To continue agree to the processing of your data
        </div>
        <button type="submit" className="submit__button" onClick={this.checkValidity}>
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
