import React, {useEffect} from 'react';
import './hero.css';
import Header from '../header/header';
import pop1 from '../../asset/pop_1.png';
import pop2 from '../../asset/pop_2.png';
import pop3 from '../../asset/pop_3.png';
import pop4 from '../../asset/pop_4.png';
import hands from '../../asset/hands.png';
 import screen from '../../asset/screen.png';
import p2pPay from '../../asset/p2p_trade.png';
import billPay from '../../asset/bill_payment.png';
import bankLocker from '../../asset/bank_locker.png';
import p2p from '../../asset/p2p-box.png';
import bill from '../../asset/bill-box.png';
import user from '../../asset/user-box.png';
import bank from '../../asset/bank-box.png';
import dub from '../../asset/dub-box.png';
import effort from '../../asset/effort.png';

import card_1 from "../../asset/card_1.png";
import card_2 from "../../asset/card_2.png";
import card_3 from "../../asset/card_3.png";

import Ex_info from '../exchange/exchange_info.jsx';

function Hero(){

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate");
            }
          });
        },
        {
          threshold: 0.5, // Trigger when 50% of the element is visible
        }
      );
  
      // Select all elements with the 'animate-on-scroll' class
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((element) => observer.observe(element));
  
      return () => {
        elements.forEach((element) => observer.unobserve(element));
      };
    }, []);
    return(

        <>
        <div className="mt-5 feature-container  ">
          <Ex_info/>
        <Header/>

            <h1 className='display-1 display-md-2 display-sm-4  fs-md-3 fs-sm-5' style={{marginTop:'5rem'}}>Fast, Secure and Hassle-Free <br/> Money Transfer </h1>
            <p>Experience seamless transactions with low fees & top-<br/>tier security.</p>
      
          <div className="hero_content_anim">
               <div className="pop-1 fade-in">What you can do with Pharste seamless remittance, send money from Canada to Nigeria: fast, affordable, hassle-free</div>
  <div className="pop-2 fade-in delay-1">Peer to Peer Exchange. Trade currencies with real people, set your own rates, and save more, powered by our community</div>
  <div className="pop-3 fade-in delay-2">Auto save with guaranteed interest, Set it, forget it, and grow it. Earn guaranteed returns.</div>
  <div className="pop-4 fade-in delay-3">Pay Canadian bills from anywhere,  Even when abroad, your bills are covered.</div>

            
             <img src={hands} className='hands_img' alt="" />
             <img src={screen} className='screen_img' alt="" />
          </div>

    {/* Features Section */}
      <div className="container-fluid account_setup features_ex  d-none d-md-block ">
        <div className="testimonials-text animate-on-scroll">
          <h1>Feel the best experience <br /> with our features</h1>
        </div>

        <div className="row mt-3 container-fluid">
          <div className="col-md-4 mt-4 animate-on-scroll from-left">
            <img src={card_1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll">
            <img src={card_3} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll from-right">
            <img src={card_2} alt="" className="img-fluid" />
          </div>
        </div>
      </div>















            
        </div>




        </>
    );
}

export default Hero