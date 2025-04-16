import React, { useEffect } from "react";
import "./hero.css";
import Hero_bg from "../../asset/heroBg.png";
import Header from '../../components/header/header.jsx'
import Band from '../../asset/band.png'
import Google from '../../asset/google.png';
import Apple from '../../asset/apple.png';
import RoundImg from '../../asset/Container.png';
function Hero() {
  return(
  
  <>
  
 <div className="hero_container">
    <img src={Hero_bg} className="hero_img" alt="hero bg " />
    <Header/>

   <div className="hero_content">
   <img src={Band} className="band_img" alt="band_img" />
   <div className="hero_text">
    <h1>Take Control of  <br/>
    your finances</h1>
    <p>The money app built for friends, families, and fearless <br/>
         transactions,
         no matter where they are 🌐🌍</p>
   </div>

   <div className="download_btn">
     <img src={Google} alt="playstore" />
     <img src={Apple} alt="apple store" />
   </div>

   <div className="download_btn mt-4 align-items-center justify-content-start">
      

      <img src={RoundImg} className="w-[100]"  alt="" />

    <div className="sub_text">
        <span>150k+</span> <br />
        <span className="rev">Review</span>
    </div>
   </div>
   </div>
 </div>
  
  </>);
}

export default Hero;
