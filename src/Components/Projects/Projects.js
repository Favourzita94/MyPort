import React from "react";
import ProjectList from "./ProjectList";
import "./Projects.css";

const Projects = () => {

    const data = [
      {
        name: "Photo-Gallery",
        des: "Built with React, a fully functional web Application showing various images of nature",
        projectlink: "https://hn-gallery.vercel.app/",
        techused: [
          {
            techname: "React",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "My Portfolio",
        des: "Built with React library. My personal portfolio showcasing my educational qualification, work experiences, skills and other projects",
        projectlink: "https://github.com/Favourzita94/",
        techused: [
          {
            techname: "React",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "Movie Web-App",
        des: "Amovie web app rendering just the Top-rated movies from The movie Database.",
        projectlink: "https://legendary-madeleine-27bb59.netlify.app/",
        techused: [
          {
            techname: "React",
          },
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },
      {
        name: "WhatsDoc-FD",
        des: "A clinical WebApp Built with ReactJs and Django in a team of 5 made up of designers, frontend and Backend engineers, a .",
        projectlink: "https://vercel.com/favourzita94/clinical-app",
        techused: [
          {
            techname: "Django",
          },
          {
            techname: "Bootstrap",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
          {
            techname: "Javascript",
          },
        ],
      },
      {
        name: "Simple Profile Page",
        des: "A simple profile page that shows updated time in milliseconds.",
        projectlink: "https://sage-starship-212b24.netlify.app/",
        techused: [
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },

      {
        name: "AirBnB site clone",
        des: "A static website built with HTML, CSS and Javascript as one of the projects for ALX foundational stage.",
        projectlink: "https://github.com/Favourzita94/",
        techused: [
          {
            techname: "Javascript",
          },
          {
            techname: "CSS",
          },
          {
            techname: "HTML",
          },
        ],
      },

      {
        name: "Carousel Creation",
        des: "A beginner project with only HTML and CSS",
        projectlink: "https://favour-carousel.netlify.app/",
        techused: [
          {
            techname: "HTML",
          },
          {
            techname: "CSS",
          },          
        ],
      },
      {
        name: "Basketball Scoreboard",
        des: "A simple basketball scoreboard built with only HTML, CSS, Javscript",
        projectlink: "https://favour-basketball-scoreboard.netlify.app/",
        techused: [
          {
            techname: "HTML",
          },
          {
            techname: "CSS",
          }, 
          {
            techname: "Javascript",
          },          
        ],
      },
    ];
  return (
    <div className="container">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectList {...item}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
