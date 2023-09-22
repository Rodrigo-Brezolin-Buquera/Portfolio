import { useResize } from "@/hooks/useResize";
import Image from "next/image";
import "../../app/globals.css";


export interface Project {
  name: string;
  area: string;
  description: string;
  status: string;
  techs: string[];
  githubURL: string;
}

interface ProjectDetailsProps {
  project: Project;
  direction?: string;
}

const ProjectDetails = ({ project, direction }: ProjectDetailsProps) => {
  const imageSize = useResize(414,640,880)
  const imageHeight = imageSize * 4/3


  
  const flexDirection= direction === "reverse" ? "sm:flex-row-reverse  bg-pink-light " : "sm:flex-row bg-pink";
  const textPadding = direction === "reverse" ? "sm:pl-24" : "sm:pr-24"
  
  const { name, area, description, status, techs, githubURL } = project;
  const formattedTechs = techs.join(" - ");

  return (
    <article className={`w-scren flex flex-col justify-between mb-8 ${flexDirection}`}>
      <Image
        src={"/mockPicture.png"}
        alt={"texto mock"}
        width={imageSize}
        height={imageHeight}
        className="overflow-hidden"
      />
      <div className={`flex flex-col sm:justify-center w-full grow p-4 gap-5 h-card-mobile  ${textPadding}`}>
        <div>
          <p className=" font-bold  text-3xl mt-6 tracking-wide ">{name}</p>
          <p className=" text-xl tracking-wide ">{area}</p>
        </div>
        <p className=" text-base tracking-wide ">{description}</p>
        <div>
          <p className="  font-bold  text-base tracking-wide ">Status: </p>
          <p className="  text-base tracking-wide ">{status} </p>
        </div>

        <div>
          <p className=" font-bold   text-base tracking-wide ">
            Tecnologias utilzadas:
          </p>
          <p className="text-base tracking-wide"> {formattedTechs}</p>
        </div>

        <button className="bg-black shadow-md rounded-lg p-2 w-32 m-4 hover:cursor-pointer hover:bg-gray-dark">
          <a
            href={githubURL}
            target="blank"
            rel="noopener noreferrer"
            className="tracking-wide "
          >
            Ver no github
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjectDetails;
