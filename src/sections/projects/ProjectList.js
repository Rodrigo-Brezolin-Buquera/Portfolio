import ProjectDetails from "./ProjectDetails";
import ChevronButton from "../../components/ChevronButton";
import { useCarousel } from "./useCarousel";
import { useLanguage } from "../../global/LanguageContext";

const ProjectList = () => {
  const {getText} = useLanguage()
  const {projects, usedTechs, githubButton} = getText()

  const { currentProject, nextProject, prevProject } = useCarousel(projects);

  const list = projects.map((project, index) => {
    const direction = index % 2 === 0 ? "forward" : "reverse";
    return (
      <div
        key={project.name}
        className={`absolute ${index === currentProject ? "opacity-100" : "opacity-0"}`}
        style={{transition: "opacity 500ms ease-in-out"}}
      >
        <ProjectDetails project={project} direction={direction} texts={{usedTechs, githubButton}} />
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
