import React, { useState } from 'react'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import ProfileCard from '../../components/profileCard/ProfileCard'
// import PostSide from '../../components/postSide/PostSide'
import './Profile.css'
import RightSide from '../../components/RightSide/RightSide'
import TimelinePost from '../../components/TimelinePost/TimelinePost'
import Navbar from '../../components/Navbar/Navbar'

const Profile = () => {
  const [saveItem,setSavedItem] = useState(false)

  const handleSavePost = (value) =>{
    setSavedItem((value) => !value)
  }
  return (
    <div className="Profile">
      <Navbar/>
        <RightSide/>
        <div className="Profile-center">
            <ProfileCard location = 'profilePage' handleSavePost={handleSavePost} saveItem={saveItem} />
            {/* <PostSide/> */}
            <TimelinePost  saveItem={saveItem}/>

        </div>
        <ProfileLeft/>
        
    </div>
  )
}

export default Profile