import React from 'react'
import { Routes, Route , Navigate ,BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/home/Home'
import Login from '../pages/Auth/Login'
import Signup from '../pages/Auth/Signup'
import Profile from '../pages/Profile/Profile'
import { Friends } from '../pages/Friends/Friends'
import Chat from '../pages/Chat/Chat'
import { Admin } from '../pages/AdminD/Admin'
import PostsManagement from '../pages/PostsManagement/PostsManagement'
import UserManagement from '../pages/UserManagement/UserManagement'
export const Allroutes = () => {
    const user = useSelector((state) => state.authReducer.authData)
  let admin = false
  if (user) {
    admin = user.user.isAdmin
  }
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? (admin ? <Navigate to="admin" /> : <Navigate to="home" />) : <Navigate to="login" />} />
                <Route path="/home" element={user ? (admin ? <Admin /> : <Home />) : <Navigate to="../login" />} />
                <Route path="/login" element={user ? <Navigate to="../home" /> : <Login />} />
                <Route path="/Signup" element={user ? <Navigate to="../home" /> : <Signup />} />
                <Route path="/profile" element={user ? <Profile /> : <Navigate to="../login" />} />
                <Route path="/friends" element={user ? <Friends /> : <Navigate to="../login" />} />
                <Route path="/chat" element={user ? <Chat /> : <Navigate to="../login" />} />

                <Route path="/admin/post" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../login" />} />
        <Route path="/admin" element={admin ? <Admin /> : <Navigate to="../login" />} />
         <Route path="/admin/user" element={user ? (admin ? <UserManagement /> : <Admin />) : <Navigate to="../login" />} />
        <Route path="/admin/analytics" element={user ? (admin ? <PostsManagement /> : <Admin />) : <Navigate to="../login" />} />
   
            </Routes>
            </BrowserRouter>
        </>
    )
}
