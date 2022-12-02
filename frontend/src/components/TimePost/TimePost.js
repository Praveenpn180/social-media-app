import React from 'react'
import './TimePost.css'
import {  useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import TPost from '../TPost/TPost'
import { getTimelinePostsUser } from '../../api/PostRequest'



const TimePost = ({saveItem}) => {

  const { user } = useSelector((state) => state.authReducer.authData)
  let {loading } = useSelector((state) => state.postReducer)
  const [timelinePost, setTimelinePost] = useState([])

  

  useEffect(()=>{
    const posts = async() =>{
      const {data} = await getTimelinePostsUser(user._id)
      setTimelinePost(data)
  
  }
    posts()
},[user._id])



 
 
  return (
    <div className="Posts">
      {loading ? "Fetching posts..." : timelinePost.map((post, _id) => {
            
        return <TPost key={_id} data={post} userId={post.userId}   saveItem={saveItem}/>
        
        
      })}
    </div>

  )
}

export default TimePost