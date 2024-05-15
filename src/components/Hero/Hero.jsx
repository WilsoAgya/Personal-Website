import "/scss/Hero.scss";
import profilepic from "/images/profilepic.jpg";

function Hero(){
    return(
    <header>
        <div className="container-xl">
            <div className="row">
                <div className="col-lg-12 col-md-12">
                    <div className="mb-5 px-4 py-5 mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div>
                                    <h1 className="greeting intro col-md-12">Nice to Meet You!</h1>
                                    <h1 className="intro">I'm <span className="underline col-md-10">Wilson Agyapong</span></h1>
                                    <h4 className="col-lg-12 mt-5">An aspiring third-year Computer Science student and aspiring full stack developer based in British Columbia, Canada. 
                                        Passionate for anything tech-related.</h4>
                                </div>
                            </div>
                            <div className=" col-lg-6 col-md-6 d-flex justify-content-center align-items-center">
                                <img src={profilepic} alt="Profile Picture" className="profilepic"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}


export default Hero;