import React from "react";
import "./Hero.scss";
import portrait from "../../images/portrait.png";

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
        </section>
      </section>
    </section>
  );
};

export default Hero;
