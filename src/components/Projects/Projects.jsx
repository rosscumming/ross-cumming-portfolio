import ProjectCard from '../ProjectCard/ProjectCard';
import { projects } from '../../data/projects';

const Projects = () => (
  <section id="projects" className="flex w-screen justify-center flex-col items-center">
    <p className="pb-5 text-title text-[3em] font-bold flex justify-center text-center mt-12.5">Projects</p>
    <p className="text-center py-2.5 max-w-200 w-full">Hover or focus on the images for more details.</p>

    <div className="flex justify-around flex-wrap w-[70vw]">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  </section>
);

export default Projects;
