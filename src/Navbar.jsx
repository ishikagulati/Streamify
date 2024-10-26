import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';
import { BrowserRouter as Router} from 'react-router-dom';
import Streamify from './assets/Streamify.png';

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
        
        <img className="nav_logo" src={Streamify} alt="streamify logo" />
        
      </Router>
    </div>
  );
};

export default Navbar;
