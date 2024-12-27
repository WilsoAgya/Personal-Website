import "/scss/About.scss";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profilepic2 from "/images/profilepic2.jpg";

function About() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="container-xl overflow-hidden" id="about">
      <div className="row mx-lg-5 mx-4 my-md-3  my-4 py-4 " data-aos="fade-up">
        <h1 className="title text-responsive-center">ABOUT ME</h1>
        <div className="col-12 col-lg-8 col-md-7 order-2 order-md-1 ">
          <h5 className="bio text-responsive-center mx-auto">
            I'm currently a fourth-year Computer Science student studying at{" "}
            <span className="university-name">
              The University of the Fraser Valley
            </span>
            , with a concentration in Software Development. I love engaging in
            challenges and learning new skills through the use of code. I have
            created this website to showcase my skills and the projects that I
            have finished or have been working on recently. If you wish to speak
            to learn more about me and what I do, feel free to send a message!
          </h5>
        </div>
        <div className="col-12 col-lg-4 col-md-5 order-1 order-md-2 mx-auto  my-4 my-md-0">
          <img src={profilepic2} className="profilepic w-100" />
        </div>
      </div>
    </div>
  );
}

export default About;
