
const DescriptionText = () => {
  return (
    <article className="w-1/2 flex flex-col">
      <p className="font-bold text-3xl pt-8 tracking-wide ">
        Rodrigo Brezolin Buquera
      </p>
      <p className="font-semibold text-1xl tracking-wide  pb-4  ">
        Desenvolvedor Web Fullstack
      </p>

      <p className="text-sm tracking-wide ">
      Minha jornada é uma busca incessante por novos conhecimentos. Essa busca me conduziu à minha formação como engenheiro ambiental e pós-graduações. No entanto, a sede de aprendizado e a busca por novos desafios me levaram a uma transição de carreira. Hoje, como desenvolvedor web fullstack, ofereço habilidades técnicas sólidas e estou pronto para enfrentar desafios e inovações, entregando soluções de qualidade superior.
      </p>

      <button className="bg-cyan shadow-md rounded-lg p-2 w-32 m-8 hover:cursor-pointer hover:bg-cyan-dark">
       <p className="tracking-wide ">Baixar CV</p> 
      </button>
    </article>
  );
};

export default DescriptionText;
