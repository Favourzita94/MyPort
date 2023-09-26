import React from "react";
import "./About.css";
import ProfilePic from "../../image/profile_pic.jpg";
import Fade from 'react-reveal/Fade'
import Flip from 'react-reveal/Flip'

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={ProfilePic} alt="profile pic" />
            </div>
          </div>
        </Fade>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <Flip left>
              <div className="about-title">
                <h5>About Me</h5>
                <span className="line"></span>
              </div>
            </Flip>
            <Fade>
              <div className="myself">
              <p>
                Welcome to my portfolio! I'm delighted to have you here,
                As a React developer, I strive to bridge 
                the gap between design and functionality through innovative and 
                pixel-perfect web solutions and this is because I have great passion for creating dynamic 
                and responsive user interfaces. Join me on this digital 
                journey as we dive into the world of responsive web design, interactive 
                interfaces, and seamless user interactions.
              </p>
        
              <p>
                Whether you need a custom React application, integration with
                APIs or third-party services, or ongoing maintenance and support
                for your existing React application, I am excited to work with
                you and help you achieve your goals. Please take a look at my
                portfolio to see some of my past projects, and feel free to
                contact me if you have any questions or would like to discuss
                your next project.
              </p>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
