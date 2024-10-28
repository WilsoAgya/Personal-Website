import "/scss/Projects.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import pokeguess from "/images/pokeguess.png";
import Isstrackerimg from "/images/Isstrackerimg.jpg";
import portfolio from "/images/website.png";
import utukufupic from "/images/utukufupic.jpg";
import pomodoro from "/images/pomodoro.jpg";

function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const ProjectList = [
    {
      image: pokeguess,
      name: "PokeGuess",
      tags: ["React.js", "RestAPI", "Git"],
      description:
        "PokeGuess is a game where players guess what the mystery Pokemon is based on given clues.",
      website: "https://github.com/AidenCarelse/pokeguess",
    },
    {
      image: utukufupic,
      name: "Utukufu Gospel Ministries",
      tags: ["React.js", "MongoDB", "TailwindCSS", "ExpressJS", "Git"],
      description:
        "The official website for Utukufu Gospel Ministries, highlighting service times, ministries, and key details. Project files are private, but feel free to reach out for more information.",
      website: "https://github.com/WilsoAgya/utukufu-gospel",
    },
    {
      image: portfolio,
      name: "Portfolio",
      tags: ["React.js", "SASS", "Bootstrap", "Git"],
      description:
        "This web-application was designed to showcase my skills as a programmer. This website was made using BootStrap 5 and React-JS",
      website: "https://github.com/WilsoAgya/Personal-Website",
    },
    {
      image: Isstrackerimg,
      name: "ISS Tracker",
      tags: ["React.js", "RestAPI", "Bootstrap"],
      description:
        "The ISS Tracker is a dynamic web app built during SFU Fall Hacks 2024 to track the International Space Station's location on an interactive map. It displays live data like speed, altitude, and upcoming passes over SFU.",
      website: "https://github.com/WilsoAgya/iss-tracker",
    },
    {
      image: pomodoro,
      name: "Pomodoro Timer",
      tags: ["Java", "Git", "Java Swing"],
      description:
        "A study timer for students or contributors using the Pomodoro productivity method. This Java GUI let's users set an amount of study time and break time, also included with a to-do list. ",
      website:
        "https://github.com/AidenCarelse/Fall-Hacks-2022?tab=readme-ov-file",
    },
  ];

  return (
    <div className="container-xl" data-aos="fade-up" id="projects">
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
    <div className="col-lg-4" data-aos="fade-up">
      <a
        href={props.website}
        target="_blank"
        rel="noopener noreferrer"
        className="card-link"
      >
        <div className="card card-styles ">
          <img src={props.image} alt={props.name} className="img-style" />
          <h4 className="card-header">{props.name}</h4>
          <div className="tags">
            {props.tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
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
