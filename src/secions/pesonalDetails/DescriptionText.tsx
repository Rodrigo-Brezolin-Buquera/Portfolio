
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
        Eu sempre gostei de apreender. Ao longo de toda minha vida busquei novos
        conhecimentos que me agregassem algo, mesmo não sendo diretamente com
        aquilo que eu atuava no momento. Minha trajetória é um exemplo claro
        deste desejo constante pelo (auto)conhecimento. Desde de minha formação
        como engenheiro ambiental estive sempre me transformando. Atualmente, na
        programação e desenvolvimento web.
      </p>

      <button className="bg-cyan shadow-md rounded-lg p-2 w-32 m-8 hover:cursor-pointer hover:bg-cyan-dark">
       <p className="tracking-wide ">Baixar CV</p> 
      </button>
    </article>
  );
};

export default DescriptionText;
