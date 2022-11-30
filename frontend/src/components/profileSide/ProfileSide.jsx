import React from 'react'
import FollowersCard from '../followersCard/FollowersCard'
import LogoSearch from '../logosearch/LogoSearch'
import ProfileCard from '../profileCard/ProfileCard'
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div className="ProfileSide">
       
        <ProfileCard location="homepage"/>
        <FollowersCard/>
    </div>
  )
}

export default ProfileSide