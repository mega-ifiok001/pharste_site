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
                    <h2>How does Transmitex fulfil customer transactions?
                    </h2>
                </div>
                {activeIndex === 0 && <p className="faq-content">At Transmitex, we believe in personalised service. For this reason, we keep an open line of communication on our whatsapp lines to support our customers till their transactions are completed.</p>}
            </div>
            <div className={`faq-item ${activeIndex === 1 ? 'active' : ''}`} onClick={() => toggleFAQ(1)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 1 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>When a customer places an exchange order on the website, how does Transmitex fulfil the order?</h2>
                </div>
                {activeIndex === 1 && <p className="faq-content">After we have received a customer’s exchange request, we encourage customers to reach us on whatsapp to receive updates on their order. We will also contact customers by email or whatsapp if we need more information or to give them an update on their transaction..</p>}
            </div>
            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>How long does it take to fulfil transaction?</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">In the absence of any delays from our partners (banks, payment systems). Transmitex will fulfil all transactions within two hours of receipt of the funds.</p>}
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>I sent naira to the Transmitex Nigeria account but the whatsapp agent says it has not been received. What should I do?</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">In instances where naira is not received, we urge customers to contact their bank to ascertain the cause of the issue. We will do our best to support our customers should this occur..</p>}
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>How can customers complete the verification</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">Customers can find the verification link on the Kyc page and in the menu. Customers just need to click on the link, upload a government-issued photo identification card and take a selfie.</p>}
            </div>

            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>How is customer information stored and used?</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">Customer data is protected using our topnotch safeguard measures. Customer information is treated with utmost confidentiality and is not sold or given out for any reason.</p>}
            </div>


            <div className={`faq-item ${activeIndex === 2 ? 'active' : ''}`} onClick={() => toggleFAQ(2)}>
                <div className="d-flex align-items-center justify-content-space-around">
                    <img src={activeIndex === 2 ? dash : plus} className="toggle-icon" alt="" />
                    <h2>Does Transmitex handle money transfers to other countries aside Canada and Nigeria?</h2>
                </div>
                {activeIndex === 2 && <p className="faq-content">Currently, Transmitex only handles money remittance to Nigeria and Canada. Money service for other countries will be rolled out in the near future.</p>}
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


  
  

  const handleClick = (index) => {
    const address = addresses[index];
    setActiveIndex(index);

    map.setCenter({ lat: address.lat, lng: address.lng });

   
    document.querySelector(".blue-line").style.left = `${index * 33.33}%`;
  };


    return (
        <div style={{marginTop:'6rem'}}>
            <div className="contact">
                <h1 >Get in Touch</h1>
                <h2 className="mt-2">Our Locations</h2>
                <p className="mt-1">Say hello to our friendly teams at one of these locations</p>
            </div>

            <div id="map" className='map' style={{ height: '400px', width: '100%'}}></div>


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
                                <div className="d-flex align-items-center w-100% justify-content-space-around">
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
                                    <label htmlFor="f_name">Email</label><br/>
                                    <input type="text" placeholder="email" />
                                    </div>


                                    <div className="first">
                                    <label htmlFor="f_name">phone number</label><br/>
                                    <input type="text" placeholder="phone number" />
                                    </div>



                                    <div className="first">
                                    <label htmlFor="f_name">Leave a Message</label><br/>
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