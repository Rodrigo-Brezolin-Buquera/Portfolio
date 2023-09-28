import React from 'react'
import DescriptionText from './DescriptionText'
import ProfilePicture from './ProfilePicture'
import SocialMedia from './SocialMedia'

const PersonalDetails = () => {
  return (
    <section className="flex w-full flex-col-reverse items-center md:flex-row md:justify-between lg:justify-around bg-gray-dark p-4 md:p-12 relative" >
        <DescriptionText/>
        <ProfilePicture/>
        <SocialMedia/>
    </section>
  )
}

export default PersonalDetails