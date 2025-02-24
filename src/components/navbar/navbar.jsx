import React from "react";
import './navbar.css';

const Navbar = () => {

return (
  <div className = 'navbar'>
<h1 className="nav-logo">Renée Gladys</h1>
<ul className= 'nav-menu'>
<li>Home</li>
<li>About me</li>
<li>Projects</li>
<li>Resume</li>
<li>Contact</li>
</ul>

<div className='nav-connect'>Connect with me</div>

  </div>
)
}

export default Navbar