import React from "react";
import "/scss/App.scss";
import Hero from "./Hero.jsx";
import Nav from "./Nav.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Contact from "./Contact.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <div className="stable_bg">
          <Nav />
          <Hero />
        </div>
        <div className="gradient_bg">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
