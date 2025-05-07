// src/App.js
import React from "react";
import { BrowserRouter } from "react-router-dom"; 
import "./index.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";
import Contact from "./components/contact/contact";
import Navbar from "./components/navbar/Navbar"; 
import Footer from "./components/footer/Footer"; 

const App = () => {
  return (
      <BrowserRouter>
    
      <Navbar/>
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
      </BrowserRouter>
  );
};

export default App;
