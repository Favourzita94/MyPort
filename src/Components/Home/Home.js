import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import CV from './CV.pdf'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs"
import { Link } from "react-scroll";



const Home = ({ theme, changeTheme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <BsFillMoonStarsFill size={40} />
        ) : (
          <p className="sun-theme-icon">
            {" "}
            <BsSunFill size={40} />{" "}
          </p>
        )}
      </div>
      <div className="container home-content">
          <h1>Hello! I'm Favour Nkemdilim</h1>

          <h3>
            <Typewriter
              options={{
                strings: [
                  "I am a Chemical Engineer",
                  "A Frontend Web Developer",
                  "A Keen REACT Developer",
                  "And a Great Collaborator",
                  "You are welcome to my Portfolio page"
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
          <div className="button-for-action">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              duration={100}
              offset={-100}
            >
              <div className="hire-me-button">Hire Me</div>
            </Link>

            <div className="get-resume-button">
              <a href={CV} download="Favour_cv" target="blank">
                Get Resume
              </a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Home;
