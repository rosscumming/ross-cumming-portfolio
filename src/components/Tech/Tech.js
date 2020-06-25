import React from "react";
import "./Tech.scss";
import { InlineIcon } from "@iconify/react";
import javascriptIcon from "@iconify/icons-logos/javascript";
import html5 from "@iconify/icons-logos/html-5";
import css3 from "@iconify/icons-logos/css-3";
import reactIcon from "@iconify/icons-logos/react";
import sassIcon from "@iconify/icons-logos/sass";
import vueIcon from "@iconify/icons-logos/vue";
import rubyIcon from "@iconify/icons-logos/ruby";
import sinatraIcon from "@iconify/icons-logos/sinatra";
import pythonIcon from "@iconify/icons-logos/python";
import djangoIcon from "@iconify/icons-logos/django";
import flaskIcon from "@iconify/icons-logos/flask";
import nodejsIcon from "@iconify/icons-logos/nodejs";
import denoIcon from "@iconify/icons-logos/deno";
import javaIcon from "@iconify/icons-logos/java";
import springIcon from "@iconify/icons-logos/spring";
import mongodbIcon from "@iconify/icons-logos/mongodb";
import postgresqlIcon from "@iconify/icons-logos/postgresql";
import gitIcon from "@iconify/icons-logos/git";
import herokuIcon from "@iconify/icons-logos/heroku";

const Tech = () => {
  return (
    <>
      <section id="tech">
        <div id="tech-stack" className="tech-cont">
          <p className="comp-title">Tech Stack</p>
          <p className="comp-p">
            As a Front-End enthusiast, I've worked with many different
            technologies. I really enjoy working with JavaScript and using React
            as a framework.
          </p>
          <p className="comp-p">
            Despite my preference for Front-End, I am very much open to Back-End
            related positions too and am always keen to work with and explore
            different languages.
          </p>

          <section className="tech-type-cont">
            <div className="front-end-cont">
              <p className="tech-head">Front-End</p>
              <div className="inner-cont">
                <span className="tech-name">
                  <InlineIcon
                    icon={javascriptIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  JavaScript
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={html5}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  HTML5
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={css3}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  CSS3
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={sassIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  SASS/SCSS
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={reactIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  React
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={vueIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Vue.js
                </span>
              </div>
            </div>
            <div className="back-end-cont">
              <p className="tech-head">Back-End</p>
              <div className="inner-cont">
                <span className="tech-name">
                  <InlineIcon
                    icon={rubyIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Ruby
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={sinatraIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Sinatra
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={pythonIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Python
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={djangoIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Django
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={flaskIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Flask
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={nodejsIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Node.js
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={denoIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Deno
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={javaIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Java
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={springIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Spring
                </span>
              </div>
            </div>
            <div className="misc-cont">
              <p className="tech-head">Miscellaneous</p>
              <div className="inner-cont">
                <span className="tech-name">
                  <InlineIcon
                    icon={mongodbIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  mongoDB
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={postgresqlIcon}
                    height={25}
                    width={25}
                    className="icons postg"
                  />
                  PostgreSQL
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={gitIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Git
                </span>
                <span className="tech-name">
                  <InlineIcon
                    icon={herokuIcon}
                    height={25}
                    width={25}
                    className="icons"
                  />
                  Heroku
                </span>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Tech;
