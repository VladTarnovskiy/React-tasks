import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import FormPage from './pages/FormPage/FormPage';

function App(): JSX.Element {
  const [pageTitle, setPageTitle] = useState('Home');

  return (
    <BrowserRouter>
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
            element={<AboutUs changeTitle={() => setPageTitle('About Us')} />}
          />
          <Route path="/" element={<Home changeTitle={() => setPageTitle('Home')} />} />
          <Route path="/form" element={<FormPage changeTitle={() => setPageTitle('Form')} />} />
          <Route path="*" element={<NotFound changeTitle={() => setPageTitle('Not Found')} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
