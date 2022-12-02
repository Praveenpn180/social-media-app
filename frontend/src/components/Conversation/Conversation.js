import React, { useState } from 'react'
import { useEffect } from 'react'
import './Conversation.css'
import {getUser} from '../../api/UserRequest.js'


const Conversation = ({data,currentUser,online}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const [userData,setUserData] = useState(null)

 
   useEffect(()=> {

    const userId = data.members.find((id)=>id!==currentUser)
    const getUserData = async ()=> {
      try
      {
          const {data} =await getUser(userId)
         setUserData(data)
      }
      catch(error)
      {
        console.log(error)
      }
    }

    getUserData();
  }, [currentUser,data.members])

  return (
    <>
   <div className="follower conversation">
      <div>
      <div className={online?"online-dot":''}></div>
     
        <img src={userData?.profilePicture ? serverPublic + userData.profilePicture : serverPublic + "profile.png"} 
        alt="" className='followerImage' style={{width:"50px",hight:"50px"}}/>
        <div className="name" style={{fontSize:"0.8rem"}}>
          <span>{userData?.firstName} {userData?.lastName}</span>
          <span style={{color: online?"#51e200":""}}>{online? "Online" : "Offline"}</span>
        
        </div>
      </div>
   </div>
<hr style={{width:"85%",border:"0.1px solid #ececec"}} />
        </>
  )
}

export default Conversation