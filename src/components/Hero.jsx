import "/scss/Hero.scss";
import profilepic from "/images/profilepic.jpg";
import linkedinlogo from "/images/linkedinlogo.png";
import email from "/images/email.png";
import githublogo from "/images/githublogo.png";

function Hero() {
  return (
    <div>
      <header>
        <div className="container-xl">
          <div className="row mt-md-2 py-lg-4 px-4">
            <div className="col-lg-12 col-md-12">
              <div className="mt-lg-5 py-4">
                <div className="row">
                  <div className="col-md-6">
                    <div class="text-responsive-center text-responsive-md-center">
                      <h1 className="col-md-12 text-responsive-center">
                        Nice to Meet You, I'm
                      </h1>
                      <h1 className="intro text-responsive-center">
                        <span className="greeting col-md-10">
                          Wilson Agyapong
                        </span>
                      </h1>
                      <h5 className="col-lg-12 mt-3 mt-md-5 desc text-responsive-center">
                        A Computer Science student and full stack
                        developer based in British Columbia, Canada with an
                        eagerness to strengthen my knowledge in software
                        development. I create web applications with the sole
                        intent of providing a pleasing digital experience for
                        clients.
                      </h5>
                      <div class="mt-lg-3">
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
                        <img
                          src={email}
                          alt="logo for github"
                          class="linkedin"
                        ></img>
                        <div>
                          <button
                            type="button"
                            class="btn btn-lg btn-primary px-5 mt-4 btn-purple-gradient"
                          >
                            Resume
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 order-first order-md-last d-flex justify-content-center align-items-center">
                    <img
                      src={profilepic}
                      alt="Profile Picture"
                      className="profilepic"
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;
