import { projectsList } from "./projects";
import ProjectDetails from "./ProjectDetails";
import ChevronButton from "./ChevronButton";
import { useCarousel } from "./useCarousel";
import { useResize } from "../../hooks/useResize";

const ProjectList = () => {
  const { currentProject, nextProject, prevProject } = useCarousel(projectsList);
  const imageSize = useResize("40px","50px","60px")

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
      <ChevronButton size={imageSize} side={"right"} handler={nextProject} />
      <ChevronButton size={imageSize} side={"left"} handler={prevProject} />

      {list}
    </div>
  );
};

export default ProjectList;
