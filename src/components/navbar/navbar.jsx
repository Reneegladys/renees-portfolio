import React from "react";
import { Link } from "react-scroll";
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className="nav-logo">Renée Gladys</h1>
      <ul className='nav-menu'>
        <li>
          <Link to="home" smooth={true} duration={500} offset={-70}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} offset={-70}>
            About me
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500} offset={-70}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} offset={-70}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} offset={-70}>
            Contact
          </Link>
        </li>
      </ul>

      <Link
        to="contact"
        smooth={true}
        duration={500}
        offset={-70}
        className="nav-connect-btn"
      >
        Connect with me
      </Link>
    </div>
  );
};

export default Navbar;
