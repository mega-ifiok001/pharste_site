// import React, { useState, useEffect } from 'react';
// import './header.css';
// import Logo from '../../asset/logo-white.png';
// import menu_btn from '../../asset/menu-btn.png';
// import { Link } from 'react-router-dom';

// function HeaderOne() {

//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <header className=" desktop_menu_container_2 w-100%">
//         <nav className="desktop_menu_2">
          
//             < img className='logo' src={Logo} alt="Company Logo" />
          
//             <ul className="d-flex align-items-center justify-content-center gap-4">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/features">Features</Link></li>
//                 <li><Link to="/pricing">Pricing</Link></li>
//                 <li><Link to="/blog">Blog</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/help">Help</Link></li>
//             </ul>
//           <div className="nav-end d-flex align-items-center justify-content-end">
//             {/* <img src={Ear} alt="Ear Plug" /> */}
//             <button>
//               <a href="#">Get the App</a>
//             </button>
//           </div>
//         </nav>
//       </header>



      
//       <header className=" mobile_menu_container">
//       <img src={Logo} className="logo" alt="company logo" />
//       <div className="dropdowns">
//         <button className="menu-btn" onClick={toggleMenu}>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//         <ul className={menuOpen ? 'open' : ''}>
//           <button className="cross-button" onClick={toggleMenu}>
//             <span></span>
//             <span></span>
//           </button>

//           <hr style={{
//             background:'#14373D'
//           }}/>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/features">Features</Link></li>
//           <li><Link to="/pricing">Pricing</Link></li>
//           <li><Link to="/blog">Blog</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/help">Help</Link></li>
//         </ul>
//       </div>
//     </header>
      





//     </>
//   );
// }

// export default HeaderOne;