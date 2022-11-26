import React from 'react'
import { Route , Routes , Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Admin } from '../pages/AdminD/Admin'
import PostsManagement from '../pages/PostsManagement/PostsManagement'
import UserManagement from '../pages/UserManagement/UserManagement'

export const AdminRoute = () => {
    const user = useSelector((state) => state.authReducer.authData)
    let admin = false
    if (user) {
      admin = user.user.isAdmin
    }

  return (
        <>
      <Routes>
      <Route path="/post" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../auth" />} />
        <Route path="/" element={admin ? <Admin /> : <Navigate to="../auth" />} />
         <Route path="/user" element={user ? (admin ? <UserManagement /> : <Admin />) : <Navigate to="../auth" />} />
        <Route path="/analytics" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../auth" />} />
    </Routes>
    </>
  )
}
