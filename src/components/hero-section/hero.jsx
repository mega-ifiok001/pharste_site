import React, { useEffect } from 'react';
import './hero.css';
import phone from '../../asset/pharste_mobuile.png';
import TradingImg from '../../asset/tab_5.png';
import digitalImg from '../../asset/tab_6.png';
import cadImg from '../../asset/tab_4.png';
import nigImg from '../../asset/tab_2.png';
import xofImg from '../../asset/tab_1.png';
import ghsImg from '../../asset/tab_3.png';
import bg_img from '../../asset/hero_img.png';
function Hero() {
    useEffect(() => {
        const phoneImg = document.querySelector('.pharste-phone');
        const tradeImg = document.querySelector('.trade-img');
        const digiImg = document.querySelector('.digi-img');
        const nigImg = document.querySelector('.nig-img');
        const cadImg = document.querySelector('.cad-img');
        const xofImg = document.querySelector('.xof-img');
        const ghsImg = document .querySelector('.ghs-img');
        // First animation: Appear after 1 second
        setTimeout(() => {
            phoneImg.classList.add('appear'); 

            // Second animation: Show trade image after the first animation is complete
            setTimeout(() => {
                tradeImg.classList.add('show_trade');

                setTimeout(() => {
                    digiImg.classList.add('show_digi');


                    setTimeout(() => {
                        nigImg.classList.add('show_nig');
                        cadImg.classList.add('show_cad');
                        xofImg.classList.add('show_xof');
                        ghsImg.classList.add('show_ghs');
    
                        
                    }, 1000);


                }, 1000);

            }, 1000); // Delay for the second animation
        }, 1000);
    }, []);

    return (
        <>
            <div className="container-fluid hero-container">
                <div className="hero">

                    <img src={phone} className="pharste-phone " alt="pharste_mobile" />
                    <img src={TradingImg} className="trade-img " alt="trade-img" />
                    <img src={digitalImg} className="digi-img " alt="digital-img" />
                    <img src={cadImg} className="cad-img " alt="digital-img" />
                    <img src={nigImg} className="nig-img " alt="nigeria-img" />
                    <img src={xofImg} className="xof-img " alt="xof-img" />
                    <img src={ghsImg} className="ghs-img " alt="ghs-img" />
                </div>
            </div>
        </>
    );
}

export default Hero;