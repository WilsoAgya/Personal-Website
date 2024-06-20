import "/scss/Contact.scss";
import React from "react";

function Contact() {
  return (
    <div className="container-xl">
      <div className="row mx-4 py-2">
        <h1 className="title">CONTACT</h1>
        <div className=" col-md-8 mb-3 ">
          <h2 className="bio">Let's get in touch!</h2>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent"
              placeholder="Your Name"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control bg-transparent"
              placeholder="Your Email"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control bg-transparent"
              placeholder="Subject"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control bg-transparent"
              rows="7"
              placeholder="Your Message"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
            ></textarea>
          </div>
          <button type="button" class="btn btn-primary px-5 custom mt-2">
            Submit
          </button>
        </div>
        <div className=" col-md-4">
          <h2 className="bio">Coding Music</h2>
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
    </div>
  );
}

export default Contact;
