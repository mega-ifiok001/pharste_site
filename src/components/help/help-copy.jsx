import React, { useState, useEffect } from 'react';
import './help.css'; 
import Footer from '../footer/footer';
import dash from '../../asset/minus-circle.png';
import Header from '../header/header';

import plus from '../../asset/plus.png';

const TermsAndConditions = () => (
    <div className="Terms " style={{marginTop:'6rem'}}>
        <h1 className='mt-5 text start'>Terms and Conditions</h1>
        <h2>Introduction</h2>
        <p className="mt-2 text-start">
            These docs will give you a deep dive into our full API Reference Documentation and how to seamlessly integrate our messaging channels 
            and verification functionalities into your product.
        </p>

        <br />

        <h2>Basics</h2>
        <p className="mt-2 text-start">
            Our API is organised around using HTTP verbs and REST. Our API accepts and returns JSON formatted payload.
        </p>
        <p className='text-start'>We provide sample code snippets and API calls that can serve as guide during your integration process.
        </p>
        <p className='text-start'>We also advice running some tests using Postman. Postman is a collaboration platform for API development which makes testing endpoints easy. We have also provided a Postman Collection you can easily import to your postman and start testing.</p>

        <br />

        <h2>SDKs</h2>
        <p className="mt-2 text-start">
            Ship your products faster & in any language you are proficient in by using SDKs provided by our community of open source developers. You can submit & view available ones here.
        </p>

        <br />

        <h2>API Endpoint</h2>
        <p className="mt-2 text-start">
            In order to use Termii's APIs, you need to first create an account for free at termii.com.
        </p>
        <br />

        <h2>BASE URL</h2>
        <p className="mt-2 text-start">
            Your Termii account has its own base URL, which you should use in all API requests.
            Your base URL can be found on your dashboard.
        </p>
        <p>
            The base URL is used to route your request to the appropriate "regulatory region" and to optimize traffic between data centers in the region.
        </p>

        <h2>Explore Products</h2>
        <p className="mt-2 text-start">
            These docs will give you a deep dive into our full API Reference Documentation and how to seamlessly integrate our messaging channels and verification functionalities into your product.
        </p>
    </div>
);

const PrivacyPolicy = () => (
    <div className="mx-3" style={{marginTop:'6rem'}}>
        <h1>Privacy Policy</h1>
        <p>Loading...</p>
    </div>
);

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="" style={{marginTop:'7rem'}}>
            <h1 className="mx-3 fs-2 mb-3 mt-3"> Frequently Asked Questions</h1>
           <div className="mx-3">
           <div className={`faq-item ${activeIndex === 0 ? 'active' : ''}`} onClick={() => toggleFAQ(0)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 0 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>Is there a free trial available?</h2>
                </div>
                {activeIndex === 0 && <p className="faq-content">Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you
                     up and running as soon as possible.</p>}
            </div>
            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 1 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>Do you change my plan later</h2>
                </div>
                {activeIndex === 1 && <p className="faq-content">Our API is organized around using HTTP verbs and REST...</p>}
            </div>
            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>What is your cancellation policy</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">You can find the full API Reference Documentation on our website...</p>}
            </div>
           </div>

         </div>
    );
};

