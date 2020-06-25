import React from "react";
import "./Contact.scss";
import { InlineIcon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-logos/linkedin";
import githubIcon from "@iconify/icons-logos/github-icon";
import twitterIcon from "@iconify/icons-logos/twitter";
import codepenIcon from "@iconify/icons-logos/codepen";
import { ReactComponent as Wave } from "../../images/wave.svg";

const Contact = () => {
  return (
    <>
      <section className="wave">
        <Wave className="wave-svg" />
      </section>
      <section id="contact">
        <p className="comp-title con">Contact</p>
        <p className="comp-c">
          To connect with me on social media please see the links below or email
          me directly at:
        </p>
        <p className="email">ross@rosscumming.codes</p>
        <span className="social-media">
          <span className="twitter">
            <a href="https://twitter.com/itsrossc">
              <InlineIcon
                icon={twitterIcon}
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />{" "}
            </a>
          </span>

          <span className="linked">
            <a href="https://www.linkedin.com/in/ross-cumming">
              <InlineIcon
                icon={linkedinIcon}
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />
            </a>
          </span>
          <span className="codepen">
            <a href="https://codepen.io/rosscumming">
              <InlineIcon
                icon={codepenIcon}
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />
            </a>
          </span>
          <span className="github">
            <a href="https://github.com/rosscumming">
              <InlineIcon
                icon={githubIcon}
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />
            </a>
          </span>
        </span>
      </section>
    </>
  );
};

export default Contact;
