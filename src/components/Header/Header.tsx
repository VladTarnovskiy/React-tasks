import React from 'react';
import './header.scss';

interface Props {
  title: string;
}

//   function Header({ todo, setTodo, handleAdd }: Props): React.ReactNode {

const Header: React.FC<Props> = ({ title }) => {
  return <h1 className="page__title">{title}</h1>;
};

export default Header;
