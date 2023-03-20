import './form.scss';
import React from 'react';

interface MyState {
  value: string;
}

interface MyProps {
  changeTitle: () => void;
}

class Form extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { changeTitle } = this.props;
    changeTitle();
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue !== null) {
      this.setState({ value: searchValue });
    }
  }

  componentDidUpdate() {
    const { value } = this.state;
    localStorage.setItem('searchValue', value);
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: (event.target as HTMLInputElement).value });
  }

  render() {
    const { value } = this.state;
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
          <input type="text" placeholder="Enter name" className="form__name" name="name" required />
        </div>
        <div className="input__item">
          <div className="input__item-title">Birthday:</div>
          <input
            type="date"
            placeholder="Enter date"
            className="form__date"
            name="birthday"
            required
          />
        </div>
        <div className="input__item">
          <div className="input__item-title">Country:</div>
          <select name="country" className="form__country">
            <option value="Belarus">Belarus</option>
            <option value="Germany">Germany</option>
            <option value="USA">USA</option>
          </select>
        </div>
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
              <input type="radio" id="male" name="gender" value="male" /> male
            </label>
            <label htmlFor="female">
              <input type="radio" id="female" name="gender" value="female" /> female
            </label>
          </div>
        </div>
        <div className="input__item">
          <span className="input__item-title">Your photo:</span>
          <input type="file" placeholder="Choose file" className="form__file" />
        </div>
        <button type="submit" className="submit__button">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
