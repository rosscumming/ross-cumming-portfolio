import React from 'react';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="hero">
      <span className="hero-wrap">
        <div className="hero-text">
          <p className="title developer">Developer</p>
          <p className="title designer">Designer</p>
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
                  <p className="command-input">mkdir about_me && cd about_me</p>
                </div>
                <div className="commands two">
                  <span className="material-icons arrow inner-arrow">
                    arrow_right_alt
                  </span>
                  <p className="current-dir">about_me</p>
                  <p className="command-input">mkdir hey_im_ross</p>
                </div>
                <div className="commands three">
                  <span className="material-icons arrow inner-arrow">
                    arrow_right_alt
                  </span>
                  <p className="current-dir">about_me</p>
                  <p className="command-input">mkdir currently_working_at</p>
                </div>
                <div className="commands four">
                  <span className="material-icons arrow inner-arrow">
                    arrow_right_alt
                  </span>
                  <p className="current-dir">about_me</p>
                  <p className="command-input">touch trust_pilot.ts</p>
                </div>
                <div className="commands five">
                  <span className="material-icons arrow inner-arrow">
                    arrow_right_alt
                  </span>
                  <p className="current-dir">about_me</p>
                  <p className="command-input">ls</p>
                </div>
                <div className="commands six">
                  <p className="current-dir ls">hey_im_ross</p>
                  <p className="current-dir ls"> currently_working_at</p>
                  <p className="command-input file">trust_pilot.ts</p>
                </div>
              </div>
            </section>
          </section>
        </section>
      </span>
    </section>
  );
};

export default Hero;
