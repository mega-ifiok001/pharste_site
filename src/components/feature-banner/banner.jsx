import React from 'react';
import './banner.css';
import src from '../../asset/src.png';
import src2 from '../../asset/src-2.png';
import src3 from '../../asset/src-3.png';
import sr4 from '../../asset/src-4.png';
import chartImg from '../../asset/chart.png';
import user from '../../asset/user-box.png';
import bank from '../../asset/bank-box.png';
import dub from '../../asset/dub-box.png';
import effort from '../../asset/effort.png';
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
                 <img src={effort} className='img-fluid' alt="" />
                </div>

                <div className="col-md-6">
                <img src={user} className='img-fluid' alt="" />
               
                </div>
            </div>


           <div className="bank_content mt-5">
           <div className="row  ">
              <div className="col-md-12 ">
              <img src={dub} className='img-fluid' alt="" />

              </div>
            </div>
           </div>
         </div>


         <section className="container-fluid row p-2 col-xs-pt-0">
          <div className="down-header">
            <h1>security and compliance</h1>
            <p>We prioritize your privacy with bank-grade security, encryption, and full compliance with financial regulations to keep your data and money safe.</p>
          </div>

          <div className="row mt-4">
            <div className="col-lg-6 p-3">
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