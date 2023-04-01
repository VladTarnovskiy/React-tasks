import React, { useLayoutEffect } from 'react';
import './notFound.scss';

interface MyProps {
  changeTitle: () => void;
}

function NotFound(props: MyProps): JSX.Element {
  const { changeTitle } = props;

  useLayoutEffect(() => {
    changeTitle();
  });

  return (
    <div className="error_wrapper">
      <div className="error_code">404</div>
      <div className="error_description">The page you are looking for not found!</div>
      <div className="error_animation" />
    </div>
  );
}

export default NotFound;
