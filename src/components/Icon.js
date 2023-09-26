

const Icon = ({ size, altText, img, url }) => {
  return (
    <a
      className="hover:cursor-pointer"
      href={url}
      target="blank"
      rel="noopener noreferrer"
    >
      <img
        src={img}
        alt={altText}
        style={{
          width: size,
          height: size,
        }}
      />
    </a>
  );
};

export default Icon;
