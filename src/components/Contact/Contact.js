import React from "react";
import "./Contact.scss";
import { Icon } from "@iconify/react";
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
              <Icon
                icon="logos:twitter"
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />{" "}
            </a>
          </span>

          <span className="linked">
            <a href="https://www.linkedin.com/in/ross-cumming">
              <Icon
                icon="logos:linkedin-icon"
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />
            </a>
          </span>
          <span className="codepen">
            <a href="https://codepen.io/rosscumming">
              <Icon
                icon="logos:codepen-icon"
                height={60}
                width={60}
                className="icons-projects icon-contact"
              />
            </a>
          </span>
          <span className="github">
            <a href="https://github.com/rosscumming">
              <Icon
                icon="logos:github-icon"
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
