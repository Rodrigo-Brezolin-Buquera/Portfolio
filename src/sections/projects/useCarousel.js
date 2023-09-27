import { useState } from "react";

export const useCarousel = (list) => {
    const [currentProject, setCurrentProject] = useState(0);

    const numProjects = list.length;
  
    const nextProject = () => {
      setCurrentProject((currentProject + 1) % numProjects);
    };
  
    const prevProject = () => {
      setCurrentProject((currentProject - 1 + numProjects) % numProjects);
    };

    return {currentProject, nextProject, prevProject }
}