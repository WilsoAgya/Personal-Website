import "/scss/Skills.scss";

function Skills() {
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
    <div className="container-xl">
      <div className="row mt-lg-2 mt-5 py-5 py-lg-2 px-4">
        <div>
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
      <img src={props.image} width="50px" height="50px" className="mx-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

function Backend(props) {
  return (
    <div className="frontend-skills">
      <img src={props.image} width="50px" height="50px" className="mx-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

function Tools(props) {
  return (
    <div className="frontend-skills">
      <img src={props.image} width="50px" height="50px" className="mx-2" />
      <h4 className="skill-name px-3 py-3">{props.name}</h4>
    </div>
  );
}

export default Skills;
