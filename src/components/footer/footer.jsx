import React from 'react';
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
        <div className="col-md-4">
          <img src={footerLogo} alt="footer logo" />
          <p>Design amazing digital experiences that create more happiness in the world.</p>
        </div>

        <div className="col-md-4 d-flex ">
      <div className="court_1 mx-5">
           <h1>Product</h1>
         <ul>
          <li>
            <a href="#">Overview</a>
          </li>

          <li>
            <a href="#">Features</a>
          </li>

          <li>
            <a href="#">Solution</a>
            <span>new</span>
          </li>

          <li>
            <a href="#">Tutorials</a>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Releases</a>
          </li>
         </ul>
      </div>



      <div className="court_1">
           <h1>Resources</h1>
         <ul>
          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">NewsLetter</a>
          </li>

          <li>
            <a href="#">Events</a>
          </li>

          <li>
            <a href="#">Help Center</a>
          </li>

          <li>
            <a href="#">Tutorials</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
         </ul>
      </div>

        </div>


        <div className="col-md-4">
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

        <div className="d-flex foot align-items-center justify-content-space-between">
          
             <p>&copy; 2025 copyright. Al rights reserved. </p>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        
        </div>
      </div>
    </div>
    </>
    );


}

export default Footer