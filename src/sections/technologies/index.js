import { useLanguage } from "../../global/LanguageContext";
import TechList from "./TechList";

const Technologies = () => {
  const {getText} = useLanguage()
  const {frontend, backend} = getText()

  return (
    <section className="w-full flex flex-col md:flex-row justify-center gap-8 md:justify-around p-8 relative">
      <TechList area="Frontend" color="bg-cyan" list={frontend} />
      <TechList area="Backend" color="bg-gray-dark" list={backend} />
    </section>
  );
};

export default Technologies;
