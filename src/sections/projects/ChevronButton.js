import chevron from "../../assets/chevron.svg"

const ChevronButton = ({ handler, side, size }) => {
  const sideStyle = side === "right" ? "right-5" : "left-5 rotate-180";

  return (
   
      <img
        src={chevron}
        alt="Chevron icon"
        style={{
          width: size,
          height: size,
        }}
        onClick={handler}
        className={`
        absolute z-10 top-40 sm:top-1/3 
        ${sideStyle} z-10
        opacity-75 hover:opacity-100 hover:cursor-pointer  
        `}
      />
  );
};

export default ChevronButton;
