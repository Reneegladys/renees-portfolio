import React from "react";
import './hero.css';



const Hero = () => {

return (
  <div className='hero'>
<img src='/myself.jpg' alt='logo'/>
<h1><span>Hi, i'm Renée Gladys.</span></h1>
    <p>Aspiring MERNstack developer with a strong foundation in MongoDB, Express, React, Node.js, JavaScript, HTML/CSS, agile development, testing, software packaging, deployment, and web security, I’m eager to apply my knowledge to real-world projects.
I’m a problem solver who thrives in collaborative environments and takes initiative to drive results. Clear communication, teamwork, and continuous learning are at the core of my approach. 
I'm passionate about building user-friendly, efficient solutions and am excited to contribute to innovative projects.
I believe my technical skills, dedication, and drive make me a valuable asset to any team. Let’s create something great together!</p>
    <div className='hero-action'>
        <div className='hero-connect'>Connect with me</div>
        <div className='hero-resume'>My resume</div>
        </div> 
  </div>
)
}

export default Hero