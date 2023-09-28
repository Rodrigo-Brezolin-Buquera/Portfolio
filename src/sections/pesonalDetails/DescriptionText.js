import "./animation.css"
import CV from "../../assets/cv.pdf"
import { useLanguage } from "../../global/LanguageContext";

const DescriptionText = () => {
  const { getText } = useLanguage()
  const { name, title, description, cvButton } = getText()

  return (
    <article className="md:w-1/2 lg:w-2/3 flex flex-col min-h-fit image-appear">
      <h1 className="font-bold text-2xl  lg:text-3xl pt-8 tracking-wide text-center sm:text-left">
        {name}
      </h1>
      <h2 className="font-semibold text-xl  lg:text-2xl tracking-wide pb-4 text-center sm:text-left">
        {title}
      </h2>
      <br />
      <p className="text-sm lg:text-lg text-center sm:text-left">
        {description}
      </p>

      <button className="bg-cyan shadow-md rounded-lg p-2 w-36 m-4 mx-auto md:m-8 hover:cursor-pointer hover:bg-cyan-dark">
        <a
          href={CV}
          download="Download CV"
          target="_blank"
          rel="noreferrer"
          className="tracking-wide"
        >
          {cvButton}
        </a>
      </button>
    </article>
  );
};

export default DescriptionText;
