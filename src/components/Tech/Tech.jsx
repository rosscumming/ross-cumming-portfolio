import TechBadge from '../TechBadge/TechBadge';
import { techStack } from '../../data/techStack';

const TechCategory = ({ title, items }) => (
  <div className="flex flex-col items-center">
    <p className="h-7.5 text-title w-full flex font-bold justify-center">{title}</p>
    <div className="flex justify-center flex-col max-sm:flex-row max-sm:flex-wrap">
      {items.map((tech) => (
        <TechBadge key={tech.name} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
);

const Tech = () => (
  <section id="tech" className="flex justify-center flex-col items-center border-b border-border">
    <div id="tech-stack">
      <div className="px-2.5 flex items-center flex-col">
        <p className="pb-5 text-title text-[3em] font-bold flex justify-center text-center">Tech Stack</p>
        <p className="text-center py-2.5 max-w-200 w-full">
          I'm a Full-Stack Engineer with a focus on TypeScript, React, and
          cloud infrastructure. I'm passionate about building performant,
          well-tested applications.
        </p>
      </div>

      <section className="mt-17.5 px-2.5 pb-7.5 pt-2.5 flex justify-around flex-wrap max-sm:flex-col">
        <TechCategory title="Frontend" items={techStack.frontend} />
        <TechCategory title="Backend" items={techStack.backend} />
        <TechCategory title="Testing" items={techStack.testing} />
        <TechCategory title="Cloud & DevOps" items={techStack.cloud} />
      </section>
    </div>
  </section>
);

export default Tech;
