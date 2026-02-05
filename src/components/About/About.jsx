import Wave from '../Wave/Wave';
import portrait from '../../images/portrait.png';

const About = () => (
  <>
    <Wave />
    <section id="about" className="flex justify-center bg-accent">
      <div className="flex items-center justify-center flex-col mt-3.75">
        <img
          className="h-62.5 border-5 border-white rounded-full shadow-[0_5px_15px_0px_rgba(0,0,0,0.6)] transition-all duration-200 ease-in-out hover:shadow-[0_25px_15px_0px_rgba(0,0,0,0.2)] hover:scale-[1.03]"
          src={portrait}
          alt="circular portrait of ross cumming"
        />
        <article className="px-2.5 max-w-200 w-full mt-10 text-center flex items-center flex-col text-white justify-center">
          <p className="py-7.5 text-white text-[3em] font-bold">
            <span aria-label="waving hand emoji" role="img">
              {'👋 '}
            </span>
            Hi, I'm Ross
          </p>
          <p className="py-2.5">
            I'm an Edinburgh based Software Engineer currently working at
            <a
              className="ml-1.25 text-title no-underline font-bold text-[0.9em]"
              href="https://uk.trustpilot.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trustpilot
            </a>
          </p>
          <p className="py-2.5">
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
