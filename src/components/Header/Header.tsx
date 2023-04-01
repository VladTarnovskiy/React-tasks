import React from 'react';
import './header.scss';

interface Props {
  title: string;
}

function Header({ title }: Props): JSX.Element {
  return <h1 className="page__title">{title}</h1>;
}

export default Header;
