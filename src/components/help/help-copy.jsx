import React, { useState } from 'react';
import './help.css';
import Footer from '../footer/footer';
import dash from '../../asset/minus-circle.png';
const TermsAndConditions = () => (
    <div className="Terms">
        <h1>Terms and Conditions</h1>
        <h2>Introduction</h2>
        <p className="mt-2">
            These docs will give you a deep dive into our full API Reference Documentation and how to seamlessly integrate our messaging channels 
            and verification functionalities into your product.
        </p>

        <br />

        <h2>Basics</h2>
        <p className="mt-2">
            Our API is organised around using HTTP verbs and REST. Our API accepts and returns JSON formatted payload.
        </p>
        <p>We provide sample code snippets and API calls that can serve as guide during your integration process.
        </p>
        <p>We also advice running some tests using Postman. Postman is a collaboration platform for API development which makes testing endpoints easy. We have also provided a Postman Collection you can easily import to your postman and start testing.</p>

        <br />

        <h2>SDKs</h2>
        <p className="mt-2">
            Ship your products faster & in any language you are proficient in by using SDKs provided by our community of open source developers. You can submit & view available ones here.
        </p>

        <br />

        <h2>API Endpoint</h2>
        <p className="mt-2">
            In order to use Termii's APIs, you need to first create an account for free at termii.com.
        </p>
        <br />

        <h2>BASE URL</h2>
        <p className="mt-2">
            Your Termii account has its own base URL, which you should use in all API requests.
            Your base URL can be found on your dashboard.
        </p>
        <p>
            The base URL is used to route your request to the appropriate "regulatory region" and to optimize traffic between data centers in the region.
        </p>

        <h2>Explore Products</h2>
        <p className="mt-2">
            These docs will give you a deep dive into our full API Reference Documentation and how to seamlessly integrate our messaging channels and verification functionalities into your product.
        </p>
    </div>
);

const PrivacyPolicy = () => (
    <div>
        <h1>Privacy Policy</h1>
        <p>Here is the privacy policy...</p>
    </div>
);

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            <h1>FAQs</h1>
            <div className="faq-item">
                <div className="d-flex  align-items-center justify-content-space-around">
                    <img src={dash} className="timer" alt="" />
                <h2 onClick={() => toggleFAQ(0)}>What is Termii?</h2>
                </div>
                {activeIndex === 0 && <p className="faq-content">Termii is a platform that provides messaging and verification services...</p>}
            </div>
            <div className="faq-item">
                <div className="d-flex  align-items-center justify-content-space-around">
                    <img src={dash} className="timer" alt="" />
                <h2 onClick={() => toggleFAQ(1)}>What is Termii?</h2>
                </div>
                {activeIndex === 0 && <p className="faq-content">Termii is a platform that provides messaging and verification services...</p>}
            </div>
            <div className="faq-item">
                <div className="d-flex  align-items-center justify-content-space-around">
                    <img src={dash} className="timer" alt="" />
                <h2 onClick={() => toggleFAQ(2)}>What is Termii?</h2>
                </div>
                {activeIndex === 0 && <p className="faq-content">Termii is a platform that provides messaging and verification services...</p>}
            </div>
        </div>
    );
};

const ContactUs = () => (
    <div>
        <h1>Contact Us</h1>
        <p>Here is how you can contact us...</p>
    </div>
);

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
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar setSelectedContent={setSelectedContent} />
                </div>
                <div className="col-md-9">
                    <MainContent selectedContent={selectedContent} />
                </div>
            </div>
        </div>

<Footer/>

   </>
    );
}

export default HelpCopy;