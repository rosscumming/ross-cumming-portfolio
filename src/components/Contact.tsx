import { socialLinks } from '../data/social';

const Contact = () => (
  <section className="relative z-10 max-w-3xl mx-auto px-6 pt-20 pb-24 text-center">
    <h2 className="font-instrument italic text-3xl font-normal mb-12 -tracking-tight pb-4 section-rule section-rule-center">
      Contact
    </h2>
    <div className="flex justify-center gap-8 flex-wrap">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-inter text-sm text-[#888] no-underline tracking-wide hover:text-[#8A9A7B] transition-colors duration-300"
        >
          {link.label}
        </a>
      ))}
    </div>
  </section>
);

export default Contact;
