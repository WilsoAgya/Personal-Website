import "/scss/Skills.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import vscode from "/images/vscode.png";
import git from "/images/git.png";
import npm from "/images/npm.png";
import wordpress from "/images/wordpress.png";
import figma from "/images/figma.png";
import node from "/images/node.png";
import vite from "/images/Vite.png";
import php from "/images/php.png";
import sql from "/images/SQL.png";
import python from "/images/python.png";
import mongodb from "/images/mongodb.png";
import java from "/images/java.png";
import express from "/images/express.png";
import xampp from "/images/xampp.png";
import javascript from "/images/JavaScript.png";
import react from "/images/react.png";
import bootstrap from "/images/BootStrap.png";
import sass from "/images/sass.png";
import html from "/images/Html.png";
import css from "/images/css.png";
import tailwind from "/images/tailwind.png";

function Skills() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const tools = [
    { name: "VS Code", image: vscode },
    { name: "Git", image: git },
    { name: "NPM", image: npm },
    { name: "WordPress", image: wordpress },
    { name: "Figma", image: figma },
  ];

  const backend = [
    { name: "Node", image: node },

    { name: "PHP", image: php },
    { name: "SQL", image: sql },
    { name: "Python", image: python },
    { name: "MongoDB", image: mongodb },
    { name: "Java", image: java },
    { name: "Express", image: express },
    { name: "XAMPP", image: xampp },
  ];

  const frontend = [
    { name: "JavaScript", image: javascript },
    { name: "React.js", image: react },
    { name: "Vite", image: vite },
    { name: "Bootstrap", image: bootstrap },
    { name: "SASS", image: sass },
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Tailwind", image: tailwind },
  ];

  return (
    <div className="container-xl py-3 my-5 " id="skills">
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
          <h3 className="subtitle">Backend</h3>
          {backend.map((back) => (
            <Backend name={back.name} image={back.image} />
          ))}
          <div>
            <h3 className="subtitle">Tools</h3>
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
