import profileImg from "../../assets/profileImg.jpg"
import "./animation.css"

const ProfilePicture = () => {

  return (
    <div className="border-white border-4 sm:border-8 rounded-full overflow-hidden md:mr-8 lg:mr-16 image-appear" >
      <img
        src={profileImg}
        alt="Profile"
        className={"w-60 sm:w-80 lg:w-96"}
      />
    </div>
  )
}

export default ProfilePicture