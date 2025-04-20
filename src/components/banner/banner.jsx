import React from 'react';
import './banner.css';
import p2pPay from '../../asset/p2p_trade.png';
import billPay from '../../asset/bill_payment.png';
import bankLocker from '../../asset/bank_locker.png';
import smileyFace from '../../asset/smiley_face.png';
function Banner(){

    return(

        <>
         <div className="banner-container">
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




         <section className="impact_banner">
          <div className="impact_content">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
               <h1 className="impact_title">Creating Impact, <br /> Together</h1>
               <p className="impact_paragraph">At Pharste, we believe in making a real difference. Through our commitment to social impact and corporate responsibility.
               By choosing Pharste, you're not just managing transactions—you’re contributing to a movement that builds a better future for everyone.</p>
            </div>
             <div className="col-md-6 smiler_face">
              <img src={smileyFace} 
              style={{
                width:'100%',
                borderRadius:'10px',
              }} className='img-fluid smiley' alt="smiley faces " />
             </div>
           </div>
          </div>
         </section>
        </>

    );
}

export default Banner