import React, { useState, useEffect } from 'react';
import './header.css';
import Logo from '../../asset/logo-white.png';
import menu_btn from '../../asset/menu-btn.png';
import { Link } from 'react-router-dom';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
       <header className="desktop_menu_container w-100">
      <nav className="desktop_menu">
        <img className="logo" src={Logo} alt="Company Logo" />

     {/* Navigation Menu */}
<ul className="nav_menu d-flex align-items-center justify-content-center">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/features">Our Service</Link></li>
  {/* Use <a> for external links */}
  <li><a href="https://blog.pharste.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
  <li><Link to="/about">About</Link></li>
  <li><Link to="/help">Help</Link></li>
</ul>

        {/* Navigation End */}
        <div className="nav-end d-flex align-items-center justify-content-end">
          <button className="get_app_btn">
            <a href="#">Get the App</a>
          </button>
        </div>

        {/* Hamburger Menu for Mobile */}
        
      </nav>
    </header>


      
      <header className=" mobile_menu_container">
      <img src={Logo} className="logo" alt="company logo" />
      <div className="dropdowns">
        <button className="menu-btn" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <ul className={menuOpen ? 'open' : ''}>
          <button className="cross-button" onClick={toggleMenu}>
            <span></span>
            <span></span>
          </button>

          <hr style={{
            background:'#14373D'
          }}/>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/features">Our Service</Link></li>
          <li><a href="https://blog.pharste.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>

          <li><Link to="/about">About</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
    </header>
      





    </>
  );
}

export default Header;