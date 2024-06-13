import "/scss/Projects.scss";

function Projects() {

  const ProjectList =[
    { image:"images/pokeguess.png",
      name:'PokeGuess',
      tags:["React.js","RestAPI","Git"],
      description:'PokeGuess is a game where players guess what the mystery Pokemon is based on given clues.',
    },
    {
      name:'Travel List',
      tags:["React.js"],
      description: 'A web-application made for keeping track of items that you are wanting to bring on a trip. This was made using React-JS'
    },
    {
    image:"images/website.png",
    name:'Portfolio',
    tags:["React.js","SASS","Bootstrap","Git"],
      description: 'This web-application was designed to showcase my skills as a programmer. This website was made using BootStrap 5 and React-JS'
    }
  ]

    return(
  <div className="container-xl">
    <div className="row my-5 mx-lg-5 py-5">
    <div class="row">
    <h1 className="title">PROJECTS</h1>
      {ProjectList.map((project) => <Cards name={project.name} tags={project.tags} image={project.image} description={project.description}>
      </Cards>)}
    </div>
    </div>
  </div>
    )
}

function Cards(props){

  return(
  
  <div className="col-lg">
    <div className="card card-styles">
      <img src ={props.image} alt={props.name} className="img-style"/>
      <h4 className="card-header">{props.name}</h4>
      <div className="tags">
        {props.tags.map((tag) => (
          <div className="tag">{tag}</div>
        ))}
      </div>
      <div className="card-body">
        <h6 className="card-desc">{props.description}</h6>
      </div>
    </div>
  </div>
  

  );

}

export default Projects;