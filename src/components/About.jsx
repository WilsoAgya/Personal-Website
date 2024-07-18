import "/scss/About.scss";
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-xl overflow-hidden" >
      <div className="row mx-lg-5 mx-4 my-lg-5 my-md-3  my-5" data-aos='fade-up'>
        <h1 className="title text-responsive-center">ABOUT ME</h1>
        <div className="col-12 col-lg-8 col-md-7 order-2 order-md-1 ">
          <h5 className="bio text-responsive-center mx-auto">
            I'm currently a third-year Computer Science student studying at the
            University of the Fraser Valley, with a concentration in Software
            Development. I love engaging in challenges and learning new skills
            through the use of code. I made my first real embark to the realm of
            programming in 2021, when I attempted to build my own fandom website
            for a show I liked, and ever since then I have been hooked on the
            idea of being a full-stack software developer. If you wish to speak
            to learn more about me and what I do, feel free to send me a
            message!
          </h5>
        </div>
        <div className="col-12 col-lg-4 col-md-5 order-1 order-md-2 mx-auto  my-4 my-md-0">
          <img src="images/profilepic2.jpg" className="profilepic w-100" />
        </div>
      </div>
    </div>
  );
}

export default About;