const ContactUs = () => {
    const addresses = [
        { name: 'Melbourne', address: '100 founders street, Melbourne VIC 3000 ALI', lat: -37.8136, lng: 144.9631 },
        { name: 'Sydney', address: '100 george street, Sydney NSW 2000 ALI', lat: -33.8688, lng: 151.2093 },
        { name: 'Byron Bay', address: '100 johnson street, Byron Bay NSW 2481 AU', lat: -28.6434, lng: 153.6120 }
    ];

    const [map, setMap] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const google = window.google;
        const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: -33.8688, lng: 151.2093 },
            zoom: 10,
        });
        setMap(map);
    }, []);

    const handleClick = (index) => {
        const address = addresses[index];
        setActiveIndex(index);
        map.setCenter({ lat: address.lat, lng: address.lng });
        document.querySelector('.blue-line').style.left = `${index * 33.33}%`;
    };

    return (
        <div style={{marginTop:'6rem'}}>
            <div className="contact">
                <h1 >Get in Touch</h1>
                <h2 className="mt-2">Our Locations</h2>
                <p className="mt-1">Say hello to our friendly teams at one of these locations</p>
            </div>

            <div id="map" style={{ height: '400px', width: '100%' }}></div>
            <div className="grey-line">
                <div className="blue-line" style={{ left: `${activeIndex * 33.33}%`, height: '10px' }}></div>
            </div>
            <div className="address-container">
                {addresses.map((address, index) => (
                    <div 
                        key={index} 
                        className={`address-column ${activeIndex === index ? 'active' : ''}`} 
                        onClick={() => handleClick(index)}
                    >
                        <h3>{address.name}</h3>
                        <p>{address.address.split(', ')[0]}</p>
                        <p>{address.address.split(', ').slice(1).join(', ')}</p>
                    </div>
                ))}
            </div>

            <div className="form px-2  ">
                <h1>we're here to help</h1>
                <p className="mt-2">Have questions or feedback? We'd love to hear from you. Our team is committed to providing timely and helpful 
                    responses to every inquiry.</p>
                    
                    <div className="row mt-3">
                        <div className="col-lg-7 col-md-10 col-sm-12  col-xs-12">
                            <form className='contact_us' action="">
                                <div className="d-flex align-items-center w-100%">
                                    <div className="first">
                                    <label htmlFor="f_name">First Name</label><br/>
                                    <input type="text" placeholder="first name" />
                                    </div>

                                    <div className="first firsts">
                                    <label htmlFor="f_name">Last Name</label><br/>
                                    <input type="text" placeholder="last name" />
                                    </div>
                                </div>


                                <div className="first">
                                    <label htmlFor="f_name">Last Name</label><br/>
                                    <input type="text" placeholder="last name" />
                                    </div>


                                    <div className="first">
                                    <label htmlFor="f_name">Last Name</label><br/>
                                    <input type="text" placeholder="last name" />
                                    </div>



                                    <div className="first">
                                    <label htmlFor="f_name">Last Name</label><br/>
                                   <textarea name="message" id="message"  placeholder='Leave a message'></textarea>
                                    </div>

                                <div className="agreement d-flex align-item-center">
                                    <input type="checkbox" name="agreement" id="agreement" />
                                    <p>You agree to our friendly <a href="#">privacy policy</a></p>
                                </div>
                                    <button type="submit">Send Message</button>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

const Sidebar = ({ setSelectedContent }) => (
    <div className="sidebar">
        <button onClick={() => setSelectedContent('terms')}>Terms and Conditions</button>
        <button onClick={() => setSelectedContent('privacy')}>Privacy Policy</button>
        <button onClick={() => setSelectedContent('faqs')}>FAQs</button>
        <button onClick={() => setSelectedContent('contact')}>Contact Us</button>
    </div>
);

const MainContent = ({ selectedContent }) => {
    switch (selectedContent) {
        case 'terms':
            return <TermsAndConditions />;
        case 'privacy':
            return <PrivacyPolicy />;
        case 'faqs':
            return <FAQs />;
        case 'contact':
            return <ContactUs />;
        default:
            return <TermsAndConditions />;
    }
};

function HelpCopy() {
    const [selectedContent, setSelectedContent] = useState('terms');

    return (
        <>

            <div className=" feature-container help mt-5">
           < Header/>

                <div className="row">
                    
                    <div className="col-md-3">
                        <Sidebar setSelectedContent={setSelectedContent} />
                    </div>
                    <div className="col-md-9">
                        <MainContent selectedContent={selectedContent} />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default HelpCopy;