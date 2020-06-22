import React from "react";
import "./About.scss";
import portrait from "../../images/portrait.png";
import { ReactComponent as Wave } from "../../images/wave.svg";

const About = () => {
  return (
    <>
      <div className="wave">
        <Wave className="wave-svg" />
      </div>
      <section className="about">
        <div className="about-inner">
          <img className="portrait" src={portrait} />
        </div>
      </section>
    </>
  );
};

export default About;
