import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import Form from './pages/Form/Form';

interface MyState {
  pageTitle: string;
}

interface MyProps {
  title?: '';
}

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
          <NavLink className="nav__item" to="/">
            Go Home
          </NavLink>
          <NavLink className="nav__item" to="/about-us">
            About Us
          </NavLink>
          <NavLink className="nav__item" to="/form">
            Form
          </NavLink>
        </div>
        <Header title={pageTitle} />
        <Routes>
          <Route
            path="/about-us"
            element={<AboutUs changeTitle={() => this.setState({ pageTitle: 'About Us' })} />}
          />
          <Route
            path="/"
            element={<Home changeTitle={() => this.setState({ pageTitle: 'Home' })} />}
          />
          <Route
            path="/form"
            element={<Form changeTitle={() => this.setState({ pageTitle: 'Form' })} />}
          />
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
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
