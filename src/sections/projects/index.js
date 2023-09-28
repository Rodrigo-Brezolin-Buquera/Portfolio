import ProjectList from "./ProjectList";
import { useResize } from "../../hooks/useResize";
import { useLanguage } from "../../global/LanguageContext";

const Projects = () => {
  const size = useResize(1, 2, 3);
  const { getText } = useLanguage()
  const { projectTitle } = getText()

  const customHeight = () => {
    switch (size) {
      case 1:
        return "1100px";
      case 2:
        return "650px";
      case 3:
        return "700px";
      default:
        return "1100px";
    }
  };

  return (
    <section
      className={`flex w-full flex-col items-center`}
      style={{ height: customHeight() }}
    >
      <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide pb-4 xl:pb-6 text-black">
        {projectTitle}
      </h1>
      <ProjectList />
    </section>
  );
};

export default Projects;
