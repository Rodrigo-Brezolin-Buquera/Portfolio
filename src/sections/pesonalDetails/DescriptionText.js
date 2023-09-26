import "./animation.css"
import CV from "../../assets/cv.pdf"
const DescriptionText = () => {
  return (
    <article className="md:w-1/2 flex flex-col min-h-fit image-appear">
      <p className="font-bold text-2xl  lg:text-3xl pt-8 tracking-wide text-center sm:text-left">
        Rodrigo Brezolin Buquera
      </p>
      <p className="font-semibold text-xl  lg:text-2xl tracking-wide pb-4 text-center sm:text-left">
        Desenvolvedor Web Fullstack
      </p>
      <br />
      <p className="text-sm tracking-wide lg:text-lg text-center sm:text-left">
        Minha jornada é uma busca incessante por novos conhecimentos. Essa busca me conduziu à minha formação como engenheiro ambiental e pós-graduações. No entanto, a sede de aprendizado e a busca por novos desafios me levaram a uma transição de carreira. Hoje, como desenvolvedor web fullstack, ofereço habilidades técnicas sólidas e estou pronto para enfrentar desafios e inovações, entregando soluções de qualidade superior.
      </p>

      <button className="bg-cyan shadow-md rounded-lg p-2 w-32 m-4 mx-auto md:m-8 hover:cursor-pointer hover:bg-cyan-dark">
        <a
          href={CV}
          download="Download CV"
          target="_blank"
          rel="noreferrer"
          className="tracking-wide"
        >Baixar CV</a>
      </button>
    </article>
  );
};

export default DescriptionText;
