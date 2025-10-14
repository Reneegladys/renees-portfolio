import React from 'react';
import './footer.css';
<<<<<<< HEAD
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
=======
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
>>>>>>> 2e1a6817b62218817da7df1b7ba2a57579185f22

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>I’m a frontend developer passionate about crafting seamless and engaging user interfaces.
                        Aspiring to become a full-stack developer, I love exploring both frontend and backend technologies to turn ideas into functional and meaningful web applications.
                        Every project is an opportunity to grow, learn, and create digital experiences that leave an impact.</p>
                </div>
                <div className="footer-top-right">
                    <a href="https://www.linkedin.com/in/reneegladys">
                        <FaLinkedin className="social-icon linkedin" />
                    </a>
                    <a href="https://github.com/reneegladys">
                        <FaGithub className="social-icon github" />
                    </a>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">© 2025 Renée Gladys. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
