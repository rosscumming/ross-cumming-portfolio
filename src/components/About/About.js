import React from "react";
import "./About.scss";
import portrait from "../../images/portrait.png";
import { ReactComponent as Wave } from "../../images/wave.svg";

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
                👋{" "}
              </span>
              Hi, I'm Ross
            </p>
            <p>
              I'm an Edinburgh based Software Developer and recent graduate of
              CodeClan.
            </p>
            <p>
              I have a passion for design, creativity, and programming. With an
              eagerness to learn and work within the tech industry, I am
              constantly testing and playing with new technologies to improve
              myself as a developer.
            </p>
            <p>
              In my spare time, I love to play my guitar and create music. I
              thrive on communication and collaboration, although I work equally
              well on my own. I also have a love for the band Pinegrove. Check
              them out on Spotify
              <a
                className="pg-link"
                href="https://open.spotify.com/artist/2gbT6GPXMis0OAkZbEQCYB?si=6haJASlaSN2ECVRW2BIBPQ"
              >
                HERE!
              </a>
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
