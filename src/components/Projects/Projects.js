import React from "react";
import "./Projects.scss";
import gymland from "../../images/gymland.png";

const Projects = () => {
  return (
    <section id="projects">
      <p className="comp-title pro">Projects</p>
      <p className="comp-p">Hover over the images to see more details</p>

      <div className="projects-cont">
        <div className="project one">
          <div className="project-img">
            <img src={gymland} alt="gymland solo project" />
            <div className="overlay">
              <p>
                Gymland was my first solo project at Codeclan built in six days.
                It's structured using MVC pattern and OOP principles. I really
                enjoyed working on this!
              </p>
            </div>
          </div>
          <p className="project-title">Gymland</p>
        </div>
        <div className="project one">
          <div className="project-img">
            <img src={gymland} alt="gymland solo project" />
            <div className="overlay">
              <p>
                Gymland was my first solo project at Codeclan built in six days.
                It's structured using MVC pattern and OOP principles. I really
                enjoyed working on this!
              </p>
            </div>
          </div>
          <p className="project-title">Gymland</p>
        </div>
        <div className="project one">
          <div className="project-img">
            <img src={gymland} alt="gymland solo project" />
            <div className="overlay">
              <p>
                Gymland was my first solo project at Codeclan built in six days.
                It's structured using MVC pattern and OOP principles. I really
                enjoyed working on this!
              </p>
            </div>
          </div>
          <p className="project-title">Gymland</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
