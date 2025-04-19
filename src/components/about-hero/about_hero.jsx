import React from 'react';
import './about_hero.css';
import hero from '../../asset/about-hero.png';
import money from '../../asset/money.png';
import bankLocker from '../../asset/bank_locker.png';
import billPay from'../../asset/bill_payment.png';
import p2p from '../../asset/p2p_trade.png';
import Header from '../header/header';
import smileyFace from '../../asset/smiley_face.png';
function AboutHero(){

    return(
<>
  <div className=" about_hero">
        <Header/>
        <div className="d-flex align-items-center justify-content-center box_">
            <h1 className="title">
                Pharste  <br/>  
                The Future of Money Movement
            </h1>

            <p className="paragraph">
            Pharste simplifies money movement, effortless, transparent, <br/> 
             and instant transactions—anytime, anywhere.
            </p>
        </div>
  </div>



    
    <div className="about_typo">
     <div className="row">
        <div className="col-md-6 mt-2">
        <h2 className="title">
      OUR MISSION
      </h2>

      <p className="typo_content">
      At Pharste, we're on a mission to make money movement as simple as sending a text message.
      We believe financial services should be intuitive, instant, and inclusive. Every feature we build, every experience we design, and every partnership
       we form is guided by this fundamental commitment.
      </p>
        </div>

        <div className="col-md-6">
            <h2 className="title_1">Why choose Pharste</h2>
            <p className="typo_content_1"> Our goal is to eliminate outdated processes and provide a modern financial experience built for the digital economy.</p>
            <p className="typo_content_1">At Pharste, we believe that financial freedom should not be complicated—it should be accessible to everyone, regardless of where they are.</p>
            <p className="typo_content_1">We understand that financial freedom is more than just transactions—it's about having the flexibility, control, and confidence to manage your finances on your terms. That’s why Pharste is built to offer speed, security, and convenience, ensuring you stay
                 in control of your financial journey.</p>
            <p className="typo_content_1">With Pharste, you’re not just banking—you’re experiencing the future of finance.
            🔹 Fast. Secure. Affordable. Your Money, Your Way.</p>
        </div>
     </div>
  </div>



  <section className="core">
    <h1>Our core values</h1>
    <p>The money app built for friends, families, and fearless transactions, 
        no matter where they are in the world.</p>

      
            <div className="row g-3  mt-4">
                <div className="col-sm-6 w-100%">
                  <div className="banner_content">
                    <h1 className="banner_content_title">Transparency</h1>
                    <p className="banner_content_paragraph">No hidden fees, no fine-print- just honest <br></br> service.</p>
                 <img src={money} alt="p2p transaction pic" />
                  </div>
                </div>

                <div className="col-sm-6">
                <div className="banner_content ">
                    <h1 className="banner_content_title">security</h1>
                    <p className="banner_content_paragraph">Your financial safety is our non-negotiable priority. </p>
                 <img src={billPay} alt="bill payment image " />
                  </div>
                </div>
            </div>







            <div className="row g-3 mt-4">
                <div className="col-sm-6 w-100%">
                  <div className="banner_content">
                    <h1 className="banner_content_title">Accessibility</h1>
                    <p className="banner_content_paragraph">Financial tools should work for everyone, <br/> everywhere.</p>
                 <img src={p2p} alt="p2p transaction pic" />
                  </div>
                </div>

                <div className="col-sm-6">
                <div className="banner_content ">
                    <h1 className="banner_content_title">Innovation</h1>
                    <p className="banner_content_paragraph">We constantly evolve to serve you better. </p>
                 <img src={bankLocker} alt="bill payment image " />
                  </div>
                </div>
            </div>
     
  </section>
  

  <section className="impact_banner">
          <div className="impact_content">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
               <h1 className="impact_title">Creating Impact, <br /> Together</h1>
               <p className="impact_paragraph">At Pharste, we believe in making a real difference. Through our commitment to social impact and corporate responsibility.
               By choosing Pharste, you're not just managing transactions—you’re contributing to a movement that builds a better future for everyone.</p>
            </div>
             <div className="col-md-6">
              <img src={smileyFace} alt="smiley faces " />
             </div>
           </div>
          </div>
         </section>

  

</>

    );
}

export default AboutHero;