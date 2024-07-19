import "/scss/Skills.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const tools = [
    {
      name: "VS Code",
      image: "/images/vscode.png",
    },
    {
      name: "Git",
      image: "/images/git.png",
    },
    {
      name: "NPM",
      image: "/images/npm.png",
    },
    {
      name: "WordPress",
      image: "/images/wordpress.png",
    },
    {
      name: "Figma",
      image: "/images/figma.png",
    },
  ];

  const backend = [
    {
      name: "Node",
      image: "images/node.png",
    },
    {
      name: "Vite",
      image: "images/Vite.png",
    },
    {
      name: "PHP",
      image: "images/php.png",
    },
    {
      name: "SQL",
      image: "images/SQL.png",
    },
    {
      name: "Python",
      image: "images/python.png",
    },
    {
      name: "MongoDB",
      image: "images/mongodb.png",
    },
    {
      name: "Java",
      image: "images/java.png",
    },
    {
      name: "Express",
      image: "images/express.png",
    },
    {
      name: "XAMPP",
      image: "images/xampp.png",
    },
  ];

  const frontend = [
    {
      name: "JavaScript",
      image: "/images/JavaScript.png",
    },
    {
      name: "React.js",
      image: "/images/react.png",
    },
    {
      name: "Bootstrap",
      image: "/images/BootStrap.png",
    },
    {
      name: "SASS",
      image: "/images/sass.png",
    },
    {
      name: "HTML",
      image: "/images/Html.png",
    },
    {
      name: "CSS",
      image: "/images/css.png",
    },
    {
      name: "Tailwind",
      image: "/images/tailwind.png",
    },
  ];

  return (
    <div className="container-xl py-3 my-5 " id='skills'>
      <div
        className="row mx-lg-5 my-5 mx-3 text-responsive-center"
        data-aos="fade-up"
      >
        <div className="col-12 my-5">
         
          <h1 className="title">MY SKILLS</h1>
          <h3 className="subtitle">Frontend</h3>
          <div>
            {frontend.map((front) => (
              <Frontend name={front.name} image={front.image} />
            ))}
          </div>
          <h3 class="subtitle">Backend</h3>
          {backend.map((back) => (
            <Backend name={back.name} image={back.image} />
          ))}
          <div>
            <h3 class="subtitle">Tools</h3>
            {tools.map((tool) => (
              <Tools name={tool.name} image={tool.image} />
            ))}
          </div>
       
        </div>
      </div>
    </div>
  );
}

function Frontend(props) {
  return (
    <div className="frontend-skills">
      <img src={props.image} className="skill-image mx-lg-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

function Backend(props) {
  return (
    <div className="frontend-skills">
      <img src={props.image} className="skill-image mx-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

function Tools(props) {
  return (
    <div className="frontend-skills">
      <img src={props.image} className="skill-image mx-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

export default Skills;
