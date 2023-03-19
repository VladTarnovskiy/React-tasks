import React from 'react';
import './notFound.scss';

interface MyProps {
  changeTitle: () => void;
}

// eslint-disable-next-line react/prefer-stateless-function
class NotFound extends React.Component<MyProps> {
  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    this.props.changeTitle();
    console.log('Component is mounting');
  }

  render() {
    return (
      <div className="error_wrapper">
        <div className="error_code">404</div>
        <div className="error_descript">The page you are looking for not found!</div>
        <div className="error_animation" />
      </div>
    );
  }
}

export default NotFound;
