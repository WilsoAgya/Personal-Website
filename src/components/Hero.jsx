import "/scss/Hero.scss";
import linkedinlogo from "/images/linkedinlogo.png";
import email from "/images/email.png";
import profilepic from "/images/profilepic.png";
import githublogo from "/images/githublogo.png";

function Hero() {
  return (
    <header>
      <div className="container-xl display-hero d-flex align-items-center min-vh-100">
        <div className="row mx-xl-5 mx-md-5 w-100 mb-5">
          <div className="col-md-7 d-flex flex-column justify-content-center order-last order-md-first text-center text-md-start mb-5">
            <h1 className="col-md-12 text-responsive-center-hero">
              Nice to Meet You, I'm
            </h1>
            <h1 className="intro text-responsive-center-hero">
              <span className="greeting">Wilson Agyapong</span>
            </h1>
            <h5 className="col-lg-12 mt-3 mt-md-5 desc text-responsive-center-hero">
              A Computer Science student and aspiring full stack developer based
              in British Columbia, Canada. I create web applications with the
              sole intent of providing a pleasing digital experience for
              clients.
            </h5>
            <div className="mt-5">
              <img
                src={linkedinlogo}
                alt="logo for linkedin"
                class="linkedin text-responsive-center"
              ></img>
              <img
                src={githublogo}
                alt="logo for github"
                class="linkedin mx-3 text-responsive-center"
              ></img>
              <img src={email} alt="logo for github" class="linkedin"></img>
            </div>
            <div class="mt-2">
              <button
                type="button"
                class="btn btn-lg btn-primary px-5 custom mt-2"
              >
                Resume
              </button>
            </div>
          </div>

          <div className="col-lg-5 col-md-5 mt-lg-3 order-first order-md-last">
            <img src={profilepic} className="heropic"></img>
          </div>
        </div>
      </div>

      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
      <div className="cube"></div>
    </header>
  );
}

export default Hero;
