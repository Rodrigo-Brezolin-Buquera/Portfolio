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
    <article className={`w-scren flex flex-col justify-between mb-8 ${flexDirection}`}>
      <img
        src={imageUrl}
        alt={"Project"}
        className="overflow-hidden"
        style={{width: imageSize}}
      />
      <div 
      className={`flex flex-col sm:justify-center w-full grow p-4 gap-5 ${textPadding}`}
      style={{ minHeight: "500px" }}
      >
        <div>
          <p className=" font-bold text-3xl mt-6 tracking-wide">{name}</p>
          <p className=" text-xl tracking-wide ">{area}</p>
        </div>
        <p className=" text-base tracking-wide ">{description}</p>
        <div>
          <p className="  font-bold text-base tracking-wide">Status: </p>
          <p className="  text-base tracking-wide ">{status} </p>
        </div>

        <div>
          <p className=" font-bold text-base tracking-wide">{usedTechs}</p>
          <p className="text-base tracking-wide"> {formattedTechs}</p>
        </div>

        <button className="bg-black shadow-md rounded-lg p-2 w-40 m-4 hover:cursor-pointer hover:bg-gray-dark z-10">
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
