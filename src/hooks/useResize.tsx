"use client";

import { useEffect, useState } from "react";

export const useResize = (
  smallSize: number,
  mediumSize: number,
  bigSize: number
) => {
  const getInitialWidth = () => {

    


    const screenWidth = window.innerWidth;
    return screenWidth >= 1100
      ? bigSize
      : screenWidth < 768
      ? smallSize
      : mediumSize;
  };
  const [imageSize, setImageSize] = useState(getInitialWidth());

  const handleResize = () => {
    const newWidth = getInitialWidth();
    setImageSize(newWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return imageSize;
};
