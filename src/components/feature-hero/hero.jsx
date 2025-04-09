import React from 'react';
import './hero.css';
import pop1 from '../../asset/pop_1.png';
import pop2 from '../../asset/pop_2.png';
import pop3 from '../../asset/pop_3.png';
import pop4 from '../../asset/pop_4.png';
import hands from '../../asset/hands.png';
 import screen from '../../asset/screen.png';
import p2pPay from '../../asset/p2p_trade.png';
import billPay from '../../asset/bill_payment.png';
import bankLocker from '../../asset/bank_locker.png';
function Hero(){
    return(

        <>
        <div className="mt-5 feature-container container-fluid">
            <h1>Fast, Secure and Hassle-Free <br/> Money Transfer </h1>
            <p>Experience seamless transactions with low fees & top-<br/>tier security.🌐🌍</p>
      
          <div className="hero_content_anim">
             <img src={pop1} className='pop-1' alt="" />
             <img src={pop2}  className='pop-2' alt="" />
             <img src={pop3} className='pop-3' alt="" />
             <img src={pop4} className='pop-4' alt="" />
             <img src={hands} className='hands_img' alt="" />
             <img src={screen} className='screen_img' alt="" />
          </div>



          <div className="banner-container d-flex align-items-center justify-content-center">
            <div className="row">
                <div className="col-md-6 w-100%">
                  <div className="banner_content">
                    <h1 className="banner_content_title">P2p</h1>
                    <p className="banner_content_paragraph">Experience lightening-fast transfers with top-tier encryption and security.</p>
                 <img src={p2pPay} alt="p2p transaction pic" />
                  </div>
                </div>

                <div className="col-md-6">
                <div className="banner_content ">
                    <h1 className="banner_content_title">Bills Payment</h1>
                    <p className="banner_content_paragraph">Why pay high fees when you don't have to? We believe in keeping cost low so you can send more. </p>
                 <img src={billPay} alt="bill payment image " />
                  </div>
                </div>
            </div>


           <div className="bank_content">
           <div className="row  ">
              <div className="col-md-12 ">
                  <div className="bank_text">
                    <h1 className="bank_title">Savings</h1>
                    <p className="bank_paragraph">Sending money to friends, family or anyone in your circle has never been easier.</p>
                  <img src={bankLocker} alt="bank locker" />
                  </div>
              </div>
            </div>
           </div>
         </div>

            
        </div>
        </>
    );
}

export default Hero;