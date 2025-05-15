import React from 'react';
import './App.css';
import 'remixicon/fonts/remixicon.css';

function App() {
  return (
    <div>
      <nav id="free-trial">
        <div className="logo">
          <i className="ri-bard-fill"></i>
        </div>
        <div className="nav-links">
          <a href="#free-trial">Free Trial</a>
          <a href="#aihub">AIHUB</a>
          <a href="#services">Services</a>
          <a href="#discover">Discover</a>
          <div className="separator"></div>
          <p>AI For All</p>
        </div>
        <div className="login">
          <a href="#">Login</a>
          <img src="assets/login.JPG" alt="Login" />
        </div>
      </nav>

      <div className="prompt-sec">
        <h1>AI INNOVATORS</h1>
        <div className="prompt-img">
          <img src="assets/header.jpg" alt="Header" />
          <input type="text" placeholder="Type your prompt here ...." />
          <div className="tabs">
            <a href="#" className="active">Get Started</a>
            <a href="#">Discover</a>
            <a href="#">API Docs</a>
            <a href="#">AIHUB</a>
            <a href="#">Security</a>
            <a href="#">About Us</a>
          </div>
        </div>
      </div>

      <div className="showcase" id="aihub">
        <h3>UNLEASH THE POTENTIAL OF AI WITH AIHUB</h3>
        <div className="text-sec">
          <p>
            Immerse yourself in the world of Artificial Intelligence with AIHUB. Whether you are a seasoned
            professional, an avid enthusiast, or a business looking to integrate AI, AIHUB offers the tools and
            resources you need.
          </p>
          <div className="images">
            <img src="assets/img-1.JPG" alt="img1" />
            <img src="assets/img-2.JPG" alt="img2" />
            <img src="assets/img-3.JPG" alt="img3" />
          </div>
        </div>
        <div className="image-sec">
          <img src="assets/img-4.JPG" alt="img4" />
          <img src="assets/img-5.JPG" alt="img5" />
          <img src="assets/img-6.JPG" alt="img6" />
        </div>
      </div>

      <div className="services" id="services">
        <div className="header">
          <h3>OUR SERVICES</h3>
          <p>
            At AIHUB, our goal is to democratize AI, making it accessible and beneficial for everyone. Join us in
            creating a smarter, more interconnected world.
          </p>
           <p>
            At AIHUB, our goal is to democratize AI, making it accessible and beneficial for everyone. Join us in
            creating a smarter, more interconnected world.
          </p> <p>
            At AIHUB, our goal is to democratize AI, making it accessible and beneficial for everyone. Join us in
            creating a smarter, more interconnected world.
          </p>

        </div>

        <div className="service-items">
          {[
            { title: "AI Innovation", subtitle: "Innovation", description: "Access a powerful suite of AI tools designed to optimize your processes and boost efficiency." },
            { title: "AI Expertise", subtitle: "Expertise", description: "Receive customized advice and solutions from our AI specialists to elevate your projects.", active: true },
            { title: "AI Learning", subtitle: "Learning", description: "Utilize a vast array of AI resources, from beginner guides to advanced courses for everyone." },
            { title: "AI Network", subtitle: "Network", description: "Join a dynamic community of AI experts to share ideas and stay updated on trends." }
          ].map((service, index) => (
            <div key={index} className={`item ${service.active ? 'active' : ''}`}>
              <div className="title">
                <div className="gradient"></div>
                <p>{service.title}</p>
              </div>
              <div className="desc">
                <h5>{service.subtitle}</h5>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="video-sec" id="discover">
        <div className="header">
          <p>
            Discover our AI tools—from natural language processing to computer vision—that revolutionize your
            work!
          </p>
          <h3>WHY CHOOSE AIHUB</h3>
        </div>
        <div className="video">
          <img src="assets/footer.JPG" alt="Footer" />
          <button><i className="ri-play-fill"></i></button>
        </div>
      </div>

      <footer>
        <div className="copyright">
          <div className="separator"></div>
          <p>
            Made by <a href="https://github.com/Vedant-Wedekar">Ved</a> Instructor : AsmrProg, All Rights Reserved.
          </p>
          <div className="separator"></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
