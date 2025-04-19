import React from 'react';
import './banner.css';
import src1 from '../../asset/desktop1.png';
import src2 from '../../asset/desktop2.png';
import src3 from '../../asset/desktop3.png';
import src4 from '../../asset/desktop4.png';
import src5 from '../../asset/desktop5.png';
import src6 from '../../asset/desktop6.png';
import chartImg from '../../asset/chart.png';
import user from '../../asset/user-box.png';
import bank from '../../asset/bank-box.png';
import dub from '../../asset/dub-box.png';
import effort from '../../asset/effort.png';
import Footer from '../footer/footer';
function Banner(){


    return(
        <>

<div className="mobile_content d-block d-md-none d-flex justify-content-center align-items-center flex-column">
             
             <div className="row">
              <div className="col-md-6 w-100% d-flex justify-content-center align-items-center mx-auto ">
                <img src={src1} className='img-fluid w-60% h-70 my-5' alt="" />
              </div>
  
              <div className="col-md-6">
                <img src={src2} className='img-fluid' alt="" />
              </div>
             </div>
             <div className="row mt-5">
              <div className="col-md-12">
                <img src={src3} className='img-fluid' alt="" />
              </div>
             </div>
           </div>

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
            <div className="row best_ways d-block d-md-none">
                <div className="col-md-4 w-100%">
                 <img src={src4} className='img-fluid my-3' alt="" />
                </div>

                <div className="col-md-4">
                <img src={src5} className='img-fluid my-3' alt="" />
               
                </div>

                <div className="col-md-4">
                <img src={src6} className='img-fluid my-3' alt="" />
               
                </div>
            </div>

            <div className="row d-flex d-none d-md-flex">
                <div className="col-md-6 ">
                 <img src={effort} className='img-fluid my-3' alt="" />
                </div>

                <div className="col-md-6">
                <img src={user} className='img-fluid my-3' alt="" />
               
                </div>

            </div>


           <div className="bank_content mt-5  d-none d-md-block ">
           <div className="row  ">
              <div className="col-md-12 ">
              <img src={dub} className='img-fluid' alt="" />

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