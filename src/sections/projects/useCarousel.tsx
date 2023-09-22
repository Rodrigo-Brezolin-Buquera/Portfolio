import { projectsList } from "@/sections/projects/projects";
import { useState } from "react";

export const useCarousel = () => {
    const [currentProject, setCurrentProject] = useState(0);

    const numProjects = projectsList.length;
  
    const nextProject = () => {
      setCurrentProject((currentProject + 1) % numProjects);
    };
  
    const prevProject = () => {
      setCurrentProject((currentProject - 1 + numProjects) % numProjects);
    };

    return {currentProject, nextProject, prevProject }
}