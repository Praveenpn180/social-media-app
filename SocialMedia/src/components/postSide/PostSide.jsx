import { Box } from '@mui/material'
import React from 'react'
import Posts from '../posts/Posts'
import PostShare from '../PostShare/PostShare'
import './PostSide.css'

const PostSide = () => {
  return (
    <div className="PostSide">
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
      <PostShare />
      </Box>
        <Box mt={7}>
        <Posts/>

        </Box>
    </div>
  )
}

export default PostSide