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
      <Route path="/admin/post" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../login" />} />
        <Route path="/admin" element={admin ? <Admin /> : <Navigate to="../login" />} />
         <Route path="/admin/user" element={user ? (admin ? <UserManagement /> : <Admin />) : <Navigate to="../login" />} />
        <Route path="/admin/analytics" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../login" />} />
    </Routes>
    </>
  )
}
