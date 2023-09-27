import { projectsList } from "./projects";
import ProjectDetails from "./ProjectDetails";
import ChevronButton from "./ChevronButton";
import { useCarousel } from "./useCarousel";

const ProjectList = () => {
  const { currentProject, nextProject, prevProject } = useCarousel(projectsList);

  const list = projectsList.map((project, index) => {
    const direction = index % 2 === 0 ? "forward" : "reverse";
    return (
      <div
        key={project.name}
        className={`absolute ${index === currentProject ? "opacity-100" : "opacity-0"}`}
        style={{transition: "opacity 500ms ease-in-out"}}
      >
        <ProjectDetails project={project} direction={direction} />
      </div>
    );
  });

  return (
    <div className={"relative w-full h-full"}>
      <ChevronButton side={"right"} handler={nextProject} />
      <ChevronButton side={"left"} handler={prevProject} />
      {list}
    </div>
  );
};

export default ProjectList;
