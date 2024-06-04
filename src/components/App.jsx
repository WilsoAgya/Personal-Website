import React from "react";
import "/scss/App.scss";
import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="gradient_bg"></div>
      <div className="content">
        <Nav />
        <Hero />
        <About />
        <Skills />
        
        
      </div>
    </div>
  );

}

export default App;
