import { useResize } from '../../hooks/useResize';
import profileImg from "../../assets/profileImg.jpg"
import "./animation.css"

const ProfilePicture = () => {
  const imageSize = useResize("240px", "320px", "400px")

  return (
    <div className="border-white border-4 sm:border-8 rounded-full overflow-hidden md:mr-8 lg:mr-16 image-appear" >
      <img
        src={profileImg}
        alt="Profile"
        style={{
          width: imageSize,
          height: imageSize,
        }}
      />
    </div>
  )
}

export default ProfilePicture