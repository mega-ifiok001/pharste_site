import React from 'react';
import './banner.css';
import src from '../../asset/src.png';
import src2 from '../../asset/src-2.png';
import src3 from '../../asset/src-3.png';
import sr4 from '../../asset/src-4.png';
import chartImg from '../../asset/chart.png';
import Footer from '../footer/footer';
function Banner(){


    return(
        <>

<div className="banner-container">
  <div className="banner-header">
    <div className="row">
      <div className="col-md-6">
        <h1>best ways for your banking</h1>
        <p>Stand out with pharste advanced fintech solutions.</p>
      </div>

      <div className="col-md-6">
       <p>💼 Built for Everyone – Whether you're an individual, freelancer, or business, Pharste makes money movement effortless.</p>
      </div>
    </div>
  </div>
            <div className="row">
                <div className="col-md-6 w-100%">
                  <div className="banner_content">
                    <h1 className="banner_content_title">P2p</h1>
                    <p className="banner_content_paragraph">Experience lightening-fast transfers with top-tier encryption and security.</p>
                 <img src={src} alt="p2p transaction pic" />
                  </div>
                </div>

                <div className="col-md-6">
                <div className="banner_content ">
                    <h1 className="banner_content_title">Bills Payment</h1>
                    <p className="banner_content_paragraph">Why pay high fees when you don't have to? We believe in keeping cost low so you can send more. </p>
                 <img src={src2} alt="bill payment image " />
                  </div>
                </div>
            </div>


           <div className="bank_content">
           <div className="row  ">
              <div className="col-md-12 ">
                  <div className="bank_text">
                    <h1 className="bank_title">Savings</h1>
                    <p className="bank_paragraph">Sending money to friends, family or anyone in your circle has never been easier.</p>
                 
                    <img src={src3} className='big' alt="" />
                    <img src={sr4} className='sub' alt="" />
                
                  </div>
              </div>
            </div>
           </div>
         </div>


         <section className="container-fluid row">
          <div className="down-header">
            <h1>security and compliance</h1>
            <p>We prioritize your privacy with bank-grade security, encryption, and full compliance with financial regulations to keep your data and money safe.</p>
          </div>

          <div className="row mt-4">
            <div className="col-md-6">
              <div className="writeing">
                <h1>✅ Advanced Data Protection</h1>
                <p>Your transactions are encrypted end-to-end, ensuring your information stays private and secure.</p>
              </div>

              <div className="writeing">
                <h1>🚀 Real-Time Fraud Monitoring</h1>
                <p>AI-powered fraud detection continuously scans for suspicious activities, keeping your money safe from threats.</p>
              </div>



              <div className="writeing">
                <h1>🏦 Regulatory Compliance</h1>
                <p>We adhere to the highest financial security standards, meeting global compliance requirements to protect your funds.</p>
              </div>
            </div>
            <div className="col-md-6">
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