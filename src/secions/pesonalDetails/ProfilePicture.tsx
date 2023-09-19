import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <div className=" w-80 h-80 border-white border-8 rounded-full overflow-hidden mr-16">
      <Image
        src="/profileImg.jpg"
        alt="Profile picture"
        width={320} 
        height={320} 
      />
    </div>
  )
}

export default ProfilePicture