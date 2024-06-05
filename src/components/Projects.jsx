import "/scss/Projects.scss";

function Projects() {

  const ProjectList =[
    { image:"images/pokeguess.png",
      name:'PokeGuess',
      description:'Inspired by websites such as Wordle and MLB Pickle, PokeGuess lets users compete amongst themselves to see how quickly they can figure out the mystery Pokémon from an increasingly large database. The aim of the game is to guess the Pokémon in the fewest amount of tries possible. Each time a guess is made, more information is made available to the player.',
    },
    {
      name:'Travel List',
      description: 'A web-application made for keeping track of items that you are wanting to bring on a trip. This was made using React-JS'
    },
    {
    name:'Portfolio',
      description: 'This web-application was designed to showcase my skills and accomplishments as a programmer. This website was made using BootStrap 5 and React-JS'
    }
  ]

    return(
  <div className="container-xl">
    <div className="row my-5 py-5 py-lg-5 px-4 align-items-center justify-content-center">
    <h1 className="title">PROJECTS</h1>
    <div class="row">
      {ProjectList.map((project) => <Cards name={project.name} image={project.image} description={project.description}>
      </Cards>)}
    </div>
    </div>
  </div>
    )
}

function Cards(props){

  return(
  
  <div className="col-4">
    <div className="card border-0">
      <img src ={props.image} alt={props.name}/>
      <div className="card-body text-center">
        <h6>{props.description}</h6>
      </div>
    </div>
  </div>
  

  );

}

export default Projects;