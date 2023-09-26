import IconGroup from "../../components/IconGroup";
import { useResize } from "../../hooks/useResize";

const SocialMedia = () => {
  const imageSize = useResize("40px","50px","60px")

  return (
    <div className="sm:absolute mb-2 flex space-x-4 sm:mb-0 sm:flex-col sm:items-end right-0 sm:pr-4 sm:space-y-4">
      <IconGroup size={imageSize} />
    </div>
  );
};

export default SocialMedia;
