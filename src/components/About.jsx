import "/scss/About.scss";
import Lottie from "lottie-react";
import animationData from "/images/Animation.json";

function About() {
  return (
    <div className="container-xl">
      <div className="mt-lg-5 py-3">
        <div className="row mt-5 py-5">
          <div className="col-lg-4">
            <div className="mx-1">
              <div className="row mt-5 py-3">
                <Lottie animationData={animationData} />
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-4">
            <h1 className="title">ABOUT ME</h1>

            <h5 className="bio">
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
    </div>
  );
}

export default About;
