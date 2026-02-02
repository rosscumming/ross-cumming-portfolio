import TechBadge from '../TechBadge/TechBadge';
import { techStack } from '../../data/techStack';
import './Tech.scss';

const TechCategory = ({ title, items }) => (
  <div className="tech-category">
    <p className="tech-head">{title}</p>
    <div className="inner-cont">
      {items.map((tech) => (
        <TechBadge key={tech.name} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
);

const Tech = () => (
  <section id="tech">
    <div id="tech-stack" className="tech-cont">
      <div className="text-cont">
        <p className="comp-title">Tech Stack</p>
        <p className="comp-p">
          I'm a Full-Stack Engineer with a focus on TypeScript, React, and
          cloud infrastructure. I'm passionate about building performant,
          well-tested applications.
        </p>
      </div>

      <section className="tech-type-cont">
        <TechCategory title="Frontend" items={techStack.frontend} />
        <TechCategory title="Backend" items={techStack.backend} />
        <TechCategory title="Testing" items={techStack.testing} />
        <TechCategory title="Cloud & DevOps" items={techStack.cloud} />
      </section>
    </div>
  </section>
);

export default Tech;
