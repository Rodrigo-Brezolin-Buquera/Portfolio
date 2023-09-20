import React from "react";
import Icon from "./Icon";
import ReactWhatsapp from "react-whatsapp";
import { githubURL, linkedinURL, reactWhatapp, whatsappMessage } from "@/global/ptTexts";

interface IconGroupProps {
    size: number;
  }

const IconGroup = ({size}: IconGroupProps) => {
  return (
    <>
      <Icon img={"/linkedin.svg"} altText={"Linkedin icon"}  url={linkedinURL} size={size} />
      <Icon img={"/github.svg"} altText={"Github icon"} url={githubURL}  size={size} />
      <ReactWhatsapp number={reactWhatapp} message={whatsappMessage} element="a" >
        <Icon img={"/whatsapp.svg"} altText={"Whatsapp icon"} size={size} />
      </ReactWhatsapp>
    </>
  );
};

export default IconGroup;
