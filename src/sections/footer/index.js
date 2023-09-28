import IconGroup from "../../components/IconGroup";
import { useResize } from "../../hooks/useResize";
import { useLanguage } from "../../global/LanguageContext";

const Footer = () => {
  const imageSize = useResize("50px", "60px", "70px")
  const { getText } = useLanguage()
  const { contact, email, phone } = getText()

  return (
    <footer className="flex w-full h-72 flex-col justify-center items-center bg-cyan p-8 sm:p-12 relative ">
      <p className=" text-md md:text-2xl tracking-wide pb-2 ">{contact}</p>
      <p className=" text-md md:text-2xl tracking-wide pb-2 ">{email}</p>
      <p className=" text-md md:text-2xl tracking-wide pb-2 ">{phone}</p>

      <div className=" flex flex space-x-8 mt-4 sm:mt-8 ">
        <IconGroup size={imageSize} />
      </div>
      
      <p className=" text-xs absolute bottom-1 right-1 ">
        @ 2023, Rodrigo Brezolin
      </p>
    </footer>
  );
};

export default Footer;
