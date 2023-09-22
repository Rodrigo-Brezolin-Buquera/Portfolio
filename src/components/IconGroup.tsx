import Icon from "./Icon";
import ReactWhatsapp from "react-whatsapp";
import Image from "next/image";

interface IconGroupProps {
  size: number;
}

const IconGroup = ({ size }: IconGroupProps) => {
  const whatsappMessage = "";
  const reactWhatapp = "5515981302549";
  const githubURL = "https://github.com/Rodrigo-Brezolin-Buquera";
  const linkedinURL =
    "https://linkedin.com/in/rodrigo-brezolin-buquera-174063102";

  return (
    <>
      <Icon
        img={"/linkedin.svg"}
        altText={"Linkedin icon"}
        url={linkedinURL}
        size={size}
      />
      <Icon
        img={"/github.svg"}
        altText={"Github icon"}
        url={githubURL}
        size={size}
      />
      <ReactWhatsapp
        number={reactWhatapp}
        message={whatsappMessage}
        element="webview"
      >
        <Image
          src={"/whatsapp.svg"}
          alt={"Whatsapp icon"}
          width={size}
          height={size}
        />
      </ReactWhatsapp>
    </>
  );
};

export default IconGroup;
