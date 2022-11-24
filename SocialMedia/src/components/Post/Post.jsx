import React,{useEffect, useRef} from 'react'
import './Post.css'

import Comment from '../../img/comment.png'
// import Share from '../../img/share.png'
import Download from '../../img/download.png'
import Completed from '../../img/completed.png'
import Heart from '../../img/like.png'
import NotLike from '../../img/notlike.png'
import Delete from '../../img/delete.png'

import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'
// import {deletePost} from '../../api/PostRequest'
import { deletePost } from "../../action/uploadAction";
import  { useDispatch } from 'react-redux'
import { getUser, savePost } from '../../api/UserRequest'
import {
  Checkbox,
  IconButton,
 
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";


const Post = ({data,userId}) => {
  const {user} = useSelector((state)=> state.authReducer.authData);


  const [liked,setLiked] = useState(data.likes.includes(user._id))
  const [likes,setLikes] = useState(data.likes.length);
  const [saved,setSaved] = useState(user.savePost.includes(data._id))
  // get user

  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER


  const ref = useRef(null);
  const dispatch = useDispatch()
  

  // const [save,setSave] = useState(false)
  
 

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



// post save
const handleSave =(postId,userId)=>{
  savePost(postId,userId);
  setSaved((prev)=> !prev);

  // setSave((prev)=> !prev)
  
}


  return (
    
    <div className="Post" ref={ref}>
      <div style={{display:"flex"}}>
        <img src={data.user[0].profilePicture ? serverPublic + data.user[0].profilePicture : serverPublic + "profile.png"} alt=""  className='followerImg'/>
        <div className="name">
            <span style={{paddingLeft:"10px"}}>{data.user[0]?.firstname+" "+data.user[0]?.lastname} </span> 
        </div>
    </div>
    <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt=""  />

    <div className="postReact">
    <IconButton aria-label="add to favorites" onClick={handleLike}  title="New Post">
        
       
        <Checkbox 
        {...liked ? (
        {checked:true }) : ({checked:false} )}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        /> 
        <span style={{fontSize: 12}}> {likes} likes</span>
       
      </IconButton>
        <img src={Comment} alt="" />

       {
        user._id === data.userId?'':<img src={saved?Completed:Download}style={{width:"25px",height:"25px"}} onClick={() => handleSave(data._id,user._id)} alt="" />
       }

  
     
        {user._id === data.userId ? <img style={{width:"25px",height:"25px"}} src={Delete} alt="" 
        onClick={()=> handleDelete(data._id,ref)} />:"" }
        
    </div>
    <div className="details">
        <span><b> {data.name}</b></span>
        <span> {data.desc}</span>
    </div>

    </div>
  )
}

export default Post