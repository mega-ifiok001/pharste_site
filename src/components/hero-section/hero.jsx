import React, { useEffect } from 'react';
import './hero.css';
import heroBg from '../../asset/Vector.png';
import badge from '../../asset/Background.png';

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
             </div>
            </div>
        </>
    );
}

export default Hero;