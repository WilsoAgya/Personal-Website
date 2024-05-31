import "/scss/Hero.scss";
import linkedinlogo from "/images/linkedinlogo.png";
import email from "/images/email.png";
import Lottie from "lottie-react";
import animationData from "/images/Animation.json";
import githublogo from "/images/githublogo.png";

function Hero() {
  return (
    <div>
      <header>
        <div className="container-xl display-hero">
          <div className="row mt-lg-5 py-auto px-4">
            <div className="col-lg-7 col-md-7">
              <div className="mt-lg-5 py-lg-5">    
                    <div class="text-responsive-center text-responsive-md-center">
                      <h1 className="text-responsive-center">
                        Nice to Meet You, I'm
                      </h1>
                      <h1 className="intro text-responsive-center">
                        <span className="greeting">
                          Wilson Agyapong
                        </span>
                      </h1>                
                      <h5 className="mt-3 mt-md-5 desc text-responsive-center">
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
               
              </div>
              <div className="col-lg-4 mx-3 order-first order-sm-last">
              <Lottie animationData={animationData} />
                      </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Hero;