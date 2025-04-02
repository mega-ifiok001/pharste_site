import React from 'react';
import './money.css';
import trustBg from '../../asset/trusted.png';
import fine__person from '../../asset/fine_person.png';
import tab from '../../asset/tab_img.png';
import protect from '../../asset/protect.png';
import phone_bg from '../../asset/phone-bg.png';
import big_chart from '../../asset/bg-chart.png';
import chart_img from '../../asset/chart_img.png';
import bg from '../../asset/bg.png';
import acc_setup_1 from '../../asset/account_setup_1.png';
import acc_setup_2 from '../../asset/account_setup_2.png';
import acc_setup_3 from '../../asset/account_setup_3.png';
import card_1 from '../../asset/card_1.png'
import card_2 from '../../asset/card_2.png'
import card_3 from '../../asset/card_3.png'
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
            <div class="col-md-5 mt-2">
                <div class="content">
                    <h2>Send Money At The <br/> Speed Of Now</h2>
                    <p>Transfer funds instantly to anyone, anywhere. What used to take days now happens in seconds.</p>
                    <img src={tab} className="tab-img" alt="Tab Image" />
                </div>
            </div>
            <div class="col-md-7 mt-2">
                <img src={fine__person} class="img-fluid" alt="Responsive Image"/>
            </div>
        </div>
    </div>




    <div class=" mt-2 tab">
            <div class="row ">
            <div class="col-md-7 mt-2">
                <img src={protect} class="img-fluid" alt="Responsive Image"/>
            </div>
            <div class="col-md-5 mt-2">
                <div class="content">
                    <h2>Protection That Never  <br/> Sleeps</h2>
                    <p>Rest easy knowing your transactions are protected by
                         military-grade encryption and advanced
                         fraud monitoring. </p>
                    <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
            </div>
         
        </div>
    </div>



    <div class=" mt-2 tab">
            <div class="row ">
            <div class="col-md-5 mt-2">
                <div class="content">
                    <h2>More For You, Less For  <br/>Fees</h2>
                    <p>Say goodbye to hidden charges and confusing fee structures. 
                        Our transparent pricing means you'll always 
                        know exactly what you're paying. </p>
                    <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
            </div>
            <div class="col-md-7 mt-2">
                <img src={big_chart} class="img-fluid" alt="Responsive Image"/>
            </div>
        </div>
    </div>






    <div class=" mt-2 tab">
            <div class="row ">
            <div class="col-md-7 mt-2">
                <img src={bg} class="img-fluid  " alt="Responsive Image"/>
             
            </div>
            <div class="col-md-5 mt-2">
                <div class="content">
                    <h2>Grow Your Money   <br/> Automatically</h2>
                    <p>Set aside funds effortlessly with automated saving tools. Create goals,
                         schedule
                         regular transfers, and watch your savings grow.  </p>
                    <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
            </div>
         
        </div>
    </div>
          </div>
         </div>



         <div className="container-fluid account_setup">
             <div className="title">
                <h1>Get your Account ready in <br/> three steps </h1>
             </div>


             <div className="row mt-3 container-fluid ">
                <div className="col-md-4">
                  <img src={acc_setup_1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-4">
                  <img src={acc_setup_2} alt="" className="img-fluid" />

                </div>
                <div className="col-md-4">
                  <img src={acc_setup_3} alt="" className="img-fluid" />

                </div>
             </div>
         </div>





         <div className="container-fluid account_setup features_ex">
             <div className="title">
                <h1>Feel the best experience  <br/> with our features </h1>
             </div>


             <div className="row mt-3 container-fluid ">
                <div className="col-md-4">
                  <img src={card_1} alt="" className="img-fluid" />
                </div>
                <div className="col-md-4">
                  <img src={card_3} alt="" className="img-fluid" />

                </div>
                <div className="col-md-4">
                  <img src={card_2} alt="" className="img-fluid" />

                </div>
             </div>
         </div>






        <div className="account_setup container-fluid">
            <div className="title">
                <h1>No Fees. One World.</h1>
            </div>

            <p>Need to send money across the world? Do it with Pesa. Relocating? Get started with Pesa. <br/>
            You'll enjoy $0 fees on every transfer - no hidden costs or surprises.</p>
        </div>
        </>
    )

}


export default Money