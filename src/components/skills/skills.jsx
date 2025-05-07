import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        <div className="skill">
          <i className="devicon-html5-plain"></i>
          <p>HTML</p>
        </div>
        <div className="skill">
          <i className="devicon-css3-plain"></i>
          <p>CSS</p>
        </div>
        <div className="skill">
          <i className="devicon-javascript-plain"></i>
          <p>JavaScript</p>
        </div>
        <div className="skill">
          <i className="devicon-github-plain"></i>
          <p>GitHub</p>
        </div>
        <div className="skill">
          <i className="devicon-nodejs-plain"></i>
          <p>Node.js</p>
        </div>
        <div className="skill">
          <i className="devicon-express-original"></i>
          <p>Express</p>
        </div>
        <div className="skill">
          <i className="devicon-react-original"></i>
          <p>React</p>
        </div>
        <div className="skill">
          <i className="devicon-mongodb-plain"></i>
          <p>MongoDB</p>
        </div>
        <div className="skill">
          <i className="devicon-bash-plain"></i>
          <p>Bash</p>
        </div>
        <div className="skill">
          <i className="devicon-vscode-plain"></i>
          <p>VSCode</p>
        </div>
        <div className="skill">
          <i className="devicon-git-plain"></i>
          <p>Git</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
