import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaBookOpen,
  FaInfoCircle,
  FaUniversity,
  FaQuoteRight,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Handle scroll for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ensure mobile menu is closed on initial load
  useEffect(() => {
    setMobileMenu(false);
  }, []);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={500}>
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-260} duration={500}>
            <FaBookOpen /> Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            <FaInfoCircle /> About Us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={500}>
            <FaUniversity /> Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-260} duration={500}>
            <FaQuoteRight /> Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-260}
            duration={500}
            className="btn"
          >
            <FaEnvelope /> Contact Us
          </Link>
        </li>
      </ul>

      <img
        src={menu_icon}
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
