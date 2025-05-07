import React from 'react';
import { Link } from 'react-scroll'; // import Link from react-scroll
import './home.css';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src='/myself.jpg' alt='Renée Gladys' />
      <h1><span>Hi, I'm Renée Gladys.</span></h1>
      <p>
        Aspiring MERN stack developer with a strong foundation in MongoDB, Express, React, Node.js, JavaScript, HTML/CSS, agile development, testing, software packaging, deployment, and web security. I’m eager to apply my knowledge to real-world projects.
        <br /><br />
        I’m a problem solver who thrives in collaborative environments and takes initiative to drive results. Clear communication, teamwork, and continuous learning are at the core of my approach.
        <br /><br />
        I'm passionate about building user-friendly, efficient solutions and am excited to contribute to innovative projects. I believe my technical skills, dedication, and drive make me a valuable asset to any team. Let’s create something great together!
      </p>
      
      <div className='hero-action'>
        {/* Updated button to use Link from react-scroll */}
        <Link to="contact" smooth={true} duration={500}>
          <button className='hero-button-connect'>
            Connect with me
          </button>
        </Link>

        <a href='/cv-reneegladys-eng1.pdf' download className='hero-button-resume'>
          Resume (English)
        </a>

        <a href='/cv-reneegladys-sve1.pdf' download className='hero-button-resume'>
          Resume (Swedish)
        </a>
      </div>
    </div>
  );
};

export default Hero;
