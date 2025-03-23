import React, { useState } from 'react';
import './slider.css';
import prev from '../../asset/prev.png';
import next from '../../asset/next.png';

import profile_image_1 from '../../asset/testimonial_1.png';
import profile_image_2 from '../../asset/testimonial_2.png';
import profile_image_3 from '../../asset/testimonial_1.png';
import profile_image_4 from '../../asset/testimonial_1.png';
import profile_image_5 from '../../asset/testimonial_2.png';
import profile_image_6 from '../../asset/testimonial_1.png';
import profile_image_7 from '../../asset/testimonial_1.png';

function SliderComp() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const testimonials = [
        { id: 0, image: profile_image_1, name: "John Doe", text: "Pharste has transformed the way we manage our finances. Their platform is user-friendly and efficient." },
        { id: 1, image: profile_image_2, name: "Jane Smith", text: "The customer support at Pharste is outstanding. They are always ready to assist with any issues." },
        { id: 2, image: profile_image_3, name: "Michael Johnson", text: "We have seen significant improvements in our financial operations since using Pharste." },
        { id: 3, image: profile_image_4, name: "John Doe", text: "Pharste has transformed the way we manage our finances. Their platform is user-friendly and efficient." },
        { id: 4, image: profile_image_5, name: "Jane Smith", text: "The customer support at Pharste is outstanding. They are always ready to assist with any issues." },
        { id: 5, image: profile_image_6, name: "Michael Johnson", text: "We have seen significant improvements in our financial operations since using Pharste." },
        { id: 6, image: profile_image_7, name: "Michael Johnson", text: "We have seen significant improvements in our financial operations since using Pharste." },
        
    ];

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0));
    };

    return (
        <div className="container_slide">
            <h1 className="slide_title">
                Pharste: The Fintech Choice for Making a Real Difference
            </h1>
            <div className="slider">
                <div className="slides" style={{ transform: `translateX(-${(currentIndex - 1) * 33.33}%)` }}>
                    {testimonials.map((testimonial, index) => {
                        let position = '';
                        if (index === currentIndex) {
                            position = 'highlight';
                        } else if (index === (currentIndex - 1 + testimonials.length) % testimonials.length) {
                            position = 'left';
                        } else if (index === (currentIndex + 1) % testimonials.length) {
                            position = 'right';
                        }
                        return (
                            <div
                                className={`slide ${position}`}
                                key={index}
                            >
                                <div className="profile_card">
                                    <img src={testimonial.image} alt={`Profile ${index + 1}`} className="profile_image" />
                                    {/* <h3>{testimonial.name}</h3>
                                    <p>{testimonial.text}</p> */}
                                </div>
                            </div>
                        );
                    })}
                </div>
              
            </div>

            <div className="navigation">
                    <img src={prev} id="prev" onClick={prevSlide} alt="prev-btn"/>
                    <img src={next} id="next" onClick={nextSlide} alt="next-btn"/>
                </div>

         
        </div>
    );
}

export default SliderComp;