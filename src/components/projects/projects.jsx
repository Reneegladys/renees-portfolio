import React from 'react';
import './projects.css';

const projectList = [
  {
    name: 'Chatify',
    url: 'https://reneeschatify.netlify.app/Home',
    img: '/images/chatify.png', // optional screenshot saved in public/images
    description: 'A chat application built with React and Firebase.'
  },
  {
    name: 'Portfolio',
    url: 'https://reneegladysportfolio.netlify.app/',
    img: '/images/portfolio.png',
    description: 'My personal portfolio website showcasing my work.'
  },
  {
    name: 'Webshopifyy',
    url: 'https://webshopifyy.netlify.app/',
    img: '/images/webshopifyy.png',
    description: 'An e-commerce store built with React and Node.js.'
  }
];

const Projects = () => {
  return (
    <div id="projects" className="mywork">
      <div className="mywork-title">
        <h1>My Projects</h1>
      </div>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            {project.img && (
              <img src={project.img} alt={project.name} className="project-img" />
            )}
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
