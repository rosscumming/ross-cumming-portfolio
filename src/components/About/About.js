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
          <article className="about-me">
            <h3 className="about-title">Hi, I'm Ross</h3>
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
      <div className="wave">
        <Wave className="wave-svg rotated" />
      </div>
    </>
  );
};

export default About;
