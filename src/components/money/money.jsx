import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

import "./money.css";
import NotificationOne from "../../asset/notify.png";
import notification_two from "../../asset/notification_two.png";
import trustBg from "../../asset/banner-bg.png";
import fine__person from "../../asset/fine_person.jpeg";
import tab from "../../asset/tab_img.png";
import protect from "../../asset/protect.jpeg";
import phone_bg from "../../asset/phone-bg.png";
import big_chart from "../../asset/bg-chart.jpeg";
import bg from "../../asset/Container.png";
import acc_setup_1 from "../../asset/one.png";
import acc_setup_2 from "../../asset/two.png";
import acc_setup_3 from "../../asset/three.png";
import card_1 from "../../asset/card_1.png";
import card_2 from "../../asset/card_2.png";
import card_3 from "../../asset/card_3.png";
import first from '../../asset/Background.png';
import second from '../../asset/protection.png';
import third from '../../asset/third.png';
import four from '../../asset/fourth.png';
import six from '../../asset/six.png';
import alertBar from "../../asset/alert.png";
import notificationBar from "../../asset/notification-bar.png";
import peer from '../../asset/peer.png';
import bill_payment from '../../asset/bill-payment.png';
import save_payment from '../../asset/save-bill.png';
import Exchange from "../exchange/echange";

function Money() {
  const [startCount, setStartCount] = useState(false);


  


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Select all elements with the 'animate-on-scroll' class
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const counterSection = document.querySelector(".counter");
      const rect = counterSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight * 0.8) {
        setStartCount(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
     {/* Final Section */}
      <div className="account_setup container-fluid">
        <div className="testimonials-text animate-on-scroll">
          <h1 className="testimonials-text">No Fees. One World.</h1>
        </div>

        <p className="animate-on-scroll">
          Need to send money across the world? Do it with Pharste. Relocating? Get started with Pharste. <br />
          You'll enjoy $0 fees on every transfer - no hidden costs or surprises.
        </p>

        <Exchange />
      </div>
      {/* Trusted Section */}

      <div className=" animate-on-scroll  testimonials-text mt-4">
          <h1>Trusted by users across <br /> continents</h1>
        </div>
        
      <div className="trust_container">
      

          <img src={NotificationOne} className="noti_one animate-on-scroll" alt="notification" />
          <img src={notification_two} className="noti_two animate-on-scroll" alt="notification" />

          <div className="counter">
            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={11} duration={3} suffix="k" />}
              </h1>
              <p>Downloads</p>
            </div>

            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={9} duration={3} suffix="+" />}
              </h1>
              <p>Active Users </p>
            </div>

            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={90} duration={3} suffix="%" />}
              </h1>
              <p>Positive Review</p>
            </div>
          </div>
        
      </div>

      {/* Why Use Pharste Section */}
      <div className="why-use" style={{marginTop:'2rem'}}>
        <div className=" testimonials-text animate-on-scroll">
          <h2 className="f-bold" >Why Use Pharste?</h2>

          {/* Tab 1 */}
          <div className=" tab" style={{marginTop:'-1.7rem'}} >
            <div className="row  ">
              <div className="col-md-5 mt-3 from-left animate-on-scroll ">
                <div className="content">
                  <h2>Send Money At The <br /> Speed Of Now</h2>
                  <p>Transfer funds instantly to anyone, anywhere.</p>
                  <div className="img ">
                    <div className="img_content">
                         <img src={alertBar} className="first__img" alt="send moey image " />
                    <img src={notificationBar} className="main__img"  alt="send moey image " />
                      
                    </div>
                  </div>
                </div>

              </div>
              <div className="col-md-7 mt-3 from-right img animate-on-scroll">
                <img src={fine__person} className="img-fluid" alt="Responsive Image" />
              </div>
            </div>
          </div>

          {/* Tab 2 */}
          <div className="mt-3 tab">
  <div className=" row d-flex flex-column-reverse flex-md-row">
    <div className="col-md-7 mt-3 from-left animate-on-scroll order-md-2">
      <img src={protect} className="img-fluid" alt="Responsive Image" />
    </div>
    <div className="col-md-5 mt-3 from-right animate-on-scroll order-md-1">
      <div className="content">
        <h2>Protection That Never <br /> Sleeps</h2>
        <p>
          Rest easy knowing your transactions are protected by
          military-grade encryption and advanced fraud monitoring.

        </p>
            <div className="img">
           <div className="img_content ">
            < img src={second} className="img-fluid main__img" alt="" />
           </div>
            </div>
      </div>


    </div>
  </div>
