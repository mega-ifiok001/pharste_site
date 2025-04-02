import React from 'react';
import './money.css';
import trustBg from '../../asset/trusted.png';
import fine__person from '../../asset/fine_person.png';
import tab from '../../asset/tab_img.png';
import protect from '../../asset/protect.png';
import phone_bg from '../../asset/phone-bg.png';
function Money(){

    return(

        <>
         <div className="trust_container mt-5">
          <div className="trust-text">
            <h1>Trusted by users across <br/>thirty countries</h1>
          </div>

          <div className="trust-bg container-lg">
            <img src={trustBg} alt="" />
          </div>
         </div>





         {/* why use pharste */}

         <div className="why-use">
          <div className="use-text ">
            <h1>Why Use Pharste?</h1>

            <div class=" mt-2 tab">
            <div class="row ">
            <div class="col-md-5">
                <div class="content">
                    <h2>Send Money At The <br/> Speed Of Now</h2>
                    <p>Transfer funds instantly to anyone, anywhere. What used to take days now happens in seconds.</p>
                    <img src={tab} className="tab-img" alt="Tab Image" />
                </div>
            </div>
            <div class="col-md-7">
                <img src={fine__person} class="img-fluid" alt="Responsive Image"/>
            </div>
        </div>
    </div>




    <div class=" mt-2 tab">
            <div class="row ">
            <div class="col-md-7">
                <img src={protect} class="img-fluid" alt="Responsive Image"/>
            </div>
            <div class="col-md-5">
                <div class="content">
                    <h2>Send Money At The <br/> Speed Of Now</h2>
                    <p>Transfer funds instantly to anyone, anywhere. What used to take days now happens in seconds.</p>
                    <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
            </div>
         
        </div>
    </div>
          </div>
         </div>
        </>
    )

}


export default Money