import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { followUser, unFollowUser } from '../../action/userAction'
import { startChat } from '../../api/ChatRequest'
import badge from '../../img/badge.png'
import "./Friend.css"
import { useNavigate } from 'react-router-dom'
const Friend = ({person}) => {
   
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.authReducer.authData)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
const navigate = useNavigate()
  let followerss = user.followers.length

  const startaChat = ()=>{
    let data = {}
    data.senderId=user._id
    data.receiverId = person._id
    startChat(data)
    navigate('/chat')
  }
  
  const [following,setFollowing] = useState(person.followers.includes(user._id))

  const handleFollow = () =>{
   following ? dispatch(unFollowUser(person._id,user)) : dispatch(followUser(person._id, user))
   setFollowing((prev)=> !prev)
  }

  return (
    <div className="friendlist">
    <div>
        <img src={person.profilePicture ? serverPublic + person.profilePicture : serverPublic + "profile.png"} alt=""  className='followerImg'/>
        <div className="name">
            <span>{person.firstName} <img src={followerss>=2?badge:""} alt="" style={{width:"15px",hieght:"20px"}}/></span>
           
            <span>@{person.email}</span>
        </div>
    </div>
    <button className={following ? 'button fc-button UnfollowButton' : "button fc-button"} onClick={handleFollow}>
        {following? "unfollow" : " Follow"}
    </button>
     <button onClick={()=>{startaChat()}} className='messagebutton'>Message</button>
</div>
  )
}

export default Friend