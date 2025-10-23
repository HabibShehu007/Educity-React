import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (isHome) {
        setSticky(window.scrollY > 500);
      } else {
        setSticky(true); // Always dark on inner pages
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  useEffect(() => {
    setMobileMenu(false);
  }, [location.pathname]);

  const toggleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : 'light-nav'}`}>
      <Link to="/">
        <img src="/assets/logo.png" alt="Logo" className="logo" />
      </Link>

      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/programs">
            <FaBookOpen /> Programs
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaInfoCircle /> About Us
          </Link>
        </li>
        <li>
          <Link to="/campus">
            <FaUniversity /> Campus
          </Link>
        </li>
        <li>
          <Link to="/testimonials">
            <FaQuoteRight /> Testimonials
          </Link>
        </li>
        <li>
          <Link to="/contact" className="btn">
            <FaEnvelope /> Contact Us
          </Link>
        </li>
      </ul>

      <img
        src="/assets/menu-icon.png"
        alt="Menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
