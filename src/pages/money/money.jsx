import React from 'react';
import './money.css';
import google from '../../asset/google.png'
import apple from '../../asset/apple.png';
import globe from '../../asset/globe.png';
import dollar from '../../asset/dollar-lock.png';
import safe_man from '../../asset/safe_man.png';
import fees from '../../asset/Fees.png';
import woman from '../../asset/woman.png';
import bell from '../../asset/Notification.png';
import bank from '../../asset/bank.png';
import ScrollDep from '../../pages/scroll_deb/scroll_deb';
import Banner from '../banner/banner';
function Money(){

    return(

        <>
          <div className="content text-start">
          <h1>Make fast money moves</h1>
         <p>The money app built for friends, families, and fearless transactions, no matter where they are 🌐🌍</p>
          

          <div className=" content-img">
           <a href="#">
           <img src={google} alt="google store" />
           </a>

           <a href="#">
            <img src={apple} alt="apple store" />
           </a>
          </div>
          </div>



          {/* next section */}

          <section className='section-def'>
           <div className="header">
           <h1 className="">
            Why use pharste?
            </h1>
            <p>The money app built for friends, families, and fearless transactions, no matter where they are 🌐🌍</p>
          
           </div>



          </section>


          <section>

           <div className="send_money_tab">
            <div className="tab_writeup">
              <h1>
              Send Money At The Speed Of Now
              </h1>
              <p>Transfer funds instantly to anyone, anywhere. What used to take days now happens in seconds. Whether sending across the room or across the globe, your money arrives right when you need it.</p>
            </div>
                <img src={globe} alt="globe image" />
             </div>


             <div className="safety_tabs row">
              <div className="send_money_tab col-md-8">
                  <div className="safety_tab_writeup">
                    <h1>
                    Protection That Never Sleeps
                    </h1>
                    <p>
                    Rest easy knowing your transactions are protected by military-grade encryption and advanced fraud monitoring. 
                    </p>
                  </div>

                  <img src={dollar} alt="dollar lock" />
              </div>

              <div className="safety_tab_1 col-md-4">
              <img src={safe_man} alt="" />
              </div>
             </div>



             <div className="send_money_tab send_money_tab_2">
            <div className=" tab_writeup_2 ">
              <h1 className=""
              style={{
                color:'#A84D00',
              }}
              >
             More For You, Less For Fees
              </h1>
              <p>Say goodbye to hidden charges and confusing fee structures. Our transparent pricing means you'll always know exactly what you're paying. </p>
            </div>
                <img 
                src={fees}
                style={{
                  marginTop:'3rem',
                  width:'30%'
                }}
                alt="globe image" />
             </div>





             <div className="watch_money row">
             <div className="col-md-4 watch_money_tab">
               <img src={woman} alt="woman image" />
             </div>

             <div className="send_money_tab_3  col-md-8 ">
             <div className="tab_writeup_3 ">
                <h1>Watch Your Money Move</h1>
                <p>Never wonder where your money is again. Follow your transfers from start to finish with real-time
                   tracking and instant notifications. </p>
             </div>
             <img src={bell}
             style={{
              width:'30%',

             }} alt="bell" />
             </div>
             </div>




             <div className="send_money_tab_4">
             <div className="tab_writeup_4 ">
                <h1>Grow Your Money Automatically</h1>
                <p>Never wonder where your money is again. Follow your transfers from start to finish with real-time
                   tracking and instant notifications. </p>
             </div>
             <img src={bank}
             style={{
              width:'30%',
              
             }} alt="bell" />
             </div>
          </section>


          <section>
            <ScrollDep/>
          </section>

          <section>
            <Banner/>
          </section>

        
        </>
    )

}


export default Money