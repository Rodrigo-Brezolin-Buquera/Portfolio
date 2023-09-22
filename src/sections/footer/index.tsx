import IconGroup from "@/components/IconGroup";
import { useResize } from "@/hooks/useResize";
import React from "react";

const Footer = () => {
  const imageSize = useResize(50,60,70)

  return (

    <footer className="flex w-full h-72 flex-col justify-center items-center bg-cyan p-12 relative ">
      <p className=" text-xl md:text-2xl tracking-wide pb-2 "> Entre em contato:</p>
      <p className=" text-xl md:text-2xl tracking-wide pb-2 ">
        rodrigobbbuquera@gmail.com
      </p>
      <p className=" text-xl md:text-2xl tracking-wide pb-2 "> (11) 98684-3389</p>
      <div className=" flex flex space-x-8 mt-8">
        <IconGroup size={imageSize} />
      </div>
      <p className=" text-xs absolute bottom-1 left-1 ">
        @ 2023, Rodrigo Brezolin
      </p>
    </footer>
  );
};

export default Footer;
