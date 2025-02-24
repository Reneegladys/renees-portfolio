import React from 'react';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-section">
                <div className="contact-title">
                    <h1>Get in touch</h1>
                    <p>Let’s connect! Whether you have a project idea, a question, or just want to chat about tech and life, I’d love to hear from you.
                         Don’t hesitate—drop me a message, and let’s build something great together!</p>
                </div>
                <form className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder="Enter your name" name="name"></input>
                    <label htmlFor="">Your email</label>
                    <input type="email" placeholder="Enter your email" name="email"></input>
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder="Enter your message"></textarea>
                    <button type="submit" className="contact-submit">Submit now</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
