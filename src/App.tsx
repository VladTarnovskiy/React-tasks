import { HashRouter, Route, Routes, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';

export function App() {
  return (
    <div>
      <div className="navigation">
        <NavLink className="nav__item" to="/">
          Go Home
        </NavLink>
        <NavLink className="nav__item" to="/about-us">
          About Us
        </NavLink>
      </div>
      <Header title="About us" />
      <Routes>
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
