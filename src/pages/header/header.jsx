import React from 'react';
import './header.css';
import Logo from '../../asset/logo.png';
import Ear from '../../asset/ear.png';

function Header() {
  return (
    <>
      <header className="container d-flex align-items-center justify-content-center w-100%">
        <nav className="d-flex align-items-center justify-content-between">
          
            <img className='logo' src={Logo} alt="Company Logo" />
          
          <ul className=" d-flex align-items-center justify-content-center gap-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
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