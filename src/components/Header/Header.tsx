import './header.scss';
import { useLocation } from 'react-router-dom';

function Header(): JSX.Element {
  const location = useLocation();

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Home';
      case '/about-us':
        return 'About Us';
      case '/form':
        return 'Forms';
      default:
        return 'Not Found';
    }
  };

  return <h1 className="page__title">{getPageTitle()}</h1>;
}

export default Header;
