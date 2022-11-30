import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profileSide/ProfileSide'
import RightSide from '../../components/RightSide/RightSide'
import Navbar from '../../components/Navbar/Navbar'
import './Home.css'

const Home = () => {
  return (
    <div className="Home">
      <Navbar/>
        <RightSide/>
        <PostSide/>
        <ProfileSide/>
    </div>
  )
}

export default Home