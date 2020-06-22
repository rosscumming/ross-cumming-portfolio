import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="title designer">Designer</p>
        <p className="title developer">Developer</p>
        <p className="title creator">Creator </p>
      </div>
      <section className="hero-img">
        <section className="img-box">
          <div className="dots-container">
            <div className="dots red"></div>
            <div className="dots yellow"></div>
            <div className="dots green"></div>
          </div>

          <section className="commands">
            <div className="commands-cont">
              <div className="commands one">
                <span className="material-icons arrow">arrow_right_alt</span>
                <p className="current-dir">projects</p>
                <p className="command-input">take hey_im_ross</p>
              </div>
              <div className="commands two">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">hey_im_ross</p>
                <p className="command-input">mkdir junior_developer</p>
              </div>
              <div className="commands three">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">hey_im_ross</p>
                <p className="command-input">mkdir seeking_a_job</p>
              </div>
              <div className="commands four">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">hey_im_ross</p>
                <p className="command-input">ready_to_start.js</p>
              </div>
              <div className="commands five">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">hey_im_ross</p>
                <p className="command-input">ls</p>
              </div>
              <div className="commands six">
                <p className="current-dir ls">junior_developer</p>
                <p className="current-dir ls">seeking_a_job</p>
                <p className="command-input file">ready_to_start.js</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
