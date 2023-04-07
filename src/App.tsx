import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs/AboutUs';
import FormPage from './pages/FormPage/FormPage';

function App(): JSX.Element {
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
        <Header />
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div id="modal-root" />
    </BrowserRouter>
  );
}

export default App;
