import { useResize } from "../../hooks/useResize";

const ProjectDetails = ({ project, direction, texts }) => {
  const { name, area, description, status, techs, githubURL, image } = project;
  const {usedTechs, githubButton} = texts
  const formattedTechs = techs.join(" - ");
  const imageSize = useResize("100%", "600px", "800px")

 
  const flexDirection= direction === "reverse" ? "sm:flex-row-reverse  bg-pink-light " : "sm:flex-row bg-pink";
  const textPadding = direction === "reverse" ? "sm:pl-24" : "sm:pr-24"
  const imageUrl = require("../../assets/" + image)
  return (
    <article className={`w-scren flex flex-col  mb-8 ${flexDirection}`}>
      <img
        src={imageUrl}
        alt={"Project"}
        className="overflow-hidden"
        style={{width: imageSize}}
      />
      <div 
      className={`flex flex-col sm:justify-start w-full grow py-2 px-2 sm:px-8 gap-5 ${textPadding}`}
      style={{ minHeight: "500px" }}
      >
        <div>
          <p className=" font-bold text-3xl sm:text-4xl mt-6 tracking-wide">{name}</p>
          <p className=" text-xl  sm:text-xl tracking-wide ">{area}</p>
        </div>
        <p className=" text-base  sm:text-xl tracking-wide ">{description}</p>
        <div>
          <p className="  font-bold text-base sm:text-xl tracking-wide">Status: </p>
          <p className="  text-base  sm:text-xltracking-wide ">{status} </p>
        </div>

        <div>
          <p className=" font-bold text-base sm:text-xl tracking-wide">{usedTechs}</p>
          <p className="text-base sm:text-xl tracking-wide"> {formattedTechs}</p>
        </div>

        <button className="bg-black shadow-md rounded-lg  p-2 w-40 my-6 hover:cursor-pointer hover:bg-gray-dark z-10">
          <a
            href={githubURL}
            target="blank"
            rel="noopener noreferrer"
            className="tracking-wide "
          >
            {githubButton}
          </a>
        </button>
      </div>
    </article>
  );
};

export default ProjectDetails;
