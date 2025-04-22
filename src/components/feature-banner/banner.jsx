import React from 'react';
import './banner.css';
import src1 from '../../asset/src.png';
import src2 from '../../asset/src-2.png';
import src3 from '../../asset/safe.png';
import src4 from '../../asset/desktop4.png';
import src5 from '../../asset/desktop5.png';
import src6 from '../../asset/desktop6.png';
import chartImg from '../../asset/chart.png';
import user from '../../asset/user-box.png';
import bank from '../../asset/bank-box.png';
import dub from '../../asset/dub-box.png';
import effort from '../../asset/effort.png';
import Footer from '../footer/footer';
import money from '../../asset/money.png';
import bankLocker from '../../asset/bank_locker.png';
import billPay from'../../asset/bill_payment.png';
import p2p from '../../asset/p2p_trade.png';
import '../about-hero/about_hero.css';
function Banner(){


    return(
        <>

<div className="mobile_content p-3 d-block d-md-none d-flex justify-content-center align-items-center flex-column">
             
              <div className="row g-3  mt-4">
                             <div className="col-xs-4 w-100%">
                               <div className="banner_content">
                                 <h1 className="banner_content_title">P2P</h1>
                                 <p className="banner_content_paragraph">Experience lightening-fast transfer with top-tier encryption abd security.</p>
                              <img src={p2p} alt="p2p transaction pic" />
                               </div>
                             </div>
             
                             <div className="col-xs-4">
                             <div className="banner_content ">
                                 <h1 className="banner_content_title">Bills Payment</h1>
                                 <p className="banner_content_paragraph">Why pay high fees when you don’t have to? We believe in keeping costs low so you can send more.</p>
                              <img src={billPay} alt="bill payment image " />
                               </div>
                             </div>

                             <div className="col-xs-4">
                             <div className="banner_content ">
                                 <h1 className="banner_content_title">Savings</h1>
                                 <p className="banner_content_paragraph">Sending money to friends, family, or anyone in your circle has never been easier. </p>
                              <img src={bankLocker} alt="bill payment image " />
                               </div>
                             </div>
                         </div>
           </div>

<div className="banner-container">
  <div className="banner-header">
    <div className="row">
      <div className="col-md-6">
        <h1>Best ways for your banking</h1>
        <p>Stand out with pharste advanced fintech solutions.</p>
      </div>

      <div className="col-md-6">
       <p>💼 Built for Everyone – Whether you're an individual, freelancer, or business, Pharste makes money movement effortless.</p>
      </div>
    </div>
  </div>

 
  <div className="row g-3  mt-4  best_ways d-block d-md-none">
                             <div className="col-xs-4 w-100%">
                               <div className="banner_content">
                                 <h1 className="banner_content_title">Effortless Onboarding</h1>
                                 <p className="banner_content_paragraph">Get started in minutes with a quick and intuitive registration process.</p>
                              <img src={src1} alt="p2p transaction pic" />
                               </div>
                             </div>
             
                             <div className="col-xs-4">
                             <div className="banner_content ">
                                 <h1 className="banner_content_title">User-Firendly Interface</h1>
                                 <p className="banner_content_paragraph">Navigate easily with a clean, modern, and interactive design. </p>
                              <img src={src2} alt="bill payment image " />
                               </div>
                             </div>

                             <div className="col-xs-4">
                             <div className="banner_content ">
                                 <h1 className="banner_content_title">Secure & Reliable</h1>
                                 <p className="banner_content_paragraph">Enjoy bank-level security without compromising on speed. </p>
                              <img src={src3} alt="bill payment image " />
                               </div>
                             </div>
                         </div>

            <div className="row d-flex d-none d-md-flex">
            <div className="col-md-6 w-100%">
                               <div className="banner_content">
                                 <h1 className="banner_content_title">Effortless Onboarding</h1>
                                 <p className="banner_content_paragraph">Get started in minutes with a quick and intuitive registration process.</p>
                              <img src={src1} alt="p2p transaction pic" />
                               </div>
                             </div>
             
                             <div className="col-md-6">
                             <div className="banner_content ">
                                 <h1 className="banner_content_title">User-Firendly Interface</h1>
                                 <p className="banner_content_paragraph">Navigate easily with a clean, modern, and interactive design. </p>
                              <img src={src2} alt="bill payment image " />
                               </div>
                             </div>

            </div>


           <div className="bank_content mt-5  d-none d-md-block ">
           <div className="row  ">
              <div className="col-md-12 ">
              <div className="banner_content ">
                                 <h1 className="banner_content_title">Secure & Reliable</h1>
                                 <p className="banner_content_paragraph">Enjoy bank-level security without compromising on speed. </p>
                              <img src={src3} className='secure_img img-fluid' alt="bill payment image " 
                              style={{width:'20%', marginBottom:'0rem'}}/>
                               </div>

              </div>
            </div>
           </div>
         </div>


         <section className="container-fluid row px-4 col-xs-pt-0   d-none d-md-block ">
          <div className="down-header">
            <h1>security and compliance</h1>
            <p>We prioritize your privacy with bank-grade security, encryption, and full compliance with financial regulations to keep your data and money safe.</p>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 p-3">
              <div className="writeing">
                <h1> Advanced Data Protection</h1>
                <p>Your transactions are encrypted end-to-end, ensuring your information stays private and secure.</p>
              </div>

              <div className="writeing">
                <h1> Real-Time Fraud Monitoring</h1>
                <p>AI-powered fraud detection continuously scans for suspicious activities, keeping your money safe from threats.</p>
              </div>



              <div className="writeing">
                <h1>Regulatory Compliance</h1>
                <p>We adhere to the highest financial security standards, meeting global compliance requirements to protect your funds.</p>
              </div>
            </div>
            <div className="col-lg-6">
                <div className="chart_img">
                  <img src={chartImg} alt="" />
                </div>
            </div>
          </div>
         </section>








         <section>
          <Footer/>
         </section>





        
        </>
    );
}

export default Banner;