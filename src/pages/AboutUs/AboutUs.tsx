import React from 'react';
import './about-us.scss';

interface MyProps {
  changeTitle: () => void;
}

class AboutUs extends React.Component<MyProps> {
  componentDidMount() {
    const { changeTitle } = this.props;
    changeTitle();
  }

  render() {
    return (
      <div>
        <div className="about__us">We are technical market.</div>
      </div>
    );
  }
}

export default AboutUs;
