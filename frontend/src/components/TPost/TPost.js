import React,{useEffect, useRef} from 'react'
import './TPost.css'

import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Delete from '../../img/delete.png'

import { useSelector } from 'react-redux'
import { useState } from 'react'
import { getPost, likePost } from '../../api/PostRequest'
import { deletePost } from "../../action/uploadAction";
import  { useDispatch } from 'react-redux'




const TPost = ({data,userId,saveItem}) => {

  console.log(data,"tpost");

  const ref = useRef(null);
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.authReducer.authData);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER

  const [liked,setLiked] = useState(data.likes.includes(user._id))
  const [likes,setLikes] = useState(data.likes.length);
  const [name,setName] = useState([])


  const handleLike = () =>{
    setLiked((prev)=> !prev);
    likePost(data._id,user._id);
    liked ? setLikes((prev)=> prev - 1) : setLikes((prev)=> prev + 1)
  }

// delete post
const handleDelete = (postId,ref) =>{
  dispatch(deletePost(postId,user._id))
  ref.current.remove()
}






  return (
    
    <div className="Post" ref={ref}>
       <div style={{display:"flex"}}>
        <img src={data.user[0]?.profilePicture ? serverPublic + data.user[0].profilePicture : serverPublic + "profile.png"} alt=""  className='followerImg'/>
        <div className="name">
            <span style={{paddingLeft:"10px"}}>{data.user[0]?.firstName+" "+data.user[0]?.lastName} </span> 
        </div>
    </div>
   <img src={!saveItem?data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : "" :name.image ? process.env.REACT_APP_PUBLIC_FOLDER + name.image : ""} alt=""  />

    <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" style={{cursor:"pointer"}}  onClick={handleLike}/>
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
        {user._id === data.userId ? <img style={{width:"25px",height:"25px"}} src={Delete} alt="" 
        onClick={()=> handleDelete(data._id,ref)} />:"" }
        
    </div>
    <span style={{color:"var(--gray)",fontSize : "12px"}}>{likes} Likes</span>
    <div className="details">
        <span><b> {data.name}</b></span>
        <span> {data.desc}</span>
    </div>

    </div>
  )
}

export default TPost