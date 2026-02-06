import { bio } from '../data/bio';

const About = () => (
  <section id="about" className="relative z-10 max-w-3xl mx-auto px-6 py-20">
    <h2 className="font-instrument italic text-3xl font-normal mb-12 -tracking-tight pb-4 section-rule">
      About
    </h2>
    <p className="font-inter text-base leading-loose text-[#888] max-w-xl">
      {bio.bio}
    </p>
  </section>
);

export default About;
