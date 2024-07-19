import "/scss/Projects.scss";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pokeguess from "/images/pokeguess.png";
import review from "/images/reView.png";
import portfolio from "/images/website.png";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const ProjectList = [
    {
      image: pokeguess,
      name: 'PokeGuess',
      tags: ["React.js", "RestAPI", "Git"],
      description: 'PokeGuess is a game where players guess what the mystery Pokemon is based on given clues.',
      website: "https://github.com/AidenCarelse/pokeguess"
    },
    {
      image: review,
      name: 'reView',
      tags: ["React.js", "MongoDB", "NodeJS", "ExpressJS", "TailwindCSS"],
      description: 'A website where users can review their favourite movies and TV shows. This project is currently still in development.',
      website: "https://github.com/WilsoAgya/reView"
    },
    {
      image: portfolio,
      name: 'Portfolio',
      tags: ["React.js", "SASS", "Bootstrap", "Git"],
      description: 'This web-application was designed to showcase my skills as a programmer. This website was made using BootStrap 5 and React-JS',
      website: "https://github.com/WilsoAgya/Personal-Website"
    }
  ];

  return (
    <div className="container-xl" data-aos='fade-up' id='projects'>
      <div className="row my-5 mx-lg-3 mx-md-auto d-flex justify-content-center">
        <div className="row">
          <h1 className="title text-responsive-center">PROJECTS</h1>
          {ProjectList.map((project) => (
            <Cards
              key={project.name}
              name={project.name}
              tags={project.tags}
              image={project.image}
              description={project.description}
              website={project.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function Cards(props) {
  return (
    <div className="col-lg" data-aos='fade-up'>
      <a href={props.website} target="_blank" rel="noopener noreferrer" className="card-link">
        <div className="card card-styles">
          <img src={props.image} alt={props.name} className="img-style" />
          <h4 className="card-header">{props.name}</h4>
          <div className="tags">
            {props.tags.map((tag) => (
              <div className="tag" key={tag}>{tag}</div>
            ))}
          </div>
          <div className="card-body">
            <h6 className="card-desc">{props.description}</h6>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Projects;
