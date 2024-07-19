import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import Login from "./pages/Login/Login";
import SignUp from "./pages/Signup/Signup";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const NAVBAR_HEIGHT_THRESHOLD = 100; // Threshold for when to show black navbar

const Navbar = () => {
  const [isNavbarBlack, setIsNavbarBlack] = useState(false);

  const handleScroll = useCallback(() => {
    const shouldShowBlackNavbar = window.scrollY > NAVBAR_HEIGHT_THRESHOLD;
    setIsNavbarBlack(shouldShowBlackNavbar);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`nav ${isNavbarBlack && 'nav_black'}`}>
      <Router>
        <div className="app">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
        <img
          className="nav_logo"
          src="streamify(1).png"
          alt="streamify logo"
        />
       
        <div className="nav_buttons">
          <Link to="/login" className="nav_button">Login</Link>
          <Link to="/signup" className="nav_button">Sign Up</Link>
        </div>
        {/* <img
          className="nav_avatar"
          src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
          alt="Netflix Avatar"
        /> */}
      </Router>
    </div>
  );
};

export default Navbar;
