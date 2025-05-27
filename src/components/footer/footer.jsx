import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import apple from '../../asset/apple.png';
import google from '../../asset/google.png';
import hands from '../../asset/hands.png';
import screen from '../../asset/screen.png';
import footerLogo from '../../asset/footer_logo.png';
import google_footer from '../../asset/google_footer.png';
import x from '../../asset/x.png';
import f from '../../asset/f.png';
import insta from '../../asset/insta.png';
import w from '../../asset/w.png';
import li from '../../asset/li.png';
import NewsletterForm from './news-letter-form';
function Footer() {

  return (
    <>
      <div className="container-fluid adder-content ">
        <h1 className='footer-text'>Take Charge Of Your Finances With Pharste</h1>
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
          <div className="col-md-6">
            <img src={footerLogo} className='img-fluid' alt="footer logo" />
            <p>Pharste is a global fintech company revolutionizing international money remittance. We empower individuals and businesses to send and receive funds across borders with speed, transparency, and security..</p>


                  
           <div className="country_math">
              <div className="court_1">
                <h1>Branch Office (Nigeria)</h1>
              <marquee style={{color:'white', fontSize:'.5rem'}}>Coming Soon ...</marquee>
              
              </div>

             

              <div className="court_1">
                <h1>Head Office (Canada)</h1>
            <p>
            Pharste Payment 3091 Dufferin Street,
                North York, ON M6A 0C4
                      © 2025 Pharste
            </p>
              </div>
           

            </div>


         
            </div>

       

          


          <div className="col-md-6 d-flex justify-content-end align-items-end flex-column">
            <div className="court_2">
              <h1 className="title">Stay up to date </h1>




              <NewsletterForm/>
            

              
            <div className="linkers flex-column justify-content-center align-items-start"> 
              <h6><b className='text-white text-start'>Quick Links</b></h6>
              <ul>
                <Link><li>Home</li></Link>
                <Link><li>Services</li></Link>
                <Link><li >Pricing</li> </Link>
                <Link><li>Blog</li></Link>
                <Link><li>About </li></Link>
                <Link><li>Help</li></Link>
              </ul>
            </div>


          <div className="">
          <div className="contact d-flex align-items-center mt-4 mx-1 "> 
                <i className="fas fa-phone text-white"></i>
                <p className='px-1 text-white'>+6479174197</p>
                
              </div>

              <div className="contact d-flex align-items-center mt-1 mx-1"> 
                <i className="fa fa-message text-white"></i>
                <p className='px-1 text-white'>support@pharste.com</p>
                
              </div>
          </div>

              
            <div className="d-flex socials align-items-center justify-content-start">
             
              
              <a href=""><img src={f} alt="" /></a>
              <a href="https://www.instagram.com/pharstepayment/"><img src={insta} alt="" /></a>
              <a href="https://www.linkedin.com/in/pharste-app-8bb17b360/"><img src={li} alt="" /></a>
              <a href=""><img src={w} alt="" /></a>
              <a href="https://x.com/Pharste"><img src={x} alt="" /></a>
            </div>


           


            
            </div>

          </div>

        </div>




        <div className="foot ">


         <p>&copy; 2025. All rights reserved. </p>
         <p className='d-none d-sm-block'> Crafted with ❤ by <a href="https://coderigi.co">CodeRigi</a> </p>
        
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