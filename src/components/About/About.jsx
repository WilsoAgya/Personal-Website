import "/scss/About.scss";

function About() {
  return (
    <div className="container-xl">
      <div className="mt-5 py-5">
        <div className="row mt-5 py-5">
          <div className="col-lg-4">
            <div className="mx-1">
              <div className="row">
                <iframe
                  src="https://open.spotify.com/embed/playlist/0ZAiwXozWzQle3kHk4HF2j?utm_source=generator"
                  width="100%"
                  height="352"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  allowFullScreen
                  className="mt-5"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5">
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
