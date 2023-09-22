import { projectsList } from "@/sections/projects/projects";
import ProjectDetails from "./ProjectDetails";
import ChevronButton from "./ChevronButton";
import { useCarousel } from "./useCarousel";
import { useResize } from "@/hooks/useResize";

const ProjectList = () => {
  const { currentProject, nextProject, prevProject } = useCarousel();
  const imageSize = useResize(40,50,60)

  const list = projectsList.map((project, index) => {
    const direction = index % 2 === 0 ? "forward" : "reverse";
    return (
      <div
        key={project.name}
        className={`absolute project-transition
      ${index === currentProject ? "opacity-100" : "opacity-0"}
      `}
      >
        <ProjectDetails project={project} direction={direction} />
      </div>
    );
  });

  return (
    <div className={"relative w-full h-full"}>
      <ChevronButton size={imageSize} side={"right"} handler={nextProject} />
      <ChevronButton size={imageSize} side={"left"} handler={prevProject} />

      {list}
    </div>
  );
};

export default ProjectList;
