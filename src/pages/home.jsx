import React from 'react';
import Hero from '../components/hero-section/hero'
import Money from '../components/money/money';
import Testimonial from '../components/Testimonial/testimonial';
import Footer from '../components/footer/footer';

function Home(){
return(
<>
       <Hero/>
       <Money/>
       <Testimonial/>
       <Footer/>
</>
);

}

export default Home