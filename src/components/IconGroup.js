import Icon from "./Icon";
import ReactWhatsapp from "react-whatsapp";
import linkedinImg from "../assets/linkedin.svg"
import githubImg from "../assets/github.svg"
import whatsappImg from "../assets/whatsapp.svg"

const IconGroup = ({ size }) => {
  const whatsappMessage = "";
  const reactWhatapp = "5515981302549";
  const githubURL = "https://github.com/Rodrigo-Brezolin-Buquera";
  const linkedinURL =
    "https://linkedin.com/in/rodrigo-brezolin-buquera-174063102";

  return (
    <>
      <Icon
        img={linkedinImg}
        altText={"Linkedin icon"}
        url={linkedinURL}
        size={size}
      />
      <Icon
        img={githubImg}
        altText={"Github icon"}
        url={githubURL}
        size={size}
      />
      <ReactWhatsapp
        number={reactWhatapp}
        message={whatsappMessage}
        element="webview"
      >
        <img
          src={whatsappImg}
          alt={"Whatsapp icon"}
          style={{
            width: `${size}px`,
            height: `${size}px`,
          }}
        />
      </ReactWhatsapp>
    </>
  );
};

export default IconGroup;
