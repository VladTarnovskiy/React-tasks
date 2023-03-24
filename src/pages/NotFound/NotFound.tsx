import React from 'react';
import './notFound.scss';

interface MyProps {
  changeTitle: () => void;
}

class NotFound extends React.Component<MyProps> {
  componentDidMount() {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return (
      <div className="error_wrapper">
        <div className="error_code">404</div>
        <div className="error_description">The page you are looking for not found!</div>
        <div className="error_animation" />
      </div>
    );
  }
}

export default NotFound;
