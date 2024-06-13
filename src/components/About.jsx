import "/scss/About.scss";
import animationData from "/images/Animation.json";
import Lottie from "lottie-react";

function About() {
  return (
    <div className="container overflow-hidden">
      <div className="row py-lg-auto my-5  mx-lg-5">
        <div className="col-lg-3 d-flex justify-content-center ">
          <img src = "/images/wilson.png" 
            width="200px"
            
             
          />
        </div>
        <div className="col">
          <h1 className="title text-responsive-center">
            ABOUT ME
          </h1>
          <h5 className="bio text-responsive-center mx-auto">
            I'm currently a third year Computer Science student studying at
            the University of the Fraser Valley, with a concentration in
            Software Development. I love engaging in challenges and learning
            new skills through the use of code. I made my first real embark to
            the realm of programming in 2021, when I attempted to build my own
            fandom website for a show I liked, and ever since then I have been
            hooked on the idea of being a full-stack software developer. If
            you wish to speak to learn more about me and what I do, feel free
            to send a me a message!
          </h5>
        </div>
      </div>
    </div>
  );
}

export default About;