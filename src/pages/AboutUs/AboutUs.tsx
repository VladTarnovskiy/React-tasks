import React, { useLayoutEffect } from 'react';
import './about-us.scss';

interface MyProps {
  changeTitle: () => void;
}

function AboutUs(props: MyProps): JSX.Element {
  const { changeTitle } = props;

  useLayoutEffect(() => {
    changeTitle();
  });

  return (
    <div>
      <div className="about__us">We are technical market.</div>
    </div>
  );
}

export default AboutUs;
