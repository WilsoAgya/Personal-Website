import "/scss/About.scss";

function About(){

    return (
        <div className="mt-5 py-5 px-5">
            <div className="row">
            <h1 className="title">ABOUT ME</h1>
                <div className="col-lg-4">
                    <div class="mx-5">
                    <iframe
                        src="https://open.spotify.com/embed/playlist/0ZAiwXozWzQle3kHk4HF2j?utm_source=generator"
                        width="100%"
                        height="352"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                    </div>  
                </div>
                <div className="col-lg-8">
                    <h5 className="bio">
                        I'm currently a third year Computer Science student studying at the University of the Fraser Valley, with a concentration in Software Development. 
                        I love engaging in challenges and learning new skills through the use of code. I made my first real embark to the realm of programming in 2021, when I attempted to build my own fandom website for a show I liked, 
                        and ever since then I have been hooked on the idea of being a full-stack software developer. If you wish to speak to learn more about me and what I do, feel free to send a me a message!
                    </h5>  
                </div>
            </div>
        </div>
    );
}

export default About;