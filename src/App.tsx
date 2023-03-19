import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';
import AboutUs from './pages/AboutUs/AboutUs';

type MyState = {
  pageTitle: string; // like this
};

// eslint-disable-next-line @typescript-eslint/ban-types
type MyProps = {};

// eslint-disable-next-line react/prefer-stateless-function
export class App extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      pageTitle: 'Home',
    };
  }

  render() {
    const { pageTitle } = this.state;
    return (
      <div>
        <div className="navigation">
          <NavLink
            className="nav__item"
            to="/"
            onClick={() => this.setState({ pageTitle: 'Home' })}
          >
            Go Home
          </NavLink>
          <NavLink
            className="nav__item"
            to="/about-us"
            onClick={() => this.setState({ pageTitle: 'About Us' })}
          >
            About Us
          </NavLink>
        </div>
        <Header title={pageTitle} />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route
            path="*"
            element={<NotFound changeTitle={() => this.setState({ pageTitle: 'Not Found' })} />}
          />
        </Routes>
      </div>
    );
  }
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
