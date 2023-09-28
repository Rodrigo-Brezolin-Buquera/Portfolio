import ProjectDetails from "./ProjectDetails";
import ChevronButton from "../../components/ChevronButton";
import { useCarousel } from "./useCarousel";
import { useLanguage } from "../../global/LanguageContext";

const ProjectList = () => {
  const {getText} = useLanguage()
  const {projects, usedTechs, githubButton} = getText()
  const cardText = {usedTechs, githubButton, projects}
  const { nextProject, prevProject, projectsList } = useCarousel(ProjectDetails, cardText);

  return (
    <div className={"relative w-full h-full"}>
      <ChevronButton side={"right"} handler={nextProject} />
      <ChevronButton side={"left"} handler={prevProject} />
      {projectsList}
    </div>
  );
};

export default ProjectList;
