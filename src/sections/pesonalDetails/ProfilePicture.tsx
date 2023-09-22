import { useResize } from '@/hooks/useResize';
import Image from 'next/image';

const ProfilePicture = () => {
  const imageSize = useResize(240, 320, 400)

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