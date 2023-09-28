import "./animation.css"


const TechList = ({ list, area, color }) => {
  const formattedList = list.join(" - ");

  const animation = area === "Frontend" ? "appear-right" : "appear-left"

  return (
    <article
      className={`flex flex-col items-center p-12 md:w-96 h-72 lg:h-80 xl:w-1/3 shadow-md ${color} ${animation}`}
    >
      <h2 className="font-bold text-3xl md:text-4xl tracking-wide pb-8 ">{area}</h2>
      <p className="text-xl xl:text-2xl text-center tracking-wide">{formattedList}</p>
    </article>
  );
};

export default TechList;
