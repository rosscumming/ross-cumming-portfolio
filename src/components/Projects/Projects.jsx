import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.scss';

const Projects = () => (
  <section id="projects">
    <p className="comp-title pro">Projects</p>
    <p className="comp-p">Hover over the images for more details.</p>

    <div className="projects-cont">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
