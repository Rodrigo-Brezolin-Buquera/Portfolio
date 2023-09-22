import Image from 'next/image';
import {useResizeImg} from './useResizeImg';

const ProfilePicture = () => {
  const imageSize = useResizeImg()

  return (
    <div className=" w-60 md:w-80 lg:w-96 border-white border-8 rounded-full overflow-hidden md:mr-8 lg:mr-16">
      <Image
        src="/profileImg.jpg"
        alt="Profile picture"
        width={imageSize} 
        height={imageSize} 
        priority={true} 
      />
    </div>
  )
}

export default ProfilePicture