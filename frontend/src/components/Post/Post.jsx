import React,{ useRef} from 'react'
import './Post.css'

//import Comment from '../../img/comment.png'
// import Share from '../../img/share.png'
import Download from '../../img/download.png'
import Completed from '../../img/completed.png'
import Delete from '../../img/delete.png'
import DateFormatter from '../../utils/DateFormatter'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { likePost } from '../../api/PostRequest'
// import {deletePost} from '../../api/PostRequest'
import { deletePost } from "../../action/uploadAction";
import { getComments } from '../../api/PostRequest'
import  { useDispatch } from 'react-redux'
import { savePost } from '../../api/UserRequest'
import {
  Checkbox,
  IconButton,
 
} from "@mui/material";
import { Favorite, FavoriteBorder , Comment } from "@mui/icons-material";
import Comments from "../Comments/Comments"

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
const [commentOpen, setCommentOpen] = useState(false);
const [comment, setComment] = useState()
const handleComment = async() => {
 if(!commentOpen){
    const comments = await getComments(data?._id)
    setComment(comments.data)
  }
    setCommentOpen(!commentOpen)
  }


  return (
    
    <div className="Post" ref={ref}>
      <div style={{display:"flex"}}>
        <img src={data.user[0]?.profilePicture ? serverPublic + data.user[0].profilePicture : serverPublic + "profile.png"} alt=""  className='followerImg'/>
        <div className="name">
            <span style={{paddingLeft:"10px"}}>{data.user[0]?.firstName+" "+data.user[0]?.lastName} </span> 
        </div>
    </div>
    {<time><DateFormatter date={data?.createdAt} /></time>}
    <img src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""} alt=""  />
    <div className="details">
       
       <span> {data.desc}</span>
   </div>
    <div className="postReact">
    <IconButton aria-label="add to favorites" onClick={handleLike}  title="New Post">
        
       
        <Checkbox 
        style={{marginTop:-10}}
        {...liked ? (
        {checked:true }) : ({checked:false} )}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite sx={{ color: "red" }} />}
        /> 
        <span style={{fontSize: 12,marginTop:-10}}> {likes} likes</span>
       
      </IconButton>
      <IconButton aria-label="comment" onClick={ handleComment }>
          <Comment />
        </IconButton>

       {
        user._id === data.userId?'':<img src={saved?Completed:Download}style={{width:"25px",height:"25px"}} onClick={() => handleSave(data._id,user._id)} alt="" />
       }

  
     
        {user._id === data.userId ? <img style={{width:"25px",height:"25px"}} src={Delete} alt="" 
        onClick={()=> handleDelete(data._id,ref)} />:"" }
        
    </div>
    {commentOpen && <Comments post={comment} data={data} handleComment={handleComment} />}

    </div>
  )
}

export default Post