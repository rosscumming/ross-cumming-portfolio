import { Icon } from '@iconify/react';
import './ProjectCard.scss';

const ProjectCard = ({ project }) => (
  <div className="project">
    <div className="project-img">
      <img src={project.image} alt={project.alt} />
      <div className="overlay">
        <p>{project.description}</p>
      </div>
    </div>

    <span className="tech-used-cont">
      <p className="project-title">{project.title}</p>
      <span className="lang-cont">
        {project.techStack.map((tech, index) => (
          <span key={index} className="lang-tag">
            {tech.icons.map((icon) => (
              <Icon
                key={icon}
                icon={icon}
                height={20}
                width={20}
                className="icons-projects"
              />
            ))}
            {tech.label}
          </span>
        ))}
      </span>
      <span className="project-link">
        <a className="git-link" href={project.github}>
          View on GitHub
        </a>
      </span>
    </span>
  </div>
);

export default ProjectCard;
