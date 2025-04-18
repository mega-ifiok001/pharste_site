import React from "react";
import "./testimonial.css";
import profile_1 from '../../asset/profile1.png';
import profile_2 from '../../asset/profile2.png';
import profile_3 from '../../asset/profile3.png';
const Testimonial = () => {
  const testimonials = [
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
    "Finmigo gave me the financial clarity I always  needed. I used to feel so overwhelmed by my finances, but now I have a clear plan and tools to stick to it. Can’t imagine my life without this app.",
  ];

  return (

  <>
     <h2 className="testimonials-text">
      Our Users Speak For Us 
     </h2>
     <p className="testimonials-sub-text text-center">
      More than 90% of our users managed their finances better after using pharste. Checkout <br/>
      some of the reviews from clients.
     </p>

    <div className="testimonials-row">
      <div className="testimonial-container">
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial_header">
              <img src={profile_3} alt="" />
                <div className="profile_tag">
                  <h2>Leslie Alexander </h2>
                  <p>@Hello world</p>
                </div>
              </div>
              {testimonial}
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
               <div className="testimonial_header">
              <img src={profile_1} alt="" />
              <div className="profile_tag">
                  <h2>Jane Cooper</h2>
                  <p>@Hello world</p>
                </div>
              </div>
              {testimonial}
            </div>
          ))}
        </div>
      </div>
      <div className="testimonial-container">
        <div className="testimonial-content">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
               <div className="testimonial_header">
              <img src={profile_2} alt="" />
              <div className="profile_tag">
                  <h2>Devon Lane </h2>
                  <p>@Hello world</p>
                </div>
              </div>
              {testimonial}
            </div>
          ))}
        </div>
      </div>
    </div>
  </>
  );
};

export default Testimonial;