import Wave from '../Wave/Wave';
import portrait from '../../images/portrait.png';
import './About.scss';

const About = () => (
  <>
    <Wave />
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
    <Wave rotated />
  </>
);

export default About;