</div>

          {/* Tab 3 */}
          <div className="mt-3 tab">
            <div className="row">
              <div className="col-md-5 mt-3 from-left animate-on-scroll">
                <div className="content">
                  <h2>More For You, Less For <br /> Fees</h2>
                  <p>
                    Say goodbye to hidden charges and confusing fee structures. Our transparent pricing means you'll always know exactly what you're paying.
                  </p>
                    <div className="img">
           <div className="img_content ">
            <img src={third} className="img-fluid main__img" alt="" />
           </div>
            </div>
                </div>


              </div>
              <div className="col-md-7 mt-3 from-right animate-on-scroll">
                <img src={big_chart} className="img-fluid " alt="Responsive Image" />
              </div>
            </div>
          </div>

          {/* Tab 4 */}
          <div className="mt-3 tab">
  <div className="row d-flex flex-column-reverse flex-md-row">
    <div className="col-md-7 mt-3 from-left animate-on-scroll">
      <img src={bg} className="img-fluid" alt="Responsive Image" />
    </div>
    <div className="col-md-5 mt-3 from-right animate-on-scroll">

      <div className="content">
        <h2>Grow Your Money <br /> Automatically</h2>
        <p>
          Set aside funds effortlessly with automated saving tools. Create goals,
          schedule regular transfers, and watch your savings grow.
        </p>
            <div className="img">
           <div className="img_content ">
            <img src={four} className="img-fluid main__img" alt="" />
           </div>
            </div>
      </div>
    </div>
  </div>
</div>
        </div>
      </div>

      {/* Account Setup */}
      <div className="container-fluid account_setup">
        <div className=" animate-on-scroll testimonials-text">
          <h1>Get your Account ready in <br /> three steps</h1>
        </div>

        <div className="row mt-3 container-fluid">
          <div className="col-md-4 mt-4 animate-on-scroll from-left">
            <img src={acc_setup_1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll">
            <img src={acc_setup_2} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll from-right">
            <img src={acc_setup_3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container-fluid account_setup features_ex">
        <div className="testimonials-text animate-on-scroll">
          <h1>Feel the best experience <br /> with our features</h1>
        </div>

        <div className="row mt-3 container-fluid">
          <div className="col-md-4 mt-4 animate-on-scroll from-left">
            <div className="content_features">
                  <h2>P2P (Peer to Peer)</h2>
                  <p>
                Set your own exchange rates and match with others for better value - no middlemen just people helping people. </p>
                    
                  
   <div className="img">
           <div className="img_content img_content_two">
                                <img src={peer} className="img-fluid" alt="Tab Image" />

           </div>
            </div>                     
                </div>
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll">
             <div className="content_features">
                  <h2>Bills Payment</h2>
                  <p>The bills never stop. We get it. We make it easier, seamless and rewarding. </p>
                      <div className="img">
           <div className="img_content img_content_two">
              <img src={bill_payment} className="img-fluid" alt="Tab Image" />

           </div>
            </div>
                </div>
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll from-right">
             <div className="content_features">
                  <h2>Savings</h2>
                  <p>Be it a new phone or a new home, Pharset gives you the tool to save and earn big.  </p>
   <div className="img">
           <div className="img_content img_content_two">
                               <img src={save_payment} className="img-fluid" alt="Tab Image" />

           </div>
            </div>
                </div>
          </div>
        </div>
      </div>

     
    </>
  );
}

export default Money;