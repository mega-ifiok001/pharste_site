import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import './newsletter.css';
const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false); // No success
      return;
    }

    const templateParams = {
      user_email: email,
      subscription_type: "Newsletter Subscription",
      subscription_time: new Date().toLocaleString(),
    };

    emailjs
      .send("service_pn476lb", "template_slni2qb", templateParams, "qmHvOk5OU1pq_8a3A")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Thank you for subscribing!");
          setEmail(""); // Clear email input
          setIsSuccess(true); // Mark success
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Failed to send email. Please try again.");
          setIsSuccess(false); // No success
        }
      );
  };

  return (
    <div>
      <form onSubmit={sendEmail} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ position: "relative" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setIsSuccess(false); // Reset success state on input change
            }}
            required
            style={{
              paddingRight: isSuccess ? "40px" : "10px", // Adjust space for success image
            }}
          />
          {isSuccess && (
            <img
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
              alt="Success"
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                width: "24px",
                height: "24px",
              }}
            />
          )}
        </div>
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default NewsletterForm;