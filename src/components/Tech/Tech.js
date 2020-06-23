import React from "react";
import "./Tech.scss";

const Tech = () => {
  return (
    <section id="tech">
      <div id="tech-stack" className="tech-cont">
        <p className="tech-title">Tech Stack</p>
        <p className="tech-p">
          As a Front-End enthusiast, I've worked with many different
          technologies. I really enjoy working with JavaScript and using React
          as a framework.
        </p>
        <p className="tech-p">
          Despite my preference for Front-End, I am very much open to Back-End
          related positions too and am always keen to work with different
          languages.
        </p>

        <section className="tech-type-cont">
          <div className="front-end-cont">
            <p className="tech-head">Front-End</p>
          </div>
          <div className="back-end-cont">
            <p className="tech-head">Back-End</p>
          </div>
          <div className="other-cont">
            <p className="tech-head">Other</p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Tech;
