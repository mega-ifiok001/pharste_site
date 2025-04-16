import React, { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";

import "./money.css";
import NotificationOne from "../../asset/notify.png";
import notification_two from "../../asset/notification_two.png";
import trustBg from "../../asset/banner-bg.png";
import fine__person from "../../asset/fine_person.png";
import tab from "../../asset/tab_img.png";
import protect from "../../asset/protect.png";
import phone_bg from "../../asset/phone-bg.png";
import big_chart from "../../asset/bg-chart.png";
import bg from "../../asset/bg.png";
import acc_setup_1 from "../../asset/account_setup_1.png";
import acc_setup_2 from "../../asset/account_setup_2.png";
import acc_setup_3 from "../../asset/account_setup_3.png";
import card_1 from "../../asset/card_1.png";
import card_2 from "../../asset/card_2.png";
import card_3 from "../../asset/card_3.png";

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
      {/* Trusted Section */}
      <div className="trust_container">
        <div className="trust-text animate-on-scroll">
          <h1>Trusted by users across <br /> thirty countries</h1>
        </div>

        <div className="trust-bg container-lg mt-5">
          <img src={trustBg} alt="trusted_img" className="trusted_img" />
          <img src={NotificationOne} className="noti_one animate-on-scroll" alt="notification" />
          <img src={notification_two} className="noti_two animate-on-scroll" alt="notification" />

          <div className="counter">
            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={50} duration={3} suffix="k" />}
              </h1>
              <p>Downloads</p>
            </div>

            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={20} duration={3} suffix="+" />}
              </h1>
              <p>Countries</p>
            </div>

            <div className="counter-text animate-on-scroll">
              <h1>
                {startCount && <CountUp end={90} duration={3} suffix="%" />}
              </h1>
              <p>Positive Review</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Use Pharste Section */}
      <div className="why-use">
        <div className="use-text">
          <h1 className=" animate-on-scroll">Why Use Pharste?</h1>

          {/* Tab 1 */}
          <div className="mt-3 tab" >
            <div className="row">
              <div className="col-md-5 mt-3 from-left animate-on-scroll">
                <div className="content">
                  <h2>Send Money At The <br /> Speed Of Now</h2>
                  <p>Transfer funds instantly to anyone, anywhere. What used to take days now happens in seconds.</p>
                  <img src={tab} className="tab-img" alt="Tab Image" />
                </div>
              </div>
              <div className="col-md-7 mt-3 from-right animate-on-scroll">
                <img src={fine__person} className="img-fluid" alt="Responsive Image" />
              </div>
            </div>
          </div>

          {/* Tab 2 */}
          <div className="mt-3 tab">
            <div className="row">
              <div className="col-md-7 mt-3 from-left animate-on-scroll">
                <img src={protect} className="img-fluid" alt="Responsive Image" />
              </div>
              <div className="col-md-5 mt-3 from-right animate-on-scroll">
                <div className="content">
                  <h2>Protection That Never <br /> Sleeps</h2>
                  <p>
                    Rest easy knowing your transactions are protected by
                    military-grade encryption and advanced fraud monitoring.
                  </p>
                  <img src={phone_bg} className="tab-img" alt="Tab Image" />
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
                  <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
              </div>
              <div className="col-md-7 mt-3 from-right animate-on-scroll">
                <img src={big_chart} className="img-fluid" alt="Responsive Image" />
              </div>
            </div>
          </div>

          {/* Tab 4 */}
          <div className="mt-3 tab">
            <div className="row">
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
                  <img src={phone_bg} className="tab-img" alt="Tab Image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account Setup */}
      <div className="container-fluid account_setup">
        <div className="title animate-on-scroll">
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
        <div className="title animate-on-scroll">
          <h1>Feel the best experience <br /> with our features</h1>
        </div>

        <div className="row mt-3 container-fluid">
          <div className="col-md-4 mt-4 animate-on-scroll from-left">
            <img src={card_1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll">
            <img src={card_3} alt="" className="img-fluid" />
          </div>
          <div className="col-md-4 mt-4 animate-on-scroll from-right">
            <img src={card_2} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Final Section */}
      <div className="account_setup container-fluid">
        <div className="title animate-on-scroll">
          <h1>No Fees. One World.</h1>
        </div>

        <p className="animate-on-scroll">
          Need to send money across the world? Do it with Pesa. Relocating? Get started with Pesa. <br />
          You'll enjoy $0 fees on every transfer - no hidden costs or surprises.
        </p>

        <Exchange />
      </div>
    </>
  );
}

export default Money;