import Wave from '../Wave/Wave';
import SocialLink from '../SocialLink/SocialLink';
import { socialLinks } from '../../data/social';

const Contact = () => (
  <>
    <Wave />
    <section id="contact" className="bg-accent text-white flex justify-center flex-col items-center">
      <p className="pb-5 text-white text-[3em] font-bold flex justify-center text-center">Contact</p>
      <p className="py-5 px-2.5 text-center">
        To connect with me on social media please see the links below or email
        me directly at:
      </p>
      <p className="bg-title text-white p-1.25 rounded-[5px]">ross@rosscumming.codes</p>
      <span className="py-5 flex justify-around items-center flex-wrap pt-12.5 max-w-150 w-full">
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
