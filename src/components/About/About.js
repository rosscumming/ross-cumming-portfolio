import React from 'react';
import './About.scss';
import portrait from '../../images/portrait.png';
import { ReactComponent as Wave } from '../../images/wave.svg';

const About = () => {
  return (
    <>
      <section className="wave">
        <Wave className="wave-svg" />
      </section>
      <section id="about">
        <div className="about-inner">
          <img
            className="portrait"
            src={portrait}
            alt="circular portrait of ross cumming"
          />
          <article className="about-me">
            <p className="about-title">
              <span aria-label="waving hand emoji" role="img">
                👋{' '}
              </span>
              Hi, I'm Ross
            </p>
            <p>
              I'm an Edinburgh based Software Engineer currently working at
              <a className="pg-link" href="https://uk.trustpilot.com/">
                Trustpilot
              </a>
            </p>

            <p>
              I have a passion for design, creativity, and programming. With an
              eagerness to learn and work within the tech industry, I am
              constantly testing and playing with new technologies to improve
              myself as a developer.
            </p>
          </article>
        </div>
      </section>
      <section className="wave">
        <Wave className="wave-svg rotated" />
      </section>
    </>
  );
};

export default About;
