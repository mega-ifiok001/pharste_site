import React from 'react';
import AboutHero from '../components/about-hero/about_hero';
import Footer from '../components/footer/footer';

function About(){

    return(
        <>
        <div className="container-fluid">
         
            <AboutHero/>
            <Footer/>
        </div>
        </>
    );
}

export default About;