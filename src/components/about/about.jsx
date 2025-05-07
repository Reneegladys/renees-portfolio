import React from 'react';
import './About.css';

const About = () => {
  return (
    <div id="about"> {/* 👈 This is what enables smooth scrolling */}
      <div className='about'>
        <div className="about-title">
          <h1>About me</h1>   
        </div>
        <div className="about-sections">
          <div className="about-left">
            <img src='/aboutmepic.png.jpg' alt='logo'/>
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                My interest in technology was sparked during my time at Securitas Technology, where I was introduced to security systems and technology.
                This experience ignited a passion for tech and problem-solving, and I realized that software development was a field I wanted to pursue.
                To deepen my understanding and skills, I made the decision to go back to school in 2024 to focus on coding and expand my knowledge in software development, web security, and front-end technologies.
              </p>
              <p>
                Since then, I’ve been fully committed to learning and honing my skills in the MERN stack, front-end development, and creating user-friendly, efficient solutions.
                I’m excited to apply my knowledge in real-world projects, collaborate with like-minded professionals, and continue growing in this dynamic and ever-evolving field.
                Technology excites me because it’s always changing, and I’m eager to contribute and make an impact in the digital world.
              </p> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
