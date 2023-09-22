import { useEffect, useState } from "react";

export const useResizeImg = () => {
  const getInitialWidth = () => {
    const screenWidth = window.innerWidth;
    return screenWidth >= 1100 ? 400 : screenWidth < 768 ? 240 : 320;
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

