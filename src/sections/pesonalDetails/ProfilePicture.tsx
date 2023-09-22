import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfilePicture = () => {
  const getInitialWidth = () =>{
    const screenWidth = window.innerWidth;
    return screenWidth >= 768 ? 320 : 240; 
  }
  const [imageSize, setImageSize] = useState(getInitialWidth());


  const handleResize = () =>{
    const newWidth = getInitialWidth();
    setImageSize(newWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className=" w-60 md:w-80 border-white border-8 rounded-full overflow-hidden md:mr-8 lg:mr-16">
      <Image
        src="/profileImg.jpg"
        alt="Profile picture"
        width={imageSize} 
        height={imageSize} 
      />
    </div>
  )
}

export default ProfilePicture