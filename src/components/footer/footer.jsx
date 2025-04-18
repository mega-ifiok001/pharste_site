import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css';
import apple from '../../asset/apple.png';
import google from '../../asset/google.png';
import hands from '../../asset/hands.png';
import screen from '../../asset/screen.png';
import footerLogo from '../../asset/footer_logo.png';
import google_footer from '../../asset/google_footer.png';
function Footer(){

    return(
    <>
    <div className="container-fluid adder-content">
         <h1>Ready To Take Charge Of Your Finances</h1>
        <p> Taking charge of your finances starts with understanding
        your income and expenses</p>

        <div className=" downloads">
          <a href="#">
          <img src={apple} className='img_1 ' alt="download btn" />
          </a>

          <a href="#">
          <img src={google} className='img_1 ' alt="download btn" />

          </a>
        </div>

        <div className="img">
          <img src={hands} className="one" alt="" />
          <img src={screen} className='two' alt="" />
        </div>
    </div>


    <div className="main-footer">
      <div className="row">
        <div className="col-md-7">
          <img src={footerLogo} alt="footer logo" />
          <p>Design amazing digital experiences that create more happiness in the world.</p>



   <div className="country_math">
   <div className="court_1">
           <h1>Nigeria</h1>
         <ul>
          <li>
            <a href="#">1-11 Commercial</a>
          </li>

          <li>
            <a href="#">Avenue, Yaba,</a>
          </li>

          <li>
            <a href="#">Lagos, Nigeria</a>
           
          </li>

         
         </ul>
      </div>



      <div className="court_1">
           <h1>Canada</h1>
         <ul>
         <li>
            <a href="#">1-11 Commercial</a>
          </li>

          <li>
            <a href="#">Avenue, Yaba,</a>
          </li>

          <li>
            <a href="#">Lagos, Nigeria</a>
           
          </li>
         </ul>
      </div>


   </div>


   <div className="linkers">
         <ul>
         <Link><li>Home</li></Link>
         <Link><li>Features</li></Link>
         <Link><li className="footer_nav">Pricing  <span>New</span></li> </Link>
         <Link><li>Blog</li></Link>
         <Link><li>About Us</li></Link>
         <Link><li>Help</li></Link>
         </ul>
      </div>

   </div>

      <div className="col-md-5">
        <div className="court_2">
          <h1 className="title">Stay up to date </h1>

          <form action="#">
            <input
            placeholder="Enter your email" type="text" />
            <button type="submit">Subscribe</button>
          </form>


        <div className="mt-5">
            <h1 className="title">Get the app</h1>
          <div className="d-flex align-items-center">
            <img src={apple} alt="" />
            <img src={google_footer} alt="" />
          </div>
        </div>
        </div>

        </div>

        </div>


    

        <div className="foot ">
          
             <p>&copy; 2025 copyright. Al rights reserved. </p>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        
        </div>
      </div>
     </>
    );


}

export default Footer