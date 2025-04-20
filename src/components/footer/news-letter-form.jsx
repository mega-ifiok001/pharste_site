import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent form submission

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: email, // The email entered by the user
    };

    // Replace these placeholders with actual values from your EmailJS account
    emailjs
      .send("service_pn476lb", "template_slni2qb", templateParams, "qmHvOk5OU1pq_8a3A")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Thank you for subscribing!");
          setEmail(""); // Clear the input
        },
        (error) => {
          console.log("FAILED...", error);
          setMessage("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div>
      <form onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state as the user types
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {message && <p>{message}</p>} {/* Display message if it exists */}
    </div>
  );
};

export default NewsletterForm;