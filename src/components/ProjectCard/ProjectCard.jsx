import { Icon } from '@iconify/react';

const ProjectCard = ({ project }) => (
  <div className="group m-2.5 bg-bg rounded-[5px] relative shadow-[0_5px_15px_0px_rgba(0,0,0,0.6)] max-xs:w-[90vw]">
    <div>
      <img className="rounded-t-[5px] max-w-87.5 max-xs:w-[90vw] max-xs:h-auto" src={project.image} alt={project.alt} />
      <div className="absolute top-0 left-0 w-full h-46.25 opacity-0 transition-[opacity,height] duration-300 ease-in-out bg-black rounded-t-[5px] flex justify-center items-center group-hover:opacity-70 group-focus-within:opacity-70 max-xs:h-38.75">
        <p className="text-white font-bold px-2.5 text-justify">{project.description}</p>
      </div>
    </div>

    <div className="flex flex-col justify-evenly items-center my-1.25 mb-2.5 grow pb-12.5">
      <p className="text-title flex font-bold justify-center p-1.25 my-2.5">{project.title}</p>
      <div className="w-full max-w-87.5 flex flex-wrap justify-evenly">
        {project.techStack.map((tech) => (
          <span key={tech.label} className="flex items-center text-title p-2.5">
            {tech.icons.map((icon) => (
              <Icon key={icon} icon={icon} height={20} width={20} className="mr-2.5" />
            ))}
            {tech.label}
          </span>
        ))}
      </div>
      <span className="flex justify-center items-center bg-black w-full p-2.5 text-white absolute bottom-0 rounded-b-[5px]">
        <a
          className="text-white no-underline cursor-pointer hover:text-accent hover:transition-colors duration-200"
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </span>
    </div>
  </div>
);

export default ProjectCard;
