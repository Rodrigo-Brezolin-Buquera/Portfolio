import TechList from "./TechList";
import { backendTechs, frontendTechs } from "./tecnologies";

const Technologies = () => {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center gap-8 md:justify-around p-8 relative">
      <TechList area="Frontend" color="bg-cyan" list={frontendTechs} />
      <TechList area="Backend" color="bg-gray-dark" list={backendTechs} />
    </section>
  );
};

export default Technologies;
