import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/hero/hero";
import About from "./components/about/about";
import Projects from "./components/projects/projects"
import Contact from "./components/contact/contact"


const App = () => {

return (
  <div>
<Navbar/>
<Hero/>
<About/>
<Projects/>
<Contact/>


  </div>
)
}

export default App