import React from 'react';
import './banner.css';
import src from '../../asset/src.png';
import src2 from '../../asset/src-2.png';
import src3 from '../../asset/src-3.png';
import sr4 from '../../asset/src-4.png';


function Banner(){


    return(
        <>

<div className="banner-container">
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

        </>
    );
}

export default Banner;