import Wave from '../Wave/Wave';
import SocialLink from '../SocialLink/SocialLink';
import { socialLinks } from '../../data/social';
import './Contact.scss';

const Contact = () => (
  <>
    <Wave />
    <section id="contact">
      <p className="comp-title con">Contact</p>
      <p className="comp-c">
        To connect with me on social media please see the links below or email
        me directly at:
      </p>
      <p className="email">ross@rosscumming.codes</p>
      <span className="social-media">
        {socialLinks.map((link) => (
          <SocialLink
            key={link.id}
            icon={link.icon}
            url={link.url}
            label={link.label}
          />
        ))}
      </span>
    </section>
  </>
);

export default Contact;
