import React from 'react';
import './header.css';
import Logo from '../../asset/logo.png';
import Ear from '../../asset/ear.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className="container d-flex align-items-center justify-content-center w-100%">
        <nav className="d-flex align-items-center justify-content-between">
          
            <img className='logo' src={Logo} alt="Company Logo" />
          
          <ul className=" d-flex align-items-center justify-content-center gap-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/features">Features</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
          <div className="nav-end d-flex align-items-center justify-content-center">
            <img src={Ear} alt="Ear Plug" />
            <button>
              <a href="#">Get the App</a>
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;