import ProjectList from "./ProjectList";
import "../../app/globals.css";
import { useResize } from "@/hooks/useResize";

const Projects = () => {
  const size = useResize(1, 2, 3);

  const customHeight = () => {
    switch (size) {
      case 1:
        return "h-custom-mobile";
      case 2:
        return "h-custom-medium";
      case 3:
        return "h-custom-large ";
      default:
        return "h-custom-mobile";
    }
  };

  return (
    <section className={`flex w-full flex-col items-center ${customHeight()}`}>
      <p className="text-2xl lg:text-3xl xl:text-4xl font-semibold tracking-wide pb-4 xl:pb-6 text-black">
        Projetos
      </p>
      <ProjectList />
    </section>
  );
};

export default Projects;
