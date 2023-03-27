import './form.scss';
import React, { RefObject } from 'react';
import { FormCardType } from '../../types/types';
import Header from '../Header/Header';

interface MyProps {
  addCard: (card: FormCardType) => void;
}

class Form extends React.Component<MyProps, FormCardType> {
  stateForm: FormCardType;

  formRef: RefObject<HTMLFormElement>;

  formMessageRef: RefObject<HTMLDivElement>;

  constructor(props: MyProps) {
    super(props);

    this.stateForm = {
      name: '',
      birthday: '',
      country: 'Belarus',
      vehicle: {
        car: false,
        motorcycle: false,
        bike: false,
      },
      gender: '',
      photo: '',
      rules: false,
    };

    this.onChangeX = this.onChangeX.bind(this);
    this.submitForm = this.submitForm.bind(this);

    this.formRef = React.createRef<HTMLFormElement>();
    this.formMessageRef = React.createRef<HTMLDivElement>();
  }

  onChangeX(e: React.ChangeEvent<HTMLInputElement>) {
    const fileObj = e.target.files;
    // const fileObj = this.fileRef.current ? this.fileRef.current.files : '';
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    this.stateForm.photo = file;
  }

  submitForm(e: React.ChangeEvent<HTMLFormElement>) {
    const { addCard } = this.props;
    addCard(this.stateForm);
    this.formMessageRef.current?.classList.add('active');
    this.formRef.current?.reset();
    setTimeout(() => {
      this.formMessageRef.current?.classList.remove('active');
    }, 2000);
    e.preventDefault();
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
            pattern="[A-Z][a-z]*"
            onChange={(e) => {
              this.stateForm.name = e.target.value;
            }}
            required
          />
        </div>
        <div className="input__item">
          <div className="input__item-title">Birthday:</div>
          <input
            type="date"
            placeholder="Enter date"
            className="form__date"
            name="birthday"
            onChange={(e) => {
              this.stateForm.birthday = e.target.value;
            }}
            required
          />
        </div>
        <div className="input__item">
          <div className="input__item-title">Country:</div>
          <select
            name="country"
            className="form__country"
            required
            onChange={(e) => {
              this.stateForm.country = e.target.value;
            }}
          >
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
        <div className="input__item">
          <span className="input__item-title">Vehicle:</span>
          <div className="form__vehicle">
            <label htmlFor="car">
              <input
                type="checkbox"
                id="car"
                name="vehicle"
                value="car"
                onChange={(e) => {
                  this.stateForm.vehicle.car = e.target.checked;
                }}
              />{' '}
              Car
            </label>
            <label htmlFor="motorcycle">
              <input
                type="checkbox"
                id="motorcycle"
                name="vehicle"
                value="motorcycle"
                onChange={(e) => {
                  this.stateForm.vehicle.motorcycle = e.target.checked;
                }}
              />{' '}
              Motorcycle
            </label>
            <label htmlFor="bike">
              <input
                type="checkbox"
                id="bike"
                name="vehicle"
                value="bike"
                onChange={(e) => {
                  this.stateForm.vehicle.bike = e.target.checked;
                }}
              />{' '}
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
                onChange={(e) => {
                  this.stateForm.gender = e.target.value;
                }}
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
                onChange={(e) => {
                  this.stateForm.gender = e.target.value;
                }}
              />{' '}
              female
            </label>
          </div>
        </div>
        <div className="input__item">
          <span className="input__item-title">Your photo:</span>
          <input
            type="file"
            placeholder="Choose file"
            className="form__file"
            accept="image/*"
            required
            onChange={(e) => {
              this.onChangeX(e);
            }}
          />
        </div>
        <div className="input__item">
          <label htmlFor="rules">
            <input
              type="checkbox"
              id="motorcycle"
              name="rules"
              value="motorcycle"
              required
              onChange={(e) => {
                this.stateForm.vehicle.motorcycle = e.target.checked;
              }}
            />{' '}
            I agree to the processing of personal data
          </label>
        </div>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;

// render() {
//   const { name, birthday, country, vehicle, gender } = this.state;
//   const { addCard } = this.props;
//   return (
//     <form
//       className="form"
//       name="PersonalDataForm"
//       onSubmit={(e) => {
//         e.preventDefault();
//       }}
//     >
//       <div className="form__title">Personal data</div>
//       <div className="input__item">
//         <div className="input__item-title">Name:</div>
//         <input
//           type="text"
//           placeholder="Enter name"
//           className="form__name"
//           name="name"
//           onChange={(e) => {
//             this.stateForm.name = e.target.value;
//           }}
//           required
//         />
//       </div>
//       <div className="input__item">
//         <div className="input__item-title">Birthday:</div>
//         <input
//           type="date"
//           placeholder="Enter date"
//           className="form__date"
//           name="birthday"
//           onChange={(e) => this.setState({ birthday: e.target.value })}
//           required
//         />
//       </div>
//       <div className="input__item">
//         <div className="input__item-title">Country:</div>
//         <select
//           name="country"
//           className="form__country"
//           onChange={(e) => this.setState({ country: e.target.value })}
//         >
//           <option value="Belarus">Belarus</option>
//           <option value="Germany">Germany</option>
//           <option value="USA">USA</option>
//         </select>
//       </div>
//       <div className="input__item">
//         <span className="input__item-title">Vehicle:</span>
//         <div className="form__vehicle">
//           <label htmlFor="car">
//             <input
//               type="checkbox"
//               id="car"
//               name="vehicle"
//               value="car"
//               onChange={(e) =>
//                 this.setState((prevState) => {
//                   return { vehicle: { ...prevState.vehicle, car: e.target.checked } };
//                 })
//               }
//             />{' '}
//             Car
//           </label>
//           <label htmlFor="motorcycle">
//             <input
//               type="checkbox"
//               id="motorcycle"
//               name="vehicle"
//               value="motorcycle"
//               onChange={(e) =>
//                 this.setState((prevState) => {
//                   return { vehicle: { ...prevState.vehicle, motorcycle: e.target.checked } };
//                 })
//               }
//             />{' '}
//             Motorcycle
//           </label>
//           <label htmlFor="bike">
//             <input
//               type="checkbox"
//               id="bike"
//               name="vehicle"
//               value="bike"
//               onChange={(e) =>
//                 this.setState((prevState) => {
//                   return { vehicle: { ...prevState.vehicle, bike: e.target.checked } };
//                 })
//               }
//             />{' '}
//             Bike
//           </label>
//         </div>
//       </div>
//       <div className="input__item">
//         <span className="input__item-title">Gender:</span>
//         <div className="form__gender">
//           <label htmlFor="male">
//             <input
//               type="radio"
//               id="male"
//               name="gender"
//               value="male"
//               onChange={(e) => this.setState({ gender: e.target.value })}
//             />{' '}
//             male
//           </label>
//           <label htmlFor="female">
//             <input
//               type="radio"
//               id="female"
//               name="gender"
//               value="female"
//               onChange={(e) => this.setState({ gender: e.target.value })}
//             />{' '}
//             female
//           </label>
//         </div>
//       </div>
//       <div className="input__item">
//         <span className="input__item-title">Your photo:</span>
//         <input
//           type="file"
//           placeholder="Choose file"
//           className="form__file"
//           accept="image/png, image/gif, image/jpeg"
//         />
//       </div>
//       <button
//         type="submit"
//         className="submit__button"
//         onSubmit={() =>
//           addCard({
//             name,
//             birthday,
//             country,
//             vehicle,
//             gender,
//             // photo,
//           })
//         }
//       >
//         Submit
//       </button>
//     </form>
//   );
// }
