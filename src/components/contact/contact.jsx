import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xpwyoeww", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        e.target.reset();
        setStatus("success");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-section">
        <div className="contact-title">
          <h1>Get in touch</h1>
          <p>
            Let’s connect! Whether you have a project idea, a question, or just
            want to chat about tech and life, I’d love to hear from you.
            Don’t hesitate—drop me a message, and let’s build something great
            together!
          </p>
        </div>

        <form className="contact-right" onSubmit={sendEmail}>
          <label>Your name</label>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            required
          />

          <label>Your email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />

          <label>Write your message here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button
            type="submit"
            className="contact-submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending..." : "Submit now"}
          </button>

          {/* ✅ Popup messages for UX */}
          {status === "success" && (
            <p className="contact-popup success">✅ Thank you for your message!</p>
          )}
          {status === "error" && (
            <p className="contact-popup error">
              ❌ Failed to send. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
