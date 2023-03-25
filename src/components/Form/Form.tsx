import './form.scss';
import React from 'react';
import { FormCardType } from '../../types/types';
import Logo from '../../assets/star.png';

interface MyProps {
  addCard: (card: FormCardType) => void;
}

class Form extends React.Component<MyProps, FormCardType> {
  stateForm: FormCardType;

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
    };

    // this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeX = this.onChangeX.bind(this);
  }

  // handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { target } = event;
  //   const value = target.type === 'checkbox' ? target.checked : target.value;
  //   const { name } = target;

  //   this.setState({
  //     [name as Pick<FormCardType, keyof FormCardType>]: value,
  //   });
  // };

  onChangeX = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileObj = e.target.files;
    // const fileObj = this.fileRef.current ? this.fileRef.current.files : '';
    const file = fileObj ? window.URL.createObjectURL(fileObj[0]) : '';
    // URL.revokeObjectURL(file);
    // const file = e.target.files![0];
    // const formData = new FormData();

    // formData.append('file', file);
    // console.log(formData);

    // const res = await fetch('assets/img', {
    //   method: 'POST',
    //   headers: {
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: formData,
    // });

    console.log(file); // const filesArr = Array.prototype.slice.call(files);
    // console.log(filesArr);
    // this.stateForm.photo = files[0];
    // const file = files ? window.URL.createObjectURL(files[0]) : '';
    this.stateForm.photo = file;
  };

  render() {
    const { addCard } = this.props;
    return (
      <form
        className="form"
        name="PersonalDataForm"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form__title">Personal data</div>
        <div className="input__item">
          <div className="input__item-title">Name:</div>
          <input
            type="text"
            placeholder="Enter name"
            className="form__name"
            name="name"
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
            onChange={(e) => {
              this.onChangeX(e);
            }}
          />
        </div>
        <button type="submit" className="submit__button" onClick={() => addCard(this.stateForm)}>
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
