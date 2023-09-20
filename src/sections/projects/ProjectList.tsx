import { projectsList } from "@/global/mockProject";
import ProjectDetails from "./ProjectDetails";
import "../../app/globals.css";
import ChevronButton from "./ChevronButton";
import { useCarousel } from "./useCarousel";

const ProjectList = () => {
  const {currentProject, nextProject, prevProject} = useCarousel()

  const list = projectsList.map((project, index) => {
    const direction = index % 2 === 0 ? "forward" : "reverse"
    return (
      <div
      className={`absolute project-transition
      ${index === currentProject ? "opacity-100" : "opacity-0"}
      `}
      >
      <ProjectDetails project={project} direction={direction} />
    </div>
      )
  })

  return (
    <div className={"relative w-full h-custom"}>
      <ChevronButton side={"right"} handler={nextProject} />
      <ChevronButton side={"left"} handler={prevProject} />

      {list}
    </div>
  );
};

export default ProjectList;
