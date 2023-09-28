import { useState } from "react";

export const useCarousel = (ProjectDetails, cardText) => {
  const [currentProject, setCurrentProject] = useState(0);
  const { projects, usedTechs, githubButton } = cardText

  const numProjects = projects.length;

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % numProjects);
  };

  const prevProject = () => {
    setCurrentProject((currentProject - 1 + numProjects) % numProjects);
  };

  const projectsList = projects.map((project, index) => {
    const direction = index % 2 === 0 ? "forward" : "reverse";
    return (
      <div
        key={project.name}
        className={`absolute ${index === currentProject ? "opacity-100" : "opacity-0"}`}
        style={{ transition: "opacity 500ms ease-in-out" }}
      >
        <ProjectDetails project={project} direction={direction} texts={{ usedTechs, githubButton }} />
      </div>
    );
  });

  return { nextProject, prevProject, projectsList }
}