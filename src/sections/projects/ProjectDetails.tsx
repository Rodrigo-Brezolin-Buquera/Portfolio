import Image from "next/image";

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
  color?: string;
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  const { name, area, description, status, techs, githubURL } = project;

  const formattedTechs = techs.join(" - ");

  return (
    <article className="flex w-full justify-between bg-pink mb-8">
      <Image
        src={"/mockPicture.png"}
        alt={"texto mock"}
        width={600}
        height={800}
      />
      <div className="flex flex-col w-full p-4 gap-2 pr-20">
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
