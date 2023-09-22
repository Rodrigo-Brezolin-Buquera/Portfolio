interface TechListProps {
  list: string[];
  area: string;
  color: string;
}

const TechList = ({ list, area, color }: TechListProps) => {
  const formattedList = list.join(" - ");

  return (
    <article
      className={`flex flex-col items-center p-12 md:w-96 h-72 lg:h-80 xl:w-1/3 shadow-md ${color}`}
    >
      <p className="font-bold text-3xl md:text-4xl tracking-wide pb-8 ">{area}</p>
      <p className="text-xl xl:text-2xl text-center tracking-wide">{formattedList}</p>
    </article>
  );
};

export default TechList;
