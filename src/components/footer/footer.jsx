import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <p>My MERN journey started with pure curiosity—one line of code turned into a passion for building full-stack experiences. Now,
                         I turn ideas into reality, one commit at a time. Whether it's crafting seamless user interfaces or structuring solid backends, I love bringing everything together to create something meaningful.
                         This is just the beginning, and I’m excited for what’s next!</p>
                </div>
                <div className="footer-top-right">
                    <a href="https://www.linkedin.com/in/reneegladys">
                        <FaLinkedin className="social-icon linkedin" />
                    </a>
                    <a href="https://github.com/reneegladys">
                        <FaGithub className="social-icon github" />
                    </a>
                    <a href="renee16@live.se">
                        <FaEnvelope className="social-icon email" />
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
