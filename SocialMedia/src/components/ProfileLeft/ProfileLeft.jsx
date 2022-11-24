import React from 'react'
import FollowersCard from '../../components/followersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'


const ProfileLeft = () => {
  return (
    <div className="ProfileSide">
        <InfoCard/>
        <FollowersCard/>
    </div>

  )
}

export default ProfileLeft