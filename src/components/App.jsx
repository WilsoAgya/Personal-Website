import React from 'react';
import "/scss/App.scss";
import Hero from './Hero/Hero.jsx'
import Nav from './Nav/Nav.jsx'
import About from './About/About.jsx'



function App() {
  

    return(
        <div className="app-container">
        <div className="gradient_bg"></div>
        <div className="content">
            <Nav />
            <Hero />
            <About />
        </div>
    </div>
    )

 
}

export default App;
