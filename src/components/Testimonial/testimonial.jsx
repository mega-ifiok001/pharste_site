import React from "react";
import "./testimonial.css";
import profile_1 from '../../asset/profile1.png';
import profile_2 from '../../asset/profile2.png';
import profile_3 from '../../asset/profile3.png';
import fatima from '../../asset/fatima.jpg';
import ahmed from '../../asset/ahmed.jpg';
import Abiola from '../../asset/abiola.jpg';
import Kingsley from '../../asset/kingsley.jpg';
import ada from '../../asset/ada.jpg';
import musa from '../../asset/musa.jpg';
import esther from '../../asset/esther.jpg';
import david from '../../asset/dadvid.jpg';

const Testimonial = () => {
  const testimonials = [
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Seamless and easy to use!",
      text: "I was amazed at how easy it was to send money home with Pharste. The app is so user-friendly, and the entire process took just a few minutes. My parents in Abuja were thrilled to receive the funds so quickly.",
      author: "Fatima A., London",
      profile: fatima,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Great exchange rates and no hidden fees!",
      text: "Pharste offers the best exchange rates I’ve seen, and I didn’t have to worry about hidden fees. What you see is what you get, and that’s a huge relief. I trust Pharste with all my transfers.",
      author: "Ahmed K., Toronto",
      profile: ahmed,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Perfect for families!",
      text: "Using Pharste has made supporting my family back home so much easier. The app is reliable, and the customer support team is always there to help when needed. I can’t recommend it enough!",
      author: "Abiola S., New York",
      profile: Abiola,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Fast, secure, and transparent!",
      text: "What sets Pharste apart for me is the transparency. I always know exactly how much my family will receive, and the app keeps me updated every step of the way. It’s incredibly fast too!",
      author: "Kingsley M., Ottawa",
      profile: Kingsley,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "A lifesaver for emergencies!",
      text: "Pharste came through for me during an emergency. I was able to send money to my sister in Lagos immediately, and she received it within minutes. This app is a lifesaver!",
      author: "Ada E., Porthacourt",
      profile: ada,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Highly recommended for expats!",
      text: "As an expat, Pharste has been a game-changer for me. It’s incredibly convenient, and I love how the app caters to our unique needs. I’ve recommended it to all my friends!",
      author: "Musa T., Berlin",
      profile: musa,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Reliable and efficient!",
      text: "I’ve been using Pharste for months, and I’ve never had an issue. The transfers are always quick, and the app is super reliable. It has made my life so much easier.",
      author: "Esther O., Lagos",
      profile: esther,
    },
    {
      stars: "⭐️⭐️⭐️⭐️⭐️",
      title: "Best app for cross-border transfers!",
      text: "I’ve tried other platforms, but Pharste is by far the best for cross-border money transfers. The process is straightforward, and the app is incredibly secure. I’m a loyal customer now!",
      author: "David N., calgary",
      profile: david,
    },
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
  {[0, 1, 2].map((col) => (
    <div className="testimonial-container" key={col}>
      <div className="testimonial-content">
        {testimonials
          .slice(col * Math.ceil(testimonials.length / 3), (col + 1) * Math.ceil(testimonials.length / 3))
          .map((testimonial, index) => (
            <div className="testimonial-item" key={index}>
              <div className="testimonial_header">
                {/* <img src={testimonial.profile} alt={testimonial.author} /> */}
                <div className="profile_tag">
                  <h2>{testimonial.author}</h2>
                  <p>{testimonial.title}</p>
                </div>
              </div>
              <div>{testimonial.stars}</div>
              {testimonial.text}
            </div>
          ))}
      </div>
    </div>
  ))}
</div>

  </>
  );
};

export default Testimonial;