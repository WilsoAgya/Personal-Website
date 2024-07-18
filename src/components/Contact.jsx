import "/scss/Contact.scss";
import React,{useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function Contact() {

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Sent");

    emailjs.sendForm('service_2m3sc0b','template_lahv3ya',e.target,'lgxoigna0TcztW0Lx');
  }
    

  return (
    <div className="container-xl overflow-hidden" data-aos='fade'>
      <div className="row mx-4 py-5">
        <h1 className="title">CONTACT</h1>
        <div className=" col-md-8 mb-3 ">
          <h2 className="bio">Let's get in touch!</h2>
        <form method="post" onSubmit={sendEmail}>
          <div className="mb-3">
          
            <input
              type="text"
              name="from_name"
              className="form-control bg-transparent"
              placeholder="Your Name"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
                required
            />
            
          </div>
          <div className="mb-3">
         
            <input
              type="email"
              name="email_from"
              className="form-control bg-transparent"
              placeholder="Your Email"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
                required
            />
            
          </div>
          <div className="mb-3">
         
            <input
              type="text"
              className="form-control bg-transparent"
              name="subject"
              placeholder="Subject"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
                required
            />
          
          </div>
          <div className="mb-3">
          
            <textarea
              className="form-control bg-transparent"
              rows="7"
              name="message"
              placeholder="Your Message"
              style={{  color: "#FFFFFF", 
                borderWidth: "3px", /* Adjust the thickness as needed */
                borderColor: "#FFFFFF", /* Optional: Change the border color to white */
                borderStyle: "solid" /* Ensure the border style is solid */ }}
                required
            ></textarea>
          
          </div>
          <button type="submit" class="btn btn-primary px-5 custom mt-2">
            Submit
          </button>
        </form>
        </div>
        <div className=" col-md-4">
          <h2 className="bio">Coding Music</h2>
          <iframe
            src="https://open.spotify.com/embed/playlist/1YX1PtrlRJ11m3VBPlalPb?utm_source=generator"
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
