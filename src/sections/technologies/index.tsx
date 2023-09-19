import { backendTechs, frontendTechs } from "@/global/ptTexts";
import TechList from "./TechList";

const Technologies = () => {
  return (
    <section className="flex w-full justify-center gap-8 p-8 relative">
      <TechList area="Frontend" color="bg-cyan" list={frontendTechs} />
      <TechList area="Backend" color="bg-gray-dark" list={backendTechs} />
    </section>
  );
};

export default Technologies;
