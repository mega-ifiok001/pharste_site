import React, { useEffect, useState } from "react";
import "./hero.css";
// import Hero_bg from "../../asset/heroBg.png";
import Header from '../../components/header/header.jsx'
import Band from '../../asset/band.png'
import Google from '../../asset/google.png';
import Apple from '../../asset/apple.png';
import Exchange from '../exchange/echange.jsx';
import Ex_info from '../exchange/exchange_info.jsx';
// import RoundImg from '../../asset/Container.png';
function Hero() {
 


  return (

    <>

      <div className="hero_container ">
    <Ex_info/>

        <Header />

    
            <div className="hero_content">
          <div className="hero_text">
            <h1>
              Take Control of <br />
              your finances
            </h1>
            <p>
              The money app built for friends, families, and fearless <br />
              transactions, no matter where they are in the world
            </p>
          </div>

          <div className="download_btn">
            <a href="
     https://play.google.com/store/apps?hl=en_US&gl=US" target="_blank" rel="noopener noreferrer">
              <img src={Google} alt="" />
            </a>
            <a href="
                       https://www.apple.com/iphone/app-store/" target="_blank" rel="noopener noreferrer">
              <img src={Apple} alt="" />
            </a>
          </div>

          {/* <div className="download_btn gm align-items-center justify-content-start">
      <img src={RoundImg} className="w-[100]" alt="" />
      <div className="sub_text">
        <span>150k+</span>
        <span className="rev">Review</span>
      </div>2
    </div> */}
        </div>
          
          

      </div>


      {/* <img src={Hero_bg} className="hero_img" alt="hero bg" /> */}

      {/* <div className="hero_content">
    <img src={Band} className="band_img" alt="band" />
    <div className="hero_text">
      <h1>
        Take Control of <br />
        your finances
      </h1>
      <p>
        The money app built for friends, families, and fearless <br />
        transactions, no matter where they are 🌐🌍
      </p>
    </div>

    <div className="download_btn">
      <img src={Google} className="img-fluid" alt="playstore" />
      <img src={Apple} className="img-fluid" alt="apple store" />
    </div>

    <div className="download_btn gm align-items-center justify-content-start">
      <img src={RoundImg} className="w-[100]" alt="" />
      <div className="sub_text">
        <span>150k+</span>
        <span className="rev">Review</span>
      </div>
    </div>
  </div> */}

    </>);
}

export default Hero;
