import Image from "next/image";

interface CrevronButtonProps {
  side: string;
  handler: () => void;
}

const ChevronButton = ({ handler, side }: CrevronButtonProps) => {
  const sideStyle = side === "right" ? "right-5" : "left-5 rotate-180";

  return (
   
      <Image
        src="/chevron.svg"
        alt="Chevron icon"
        width={70}
        height={70}
        onClick={handler}
        className={`absolute z-10 top-1/2 ${sideStyle} z-10
        opacity-75 hover:opacity-100 hover:cursor-pointer  
        `}
      />
  );
};

export default ChevronButton;
