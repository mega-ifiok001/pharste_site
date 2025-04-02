import React, { useEffect } from 'react';
import './hero.css';
import heroBg from '../../asset/Vector.png';
import badge from '../../asset/Background.png';
import apple from '../../asset/apple.png';
import google from '../../asset/google.png';
import stack from '../../asset/Container.png';
import phone from '../../asset/iphone.png';
import blur from '../../asset/blur-gradient.png';

function Hero() {
  
    return (
        <>
            <div className="container-fluid hero-container">
             <img src={heroBg} className="bg-img" alt="vector" />
             <div className="hero">
                <img src={badge} className='badge' alt="" />

                <div className="hero-text">
                    <h1>
                        Take Control of <br/> your finances
                    </h1>

                    <p className="mt-3">
                    The money app built for friends, families,
                     and fearless <br/> transactions, no matter where they are 🌐🌍
                    </p>
                </div>

                <div className="d-flex downloader">
                    <img src={apple} alt="" />
                    <img src={google} alt="" />
                </div>

                <div class="image-stack">
        <img src={stack} alt="Image 1"/>
        <div className="stack-text">
            <span>150K+</span> <br/>
            <span>Review</span>
        </div>


      
    </div>


    <div className="hero-bottom">
          <img src={blur} className="blur" alt="" />
          <img src={phone} className="phone" alt="" />
        </div>
             </div>
            </div>
        </>
    );
}

export default Hero;