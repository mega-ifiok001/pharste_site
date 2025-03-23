import React from 'react';
import Header from '../components/header/header';
import AboutHero from '../components/about-hero/about_hero';
import Footer from '../components/footer/footer';

function About(){

    return(
        <>
        <div className="container-fluid">
            <Header/>
            <AboutHero/>
            <Footer/>
        </div>
        </>
    );
}

export default About;