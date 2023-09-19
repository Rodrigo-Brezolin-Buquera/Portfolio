import Image from 'next/image';

interface IconProps {
    size:number
    altText: string
    img: string
    url?: string 
}

const Icon = ({size, altText, img, url}:IconProps) => {
  return (
    <a className="hover:cursor-pointer" href={url} target="blank" rel="noopener noreferrer"> 

      <Image
      src={img}
      alt={altText}
      width={size}
      height={size}
    />  
    </a>
    )
}

export default Icon


