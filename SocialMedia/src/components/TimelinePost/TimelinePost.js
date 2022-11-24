import React from 'react'
import TimePost from '../TimePost/TimePost'
// import PostShare from '../PostShare/PostShare'
import './TimelinePost.css'

const TimelinePost = ({saveItem}) => {
  return (
    <div className="TimelinePost">
        
        {/* <PostShare/> */}
        <TimePost saveItem={saveItem}/>
    </div>
  )
}

export default TimelinePost