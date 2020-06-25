import React from "react";
import "./Projects.scss";
import gymland from "../../images/gymland.png";
import pubquizbuddy from "../../images/pubquizbuddy.png";
import jobswipe from "../../images/jobswipe.png";
import { InlineIcon } from "@iconify/react";
import rubyIcon from "@iconify/icons-logos/ruby";
import sinatraIcon from "@iconify/icons-logos/sinatra";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import javascriptIcon from "@iconify/icons-logos/javascript";
import vueIcon from "@iconify/icons-logos/vue";
import expressIcon from "@iconify/icons-logos/express";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import reactIcon from "@iconify/icons-logos/react";
import javaIcon from "@iconify/icons-logos/java";
import springIcon from "@iconify/icons-logos/spring";

const Projects = () => {
  return (
    <section id="projects">
      <p className="comp-title pro">Projects</p>
      <p className="comp-p">Hover over the images for more details</p>

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

          <span className="tech-used-cont">
            <p className="project-title">Gymland</p>
            <span className="lang-cont">
              <span className="lang-tag">
                <InlineIcon
                  icon={rubyIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                <InlineIcon
                  icon={sinatraIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                Ruby/Sinatra
              </span>
              <span className="lang-tag">
                <InlineIcon
                  icon={postgresqlIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                PostgreSQL
              </span>
            </span>
            <span className="project-link">
              <a
                className="git-link"
                href="https://github.com/rosscumming/solo_ruby_project_gym"
              >
                View on GitHub
              </a>
            </span>
          </span>
        </div>

        <div className="project two">
          <div className="project-img">
            <img src={pubquizbuddy} alt="pub quiz buddy group project" />
            <div className="overlay">
              <p>
                Pub Quiz Buddy was my second project at Codeclan and my first
                group project. As a group of four, we created this app utilising
                external APIs such as Google Maps/Places. This was built in six
                days.
              </p>
            </div>
          </div>
          <span className="tech-used-cont">
            <p className="project-title">Pub Quiz Buddy</p>
            <span className="lang-cont">
              <span className="lang-tag">
                <InlineIcon
                  icon={javascriptIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                <InlineIcon
                  icon={vueIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                JavaScript/Vue.js
              </span>

              <span className="lang-tag">
                <InlineIcon
                  icon={expressIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                Express.js
              </span>
              <span className="lang-tag">
                <InlineIcon
                  icon={mongodbIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                mongoDB
              </span>
            </span>
            <span className="project-link">
              <a
                className="git-link"
                href="https://github.com/rosscumming/pub-quiz-buddy"
              >
                View on GitHub
              </a>
            </span>
          </span>
        </div>
        <div className="project three">
          <div className="project-img">
            <img src={jobswipe} alt="JobSwipe group project" />
            <div className="overlay">
              <p>
                JobSwipe was my final group project at Codeclan. Our group
                consisted of five and together we built a tool to help search
                for IT related jobs. It utilises the reed.co.uk API to pull jobs
                and was built in six days.
              </p>
            </div>
          </div>
          <span className="tech-used-cont">
            <p className="project-title">JobSwipe</p>
            <span className="lang-cont">
              <span className="lang-tag">
                <InlineIcon
                  icon={javascriptIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                <InlineIcon
                  icon={reactIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                JavaScript/React
              </span>

              <span className="lang-tag">
                <InlineIcon
                  icon={expressIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                Express.js
              </span>
              <span className="lang-tag">
                <InlineIcon
                  icon={javaIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                <InlineIcon
                  icon={springIcon}
                  height={20}
                  width={20}
                  className="icons-projects"
                />
                Java/Spring
              </span>
            </span>
            <span className="project-link">
              <a
                className="git-link"
                href="https://github.com/rosscumming/Java-Final-Project-Job-Search-App"
              >
                View on GitHub
              </a>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
