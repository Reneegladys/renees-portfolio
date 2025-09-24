import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_f00o2iu",    // <-- your EmailJS service ID
      "template_ti26eso",   // <-- your EmailJS template ID
      form.current,
      "Wl404LgHV4-QroiNQ"  // <-- your EmailJS public key
    )
    .then(
      (result) => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-section">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <p>
            Let’s connect! Whether you have a project idea, a question, or just want to chat about tech and life, I’d love to hear from you.
            Don’t hesitate—drop me a message, and let’s build something great together!
          </p>
        </div>
        <form className="contact-right" ref={form} onSubmit={sendEmail}>
          <label>Your name</label>
          <input type="text" placeholder="Enter your name" name="name" required />
          <label>Your email</label>
          <input type="email" placeholder="Enter your email" name="email" required />
          <label>Write your message here</label>
          <textarea name="message" rows="8" placeholder="Enter your message" required></textarea>
          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;