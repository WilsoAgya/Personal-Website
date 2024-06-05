import "/scss/Hero.scss";
import linkedinlogo from "/images/linkedinlogo.png";
import email from "/images/email.png";
import profilepic from "/images/profilepic.jpg";
import githublogo from "/images/githublogo.png";


function Hero(){
    return(
    <header>
        <div className="container-xl display-hero">
            <div className="row">               
                    <div className="py-lg-5 mt-5">
                        <div className="row px-lg-5">
                            <div className="col-md-6">
                                <div class="text-responsive-center text-responsive-md-center">
                                    <h1 className="col-md-12 text-responsive-center">Nice to Meet You, I'm</h1>
                                    <h1 className="intro text-responsive-center"><span className="greeting col-md-10">Wilson Agyapong</span></h1>
                                    <h5 className="col-lg-12 mt-3 mt-md-5 desc text-responsive-center">A third-year Computer Science student and aspiring full stack developer based in British Columbia, Canada. 
                                        Passionate for solving problems through tech.</h5>
                                    <div className="mt-5">
                                    <img src ={linkedinlogo} alt="logo for linkedin" class="linkedin text-responsive-center"></img>
                                    <img src={githublogo} alt="logo for github" class="linkedin mx-3 text-responsive-center"></img>
                                    <img src={email} alt="logo for github" class="linkedin"></img>
                                    </div>
                                    <div class="mt-2">
                                    <button type="button" class="btn btn-lg btn-primary px-5 btn-purple-gradient">Resume</button>
                                    </div>
                                </div>
                            </div>
                           
                            <div className="col-lg-6 col-md-6 mt-lg-3 order-first order-md-last">
                                <div className="profilepic"></div>
                           
                            </div>
                        </div>
                       
                    </div>
                   
                    </div>
                    </div>


     
    
    </header>
  );
}

export default Hero;
