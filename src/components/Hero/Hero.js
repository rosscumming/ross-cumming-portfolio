import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="title">Designer</p>
        <p className="title">Developer </p>
        <p className="title">Creator </p>
      </div>
      <section className="hero-img">
        {/* <img
          src={portrait}
          className="portrait"
          alt="portrait of ross cumming"
        /> */}
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
                <p className="command-input">take looking-for-work</p>
              </div>
              <div className="commands two">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">looking-for-work</p>
                <p className="command-input">mkdir junior_developer</p>
              </div>
              <div className="commands three">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">looking-for-work</p>
                <p className="command-input">mkdir seeking_a_job</p>
              </div>
              <div className="commands four">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">looking-for-work</p>
                <p className="command-input">touch hire-me.html</p>
              </div>
              <div className="commands five">
                <span className="material-icons arrow inner-arrow">
                  arrow_right_alt
                </span>
                <p className="current-dir">looking-for-work</p>
                <p className="command-input">ls</p>
              </div>
              <div className="commands six">
                <p className="current-dir ls">junior_developer</p>
                <p className="current-dir ls">seeking_a_job</p>
                <p className="command-input file">hire-me.html</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Hero;
