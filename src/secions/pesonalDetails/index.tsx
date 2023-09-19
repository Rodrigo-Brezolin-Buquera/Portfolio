import React from 'react'
import DescriptionText from './DescriptionText'
import ProfilePicture from './ProfilePicture'
import SocialMedia from './SocialMedia'

const PersonalDetails = () => {
  return (
    <section className="flex w-full  justify-between bg-gray-dark p-12 relative" >
        <DescriptionText/>
        <ProfilePicture/>
        <SocialMedia/>
    </section>
  )
}

export default PersonalDetails