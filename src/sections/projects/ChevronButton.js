import chevron from "../../assets/chevron.svg"

const ChevronButton = ({ handler, side }) => {
  const sideStyle = side === "right" ? "right-5" : "left-5 rotate-180";

  return (
   
      <img
        src={chevron}
        alt="Chevron icon"
        onClick={handler}
        className={`
        w-10 sm:w-12 lg:w-16
        absolute z-10 top-40 sm:top-1/3 
        ${sideStyle} z-10
        opacity-75 hover:opacity-100 hover:cursor-pointer  
        `}
      />
  );
};

export default ChevronButton;
