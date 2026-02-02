import './Hero.scss';

const TerminalCommand = ({ dir, command, isOutput = false, className = '' }) => (
  <div className={`commands ${className}`}>
    {!isOutput && (
      <span className="material-icons arrow">arrow_right_alt</span>
    )}
    <p className={`current-dir ${isOutput ? 'ls' : ''}`}>{dir}</p>
    <p className={`command-input ${isOutput ? 'file' : ''}`}>{command}</p>
  </div>
);

const Hero = () => (
  <section id="hero">
    <span className="hero-wrap">
      <div className="hero-text">
        <p className="title developer">Developer</p>
        <p className="title designer">Designer</p>
        <p className="title creator">Creator</p>
      </div>
      <section className="hero-img">
        <section className="img-box">
          <div className="dots-container">
            <div className="dots red" />
            <div className="dots yellow" />
            <div className="dots green" />
          </div>

          <section className="commands-section">
            <div className="commands-cont">
              <TerminalCommand
                dir="projects"
                command="mkdir about_me && cd about_me"
                className="one"
              />
              <TerminalCommand
                dir="about_me"
                command="mkdir hey_im_ross"
                className="two"
              />
              <TerminalCommand
                dir="about_me"
                command="mkdir currently_working_at"
                className="three"
              />
              <TerminalCommand
                dir="about_me"
                command="touch trustpilot.ts"
                className="four"
              />
              <TerminalCommand
                dir="about_me"
                command="ls"
                className="five"
              />
              <div className="commands six">
                <p className="current-dir ls">hey_im_ross</p>
                <p className="current-dir ls">currently_working_at</p>
                <p className="command-input file">trustpilot.ts</p>
              </div>
            </div>
          </section>
        </section>
      </section>
    </span>
  </section>
);

export default Hero;
